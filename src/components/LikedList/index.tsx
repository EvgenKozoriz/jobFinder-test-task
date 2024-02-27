"use client";
import React, { useEffect, useState } from "react";
import JobCard from "../JobCard";
import { Job } from "@/types";
import Link from "next/link";

const LikedList = () => {
  const [likedJobs, setLikedJobs] = useState<Job[]>([]);

  useEffect(() => {
    const updateLikedJobs = () => {
      const storedLikedJobs = localStorage.getItem("likedJobs");
      if (storedLikedJobs) {
        setLikedJobs(JSON.parse(storedLikedJobs));
      }
    };

    updateLikedJobs();

    window.addEventListener("storage", updateLikedJobs);

    return () => {
      window.removeEventListener("storage", updateLikedJobs);
    };
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center mb-5">Liked Jobs List</h2>
      {likedJobs.length <= 0 && (
        <div className="text-center text-gray-500 mt-8">
          <p className="text-lg font-semibold">Empty...</p>
          <p className="mt-2">There are no liked jobs yet.</p>
        </div>
      )}

      <ul className="flex flex-col gap-3 max-w-5xl mb-5">
        {likedJobs.map((job) => (
          <JobCard key={job.job_id} job={job} />
        ))}
      </ul>
      <div className="relative w-full h-12">
        <Link
          className="absolute right-0 bg-gray-500 px-6 py-3 text-center rounded-md h-full text-gray-50 font-semibold hover:scale-[1.05] group-hover:scale-[1.05] transition"
          href={"/"}
        >
          Back to main
        </Link>
      </div>
    </div>
  );
};

export default LikedList;
