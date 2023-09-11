import React from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import Header from "../../components/Dashboard/Header";
import { useState } from "react";
import Button from "../../components/Dashboard/Button";

const Invite = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendInvitation = () => {
    // Handle sending the invitation here
  };

  return (
    <DashboardLayout>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Settings" title="Invite" />
        <div className="bg-gray-200 p-4 border rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block font-bold mb-1" htmlFor="email">
              Email Address:
            </label>
            <input
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1" htmlFor="message">
              Message:
            </label>
            <textarea
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              id="message"
              placeholder="Enter Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <Button
            color="white"
            bgColor="#03C9D7"
            text="Send Invitation"
            borderRadius="10px"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Invite;
