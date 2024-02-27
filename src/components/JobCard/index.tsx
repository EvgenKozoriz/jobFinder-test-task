"use client";
import { Job } from "@/types";
import { ArrowRightIcon, HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IJobCardProps {
  job: Job;
}

const JobCard: React.FC<IJobCardProps> = ({ job }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likedJobs = JSON.parse(localStorage.getItem("likedJobs") || "[]");
    setIsLiked(
      likedJobs.some((likedJob: Job) => likedJob.job_id === job.job_id)
    );
  }, [job]);

  const handleShowDetails = () => {
    localStorage.setItem("job", JSON.stringify(job));
  };

  const handleToggleFavorite = () => {
    const likedJobs = JSON.parse(localStorage.getItem("likedJobs") || "[]");
    if (isLiked) {
      const updatedLikedJobs = likedJobs.filter(
        (likedJob: Job) => likedJob.job_id !== job.job_id
      );
      localStorage.setItem("likedJobs", JSON.stringify(updatedLikedJobs));
    } else {
      likedJobs.push(job);
      localStorage.setItem("likedJobs", JSON.stringify(likedJobs));
    }
    setIsLiked(!isLiked);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="bg-blue-100 flex flex-col rounded-md border-2 border-blue-300 p-4 ">
      <div className="flex justify-between mb-5">
        <div className="flex flex-col">
          <h3 className="text-center text-xl font-bold">{job?.job_title}</h3>
          <span className="font-bold">{job?.employer_name}</span>
          {job?.job_city && (
            <span className="font-semibold">{`${job?.job_city} ${job?.job_country}`}</span>
          )}
          {job?.job_is_remote && <span className="font-semibold">remote</span>}
        </div>
        <div className="rounded-md overflow-hidden">
          {job?.employer_logo && (
            <img
              src={job?.employer_logo}
              alt="job logo"
              width={100}
              height={100}
            />
          )}
        </div>
      </div>
      <span className="line-clamp-3 mb-5">{job?.job_description}</span>
      <div className="flex justify-between">
        <Link href={`/job-details/${job?.job_id}`}>
          <button
            onClick={handleShowDetails}
            className="flex items-center gap-1 bg-blue-500 px-6 py-3 rounded-md h-full text-blue-50 font-semibold hover:scale-[1.05] group-hover:scale-[1.05] transition"
          >
            Show details
            <ArrowRightIcon className="w-4" />
          </button>
        </Link>
        <button
          onClick={handleToggleFavorite}
          className="flex items-center gap-1 bg-blue-500 px-6 py-3 rounded-md h-full text-blue-50 font-semibold hover:scale-[1.05] group-hover:scale-[1.05] transition"
        >
          {isLiked ? "Remove from favorite" : "Add to favorite"}
          <HeartIcon className="w-4" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
