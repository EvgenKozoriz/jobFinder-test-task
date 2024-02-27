"use client";
import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import useSWR from "swr";
import { Job, JobsResponse } from "@/types";
import JobCard from "../JobCard";
import { fetcher } from "@/api/swrFetcher";

const JobSuggestions = () => {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const userProfile = localStorage.getItem("profileData");
    if (userProfile) {
      const userProfileJobTitle = JSON.parse(userProfile).jobTitle;
      setQuery(userProfileJobTitle);
    }
  }, []);

  const {
    data: jobs,
    error,
    isLoading,
  } = useSWR<JobsResponse>(
    query ? `https://jsearch.p.rapidapi.com/search?query=${query}` : null,
    fetcher
  );

  return (
    <section className="mx-auto max-w-5xl flex flex-col items-center">
      <div className="my-10">
        <h2 className="text-3xl font-bold text-center mb-5">
          Jobs Suggestions
        </h2>
        {isLoading && <Loader />}
        {error && (
          <div className="text-center font-bold text-red-500">
            Something went wrong...
          </div>
        )}
        {!jobs && !isLoading && (
          <div className="text-center text-gray-500 mt-8">
            <p className="text-lg font-semibold">Profile not created</p>
            <p className="mt-2">Create your profile to have job suggestions</p>
          </div>
        )}
        <ul className="flex flex-col gap-3 max-w-5xl">
          {jobs?.data.map((job: Job) => (
            <JobCard key={job.job_id} job={job} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default JobSuggestions;
