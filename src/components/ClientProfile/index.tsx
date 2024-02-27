"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import ProfileForm from "../ProfileForm";
import ProfileInfo from "../ProfileInfo";

interface IProfileData {
  name: string;
  jobTitle: string;
  about: string;
}

const ClientProfile = () => {
  const [profileData, setProfileData] = useState<IProfileData>({
    name: "",
    jobTitle: "",
    about: "",
  });

  const [isProfileDataExist, setIsProfileDataExist] = useState<boolean>(false);

  useEffect(() => {
    const isDataExist = localStorage.getItem("profileData");
    if (isDataExist) {
      setIsProfileDataExist(!!isDataExist);
    }
  }, []);

  useEffect(() => {
    const storedProfileData = localStorage.getItem("profileData");
    if (storedProfileData) {
      setProfileData(JSON.parse(storedProfileData));
    }
  }, []);

  const handleDeleteProfile = () => {
    localStorage.removeItem("profileData");
    setProfileData({
      name: "",
      jobTitle: "",
      about: "",
    });
    setIsProfileDataExist((prev) => !prev);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (values: IProfileData) => {
    localStorage.setItem("profileData", JSON.stringify(values));
    setProfileData(values);
    setIsProfileDataExist((prev) => !prev);
  };

  return isProfileDataExist ? (
    <ProfileInfo
      handleDeleteProfile={handleDeleteProfile}
      profileData={profileData}
    />
  ) : (
    <ProfileForm
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      profileData={profileData}
    />
  );
};

export default ClientProfile;
