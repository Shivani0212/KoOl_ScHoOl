import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import Header from "../../components/Dashboard/Header";
import { studentGrid } from "../../Data/Dashboard";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
} from "@syncfusion/ej2-react-grids";
import axios from "axios";

const Student = () => {
  const toolbarOptions = ["Search"];
  const editing = { allowDeleting: true, allowEditing: true };
  const [students, setStudents] = useState([]);

  const getAllStudent = async () => {
    try {
      // Define the projection fields as an array
      const projectionFields = [
        "firstname",
        "lastname",
        "rollnumber",
        "mobilenumber",
        "city",
        "state",
        "class",
        "profile_picture",
      ];
      const res = await axios.get("/api/v1/user/getAllStudents", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        params: {
          // Convert the array to a comma-separated string
          fields: projectionFields.join(","),
        },
      });

      if (res.data.success) {
        // Modify the data and create new fields
        const modifiedData = res.data.data.map((student) => ({
          ...student,
          name: student.firstname + " " + student.lastname,
          location: student.city + ", " + student.state,
        }));

        // Set the modified data in the state
        setStudents(modifiedData);
        console.log(students);
      } else {
        console.log("Student data fetch error...");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllStudent();
  }, []);

  return (
    <DashboardLayout>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Academics" title="Students" />
        <GridComponent
          dataSource={students}
          width="auto"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 5,pageSize:10}}
          editSettings={editing}
          toolbar={toolbarOptions}
        >
          <ColumnsDirective>
            {studentGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Search, Page]} />
        </GridComponent>
      </div>
    </DashboardLayout>
  );
};

export default Student;
