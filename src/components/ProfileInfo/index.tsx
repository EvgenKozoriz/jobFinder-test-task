import Link from "next/link";
import React from "react";

interface ProfileData {
  name: string;
  jobTitle: string;
  about: string;
}

interface IProfileInfoProps {
  profileData: ProfileData;
  handleDeleteProfile: () => void;
}

const ProfileInfo: React.FC<IProfileInfoProps> = ({
  profileData,
  handleDeleteProfile,
}) => {
  return (
    <div className="bg-blue-100 p-5 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-5">Your Profile</h2>
      <div className="mb-3">
        <span className="text-xl font-semibold">{profileData.name}</span>
      </div>
      <div className="mb-3">
        <span className="text-lg text-blue-600">{profileData.jobTitle}</span>
      </div>
      <div className="text-gray-700 mb-5">
        <p>{profileData.about}</p>
      </div>
      <div className="flex items-center justify-between">
        <Link
          href={"/jobs"}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:scale-[1.05]"
        >
          Job suggestions
        </Link>
        <button
          onClick={handleDeleteProfile}
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:scale-[1.05]"
        >
          Delete Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
