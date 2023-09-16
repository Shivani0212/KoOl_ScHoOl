import React, { useState } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import Header from "../../components/Dashboard/Header";

const NOtice = () => {
  const [notices, setNotices] = useState([
    {
      title: "Dummy Notice 1",
      content: "This is a dummy notice content.",
      date: "2023-09-14",
    },
    {
      title: "Dummy Notice 2",
      content: "This is another dummy notice content.",
      date: "2023-09-15",
    },
    {
      title: "Dummy Notice 3",
      content: "Yet another dummy notice content.",
      date: "2023-09-16",
    },
    {
      title: "Dummy Notice 4",
      content: "Yet another dummy notice content.",
      date: "2023-09-12",
    },
    {
      title: "Dummy Notice 5",
      content: "Yet another dummy notice content.",
      date: "2023-09-02",
    },
    {
      title: "Dummy Notice 6",
      content: "Yet another dummy notice content.",
      date: "2023-09-14",
    },
  ]);


  const sortedNotices = [...notices].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <DashboardLayout>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Academics" title="Notice" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedNotices.map((notice, index) => (
            <div
              key={index}
              className="border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold">{notice.title}</h3>
              <p className="text-gray-600">{notice.content}</p>
              <p className="text-gray-400 mt-2">Posted on: {notice.date}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NOtice;
