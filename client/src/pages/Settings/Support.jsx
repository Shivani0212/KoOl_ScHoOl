import React from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import Header from "../../components/Dashboard/Header";
import Button from "../../components/Dashboard/Button";

const Support = () => {
  return (
    <DashboardLayout>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Settings" title="Support" />
        <div className="container mx-auto">
          <p className="mb-4">
            If you need assistance, please feel free to contact our support
            team.
          </p>

          <div className="bg-white p-4 rounded shadow-md mb-4">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block font-semibold">
                  Message:
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <Button
                color="white"
                bgColor="#03C9D7"
                text="Submit"
                borderRadius="10px"
              />
            </form>
          </div>

          <div className="bg-gray-200 p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Support Information</h3>
            <p>
              Email:{" "}
              <a href="mailto:support@example.com" className="text-blue-500">
                support@example.com
              </a>
            </p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Working Hours: Mon-Fri, 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Support;
