import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

interface ProfileData {
  name: string;
  jobTitle: string;
  about: string;
}

interface IProfileFormProps {
  profileData: ProfileData;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (values: ProfileData) => void;
}

const ProfileForm: React.FC<IProfileFormProps> = ({
  profileData,
  handleInputChange,
  handleSubmit,
}) => {
  const initialValues: ProfileData = {
    name: profileData.name || "",
    jobTitle: profileData.jobTitle || "",
    about: profileData.about || "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(60, "Too Long!")
      .required("Name is required"),
    jobTitle: Yup.string()
      .min(2, "Too Short!")
      .max(80, "Too Long!")
      .required("job title is required"),
    about: Yup.string()
      .min(2, "Too Short!")
      .max(3000, "Too Long!")
      .required("about section is required"),
  });

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center p-5">
        Create your profile
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form className="flex flex-col gap-4 items-center">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-800 font-semibold">
              Type your name:
            </label>
            <Field
              name="name"
              as="input"
              placeholder="your Name"
              className="w-full lg:w-96 bg-blue-100 rounded-lg border-blue-300 border-2 px-4 py-2 text-gray-800 focus:outline-none focus:border-blue-600"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="jobTitle" className="text-gray-800 font-semibold">
              Type your job title:
            </label>
            <Field
              name="jobTitle"
              placeholder="your Job title"
              className="w-full lg:w-96 bg-blue-100 rounded-lg border-blue-300 border-2 px-4 py-2 text-gray-800 focus:outline-none focus:border-blue-600"
            />
            <ErrorMessage
              name="jobTitle"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="about" className="text-gray-800 font-semibold">
              Type about yourself:
            </label>
            <Field
              name="about"
              as="textarea"
              className="h-40 w-full lg:w-96 resize-none bg-blue-100 rounded-lg border-blue-300 border-2 px-4 py-2 text-gray-800 focus:outline-none focus:border-blue-600"
              placeholder="describe yourself"
            />
            <ErrorMessage
              name="about"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 hover:scale-[1.05]"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProfileForm;
