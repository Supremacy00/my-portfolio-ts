"use client";

import React, { useState, useRef, RefObject, JSX } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { TbSquareArrowRightFilled } from "react-icons/tb";
import { useFormik } from "formik";
import * as Yup from "yup";
import { saveContactFormData } from "@/utils/contactFormUtils";
import useCloseOnOutsideClick from "../../hooks/useCloseOnOutsideClick";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";

type FieldType = "name" | "email";

interface InputField {
  type: FieldType;
  icon: JSX.Element;
  placeholder: string;
  id: number;
}

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const inputFields: InputField[] = [
  { type: "name", icon: <FaUserCircle />, placeholder: "Name", id: 1 },
  {
    type: "email",
    icon: <MdOutlineAlternateEmail />,
    placeholder: "Email",
    id: 2,
  },
];

type ActiveField = FieldType | "textarea" | null;

const ContactForm = () => {
  const [activeField, setActiveField] = useState<ActiveField>(null);

  const nameRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLDivElement>(null);

  useCloseOnOutsideClick(
    activeField !== null,
    () => setActiveField(null),
    nameRef as RefObject<HTMLElement>,
    emailRef as RefObject<HTMLElement>,
    textareaRef as RefObject<HTMLElement>,
  );

  const handleInputClick = (field: ActiveField) => {
    if (activeField !== field) {
      setActiveField(field);
    }
  };

  // Validation schema with Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name should be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message should be at least 10 characters")
      .required("Message is required"),
  });

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const result = await saveContactFormData(values);
        if (result.success) {
          toast.success("Message sent successfully!");
          resetForm();
          setActiveField(null);
        } else {
          toast.error(
            result.error || "Failed to send message. Please try again.",
          );
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("An unexpected error occurred. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-7">
      <div className="p-7 bg-custom1 dark:bg-custom2 rounded-2xl">
        {inputFields.map((input) => (
          <div key={input.id} className="mt-8 first:mt-0">
            <div
              className="flex items-center "
              ref={input.type === "name" ? nameRef : emailRef}
            >
              <label
                className={`${
                  activeField === input.type
                    ? "bg-custom5 text-secondary dark:text-dark"
                    : formik.touched[input.type] && formik.errors[input.type]
                      ? "bg-red-500 text-dark"
                      : "bg-dark dark:bg-secondary text-light2 dark:text-dark2"
                } $ text-[18px] p-4.25 rounded-l-lg transition-all duration-500 ease-in-out`}
              >
                {input.icon}
              </label>
              <span
                className="block w-full"
                onClick={() => handleInputClick(input.type)}
              >
                <input
                  type={input.type === "email" ? "email" : "text"}
                  placeholder={input.placeholder}
                  className="w-full py-3.75 text-[15px] placeholder:text-[13px] text-light dark:text-dark placeholder-light2 dark:placeholder-dark2 px-4 rounded-r-lg rounded-l-none bg-custom14 dark:bg-custom13 outline-none"
                  {...formik.getFieldProps(input.type)}
                />
              </span>
            </div>
            {formik.touched[input.type] && formik.errors[input.type] && (
              <div className="mt-1 text-sm text-red-500">
                {formik.errors[input.type]}
              </div>
            )}
          </div>
        ))}
        <div className="flex mt-8" ref={textareaRef}>
          <label
            className={`${
              activeField === "textarea"
                ? "bg-custom5 text-secondary dark:text-dark"
                : formik.touched["message"] && formik.errors["message"]
                  ? "bg-red-500 text-dark"
                  : "bg-dark dark:bg-secondary text-light2 dark:text-dark2"
            } text-[20px] p-[16.3px] rounded-l-lg transition-all duration-500 ease-in-out`}
          >
            <HiOutlineMail />
          </label>
          <textarea
            placeholder="Message"
            className="w-full p-4 h-36 text-[15px] placeholder:text-[13px] text-light dark:text-dark placeholder-light2 dark:placeholder-dark2 rounded-r-lg rounded-l-none bg-custom14 dark:bg-custom13 outline-none resize-none"
            onClick={() => handleInputClick("textarea")}
            {...formik.getFieldProps("message")}
          />
        </div>
        {formik.touched.message && formik.errors.message && (
          <div className="mt-1 text-sm text-red-500">
            {formik.errors.message}
          </div>
        )}
      </div>
      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="inline-block mb-5 text-base lg:mb-1 mt-7 custom-cursor group text-light dark:text-dark"
      >
        <span
          className={`${
            formik.isSubmitting
              ? "group-hover:text-light group-hover:dark:text-dark"
              : "group-hover:text-custom5"
          } flex items-center gap-2 `}
        >
          <h3 className="text-[13px] font-semibold uppercase">Send Message</h3>
          {formik.isSubmitting ? (
            <ClipLoader
              color="currentColor"
              size={18}
              className="group-hover:ml-1 group-hover:text-[20px] transition-all duration-300 ease-in-out"
            />
          ) : (
            <TbSquareArrowRightFilled className="group-hover:ml-1 group-hover:text-[20px] transition-all duration-300 ease-in-out" />
          )}
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
