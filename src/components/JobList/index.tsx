"use client";
import React, { useEffect, useState } from "react";
import JobCard from "../JobCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import useSWR from "swr";
import { Job, JobsResponse } from "@/types";
import Loader from "../Loader";
import { fetcher } from "@/api/swrFetcher";

const JobList = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const storedSearchText = sessionStorage.getItem("searchText");
    if (storedSearchText) {
      setSearchText(storedSearchText);
    }
  }, []);

  useEffect(() => {
    const userProfile = localStorage.getItem("profileData");
    const storedSearchText = sessionStorage.getItem("searchText");
    if (userProfile && !storedSearchText) {
      const userProfileJobTitle = JSON.parse(userProfile).jobTitle;
      setSearchText(userProfileJobTitle);
      setQuery(userProfileJobTitle);
    } else if (storedSearchText) {
      setQuery(storedSearchText);
    }
  }, []);

  useEffect(() => {
    const currentPage = sessionStorage.getItem("currentPage");
    if (currentPage) {
      console.log(currentPage);
      console.log(JSON.parse(currentPage));
      setPage(JSON.parse(currentPage));
    }
  }, []);

  const {
    data: jobs,
    error,
    isLoading,
  } = useSWR<JobsResponse>(
    query
      ? `https://jsearch.p.rapidapi.com/search?query=${query}&page=${page}`
      : null,
    fetcher
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setPage(1);
    sessionStorage.setItem("currentPage", JSON.stringify(1));
  };

  const handleSearch = () => {
    if (searchText) {
      setQuery(searchText);
      sessionStorage.setItem("searchText", searchText);
    }
  };

  const handlePrevPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
    const currentPage = JSON.stringify(page - 1);
    sessionStorage.setItem("currentPage", currentPage);
    setQuery(searchText);
  };

  const handleNextPage = () => {
    if (page === 100) return;
    setPage((prev) => prev + 1);
    const currentPage = JSON.stringify(page + 1);
    sessionStorage.setItem("currentPage", currentPage);
    setQuery(searchText);
  };

  return (
    <section className="mx-auto max-w-5xl flex flex-col items-center">
      <h2 className="text-4xl font-bold p-12">Find job of your dream</h2>
      <div className="flex gap-2 w-full h-12 items-center mb-10">
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder=" find your job.."
          className="w-full h-full rounded-md px-4 ring-1  ring-blue-400 focus:text-blue-800"
        />
        <button
          onClick={handleSearch}
          className="flex items-center bg-blue-500 px-6 rounded-md h-full text-blue-50 font-semibold hover:scale-[1.05] group-hover:scale-[1.05] transition"
        >
          <MagnifyingGlassIcon className="group w-6" />
          Search
        </button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold text-center mb-5">Jobs List</h2>
        {isLoading && <Loader />}
        {error && (
          <div className="text-center font-bold text-red-500">
            Something went wrong...
          </div>
        )}
        {!jobs && !isLoading && (
          <div className="text-center text-gray-500 mt-8">
            <p className="text-lg font-semibold">Empty...</p>
            <p className="mt-2">Find your job!</p>
          </div>
        )}
        <ul className="flex flex-col gap-3 max-w-5xl">
          {jobs?.data.map((job: Job) => (
            <JobCard key={job.job_id} job={job} />
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center mb-5">
        <button
          onClick={handlePrevPage}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mr-2 transition duration-300 hover:scale-[1.05]"
        >
          prev-
        </button>
        <span className="text-lg font-semibold mr-2">current page: {page}</span>
        <button
          onClick={handleNextPage}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:scale-[1.05]"
        >
          next+
        </button>
      </div>
    </section>
  );
};

export default JobList;
