import React from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import Header from "../../components/Dashboard/Header";

const Teacher = () => {
  return (
    <DashboardLayout>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Academics" title="Teachers" />
      </div>
    </DashboardLayout>
  );
};

export default Teacher;
