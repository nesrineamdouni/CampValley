import React from "react";
import { useState } from "react";
import { Button } from "flowbite-react";

const Contact = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="mt-4 flex justify-center">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name *"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-600">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number *"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address *"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message *"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-[#f1b602] text-black hover:text-white"
            >
              Send message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
