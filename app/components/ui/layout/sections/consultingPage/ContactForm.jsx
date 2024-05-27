"use client";

import { useState } from "react";
import { Button } from "../../../common/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    consultingType: "",
    idealTimeframe: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "This field is required";
    tempErrors.contactInfo = formData.contactInfo
      ? ""
      : "This field is required";
    tempErrors.consultingType = formData.consultingType
      ? ""
      : "This field is required";
    tempErrors.idealTimeframe = formData.idealTimeframe
      ? ""
      : "This field is required";
    setErrors(tempErrors);

    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // Submit form data
      // Placeholder for future MongoDB connection
    }
  };

  return (
    <>
      <h2
        className="text-white xs:text-2xl xs:-mb-3 md:mb-0 md:text-4xl font-bold text-center p-4 xs:-mt-8 md:mt-0
      xs4:text-3xl
      "
      >
        Reach Out
      </h2>
      <div className="bg-[#292941]  xs:w-[95%] md:w-[50vw] mx-auto min-h-[60vh] rounded-2xl mb-16 pb-8">
        <h3 className="text-white xs:text-xl xs4:text-2xl md:text-2xl font-bold text-center p-4">
          Contact Form
        </h3>
        <form className="space-y-4 w-[90%] mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 xs6:text-lg ${
              errors.name ? "border-red-500" : "border-gray-300"
            } border rounded`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="text"
            name="contactInfo"
            placeholder="Email or Telegram"
            value={formData.contactInfo}
            onChange={handleChange}
            className={`w-full p-2 xs6:text-lg ${
              errors.contactInfo ? "border-red-500" : "border-gray-300"
            } border rounded`}
          />
          {errors.contactInfo && (
            <p className="text-red-500 text-sm">{errors.contactInfo}</p>
          )}

          <select
            name="consultingType"
            value={formData.consultingType}
            onChange={handleChange}
            className={`w-full p-2 xs6:text-lg ${
              errors.consultingType ? "border-red-500" : "border-gray-300"
            } border rounded`}
          >
            <option value="">Select Consulting Type</option>
            <option value="strategy">Strategy Consulting</option>
            <option value="management">Management Consulting</option>
            <option value="it">IT Consulting</option>
          </select>
          {errors.consultingType && (
            <p className="text-red-500 text-sm">{errors.consultingType}</p>
          )}

          <select
            name="idealTimeframe"
            value={formData.idealTimeframe}
            onChange={handleChange}
            className={`w-full p-2 xs6:text-lg ${
              errors.idealTimeframe ? "border-red-500" : "border-gray-300"
            } border rounded`}
          >
            <option value="">Select Ideal Timeframe</option>
            <option value="immediately">Immediately</option>
            <option value="1-3 months">In 1-3 Months</option>
            <option value="6 months">In 6 Months</option>
          </select>
          {errors.idealTimeframe && (
            <p className="text-red-500 text-sm">{errors.idealTimeframe}</p>
          )}
          <textarea
            name="optionalMessage"
            placeholder="Optional Message (extra details)"
            value={formData.optionalMessage}
            onChange={handleChange}
            className="w-full p-2 xs6:text-lg border-gray-300 border rounded"
            rows="4"
          ></textarea>

          <Button
            variant="blue"
            size="lg"
            type="submit"
            className="flex items-center justify-center  p-2 rounded w-full"
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
