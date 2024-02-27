"use client";

import { useEffect, useState } from "react";
import { Job } from "@/types";
import Link from "next/link";
import Loader from "@/components/Loader";

const Page = () => {
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const jobData = localStorage.getItem("job");
    if (jobData) {
      setJob(JSON.parse(jobData));
    }
  }, []);

  return (
    <section className="mx-auto max-w-5xl py-5">
      {!job && <Loader />}
      <div className="bg-blue-100 flex flex-col rounded-md border-2 border-blue-300 p-4">
        <div className="flex justify-between mb-5">
          <div className="flex flex-col">
            <h3 className="text-center text-2xl font-bold">{job?.job_title}</h3>
            <span className="font-bold">{job?.employer_name}</span>
            <span className="font-semibold">
              {job?.job_city} {job?.job_country}
            </span>
            {job?.job_is_remote && (
              <span className="font-semibold">remote</span>
            )}
            <span>
              {job?.job_posted_at_timestamp &&
                new Date(
                  job.job_posted_at_timestamp * 1000
                ).toLocaleDateString()}
            </span>
            {job?.job_required_experience.required_experience_in_months && (
              <span className="font-semibold">
                {`experience: ${Math.round(
                  job?.job_required_experience.required_experience_in_months /
                    12
                )} years`}
              </span>
            )}
            {job?.employer_website && (
              <a
                href={job.employer_website}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                company website
              </a>
            )}
          </div>
          <div className="rounded-md overflow-hidden">
            {job?.employer_logo && (
              <img
                src={job.employer_logo}
                alt="job logo"
                width={100}
                height={100}
              />
            )}
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2">Description:</h2>
        <p className="mb-5">
          {job?.job_description || "No description available"}
        </p>
        <div className="flex items-center justify-between">
          {job?.job_apply_link && (
            <a
              href={job.job_apply_link}
              target="_blank"
              className="bg-blue-500 px-6 py-3 text-center rounded-md h-full text-blue-50 font-semibold hover:scale-[1.05] group-hover:scale-[1.05] transition"
            >
              Apply to the job
            </a>
          )}
          <Link
            className="bg-gray-500 px-6 py-3 text-center rounded-md h-full text-gray-50 font-semibold hover:scale-[1.05] group-hover:scale-[1.05] transition"
            href={"/"}
          >
            Back to main
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
