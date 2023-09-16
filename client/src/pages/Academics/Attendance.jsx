import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import Header from "../../components/Dashboard/Header";
import Button from "../../components/Dashboard/Button";
import axios from "axios";

const Attendance = () => {
  const currentColor = "#03C9D7";
  const [classList, setClassList] = useState([7, 8]);
  const [selectedClass, setSelectedClass] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchClassList();
  }, []);

  const fetchClassList = async () => {
    try {
      // Make an API call to get the list of classes
      const response = await axios.get("/api/v1/user/getAllClass", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (response.data.success) {
        // Set the list of classes in the state
        setClassList(response.data.data);
      } else {
        console.log("Failed to fetch class list.");
      }
    } catch (error) {
      console.error("Error fetching class list:", error);
    }
  };

  const fetchStudentByClass = async (className) => {
    try {
      // Make an API call to get the students for the selected class
      const response = await axios.get("/api/v1/user/getStudentByClass", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        params: {
          class: className,
        },
      });

      if (response.data.success) {
        // Set the list of students in the state
        setStudents(response.data.data);
      } else {
        console.log(`Failed to fetch students for class: ${className}`);
      }
    } catch (error) {
      console.error("Error fetching students for class:", error);
    }
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  useEffect(() => {
    fetchStudentByClass(selectedClass);
  }, [selectedClass]);

  const handleAttendanceSubmit = () => {
    // Implement the logic to submit the attendance data to the server here
    // You can create an object with attendance data and send it to the server
  };

  const handleAttendanceChange = (studentId, newAttendance) => {
    // Find the student in the state based on the studentId
    const updatedStudents = students.map((student) => {
      if (student._id === studentId) {
        return { ...student, attendance: newAttendance };
      }
      return student;
    });

    // Update the state with the new attendance data
    setStudents(updatedStudents);
  };

  return (
    <DashboardLayout>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Academics" title="Attendance" />
        {/* attendance  */}
        <div className="mb-4">
          <label className="block font-semibold text-lg mb-2">
            Select Class:
          </label>
          <select
            className="w-full p-2 border rounded"
            value={selectedClass}
            onChange={handleClassChange}
          >
            <option value="">Select a class</option>
            {classList.map((classItem, index) => (
              <option key={index} value={classItem}>
                {classItem}
              </option>
            ))}
          </select>
        </div>
        {selectedClass && (
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Students in Class {selectedClass}:
            </h2>
            <table className="w-full border-collapse border">
              <thead>
                <tr>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Roll Number</th>
                  <th className="p-2 border">Attendance</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id} className="text-center">
                    <td className="p-2 border">{student.firstName + " " + student.lastName}</td>
                    <td className="p-2 border">{student.rollNumber}</td>
                    <td className="p-2 border">
                      <div className="flex justify-center space-x-10">
                        <button
                          className={`p-2 rounded-md ${
                            student.attendance === "Present"
                              ? "bg-green-500 text-white shadow-md"
                              : "bg-gray-300 text-gray-600"
                          } hover:bg-green-600 hover:text-white transition duration-300`}
                          onClick={() =>
                            handleAttendanceChange(student._id, "Present")
                          }
                        >
                          Present
                        </button>
                        <button
                          className={`p-2 rounded-md ${
                            student.attendance === "Absent"
                              ? "bg-red-500 text-white shadow-md"
                              : "bg-gray-300 text-gray-600"
                          } hover:bg-red-600 hover:text-white transition duration-300`}
                          onClick={() =>
                            handleAttendanceChange(student._id, "Absent")
                          }
                        >
                          Absent
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button
              color="white"
              bgColor={currentColor}
              text="Submit Attendance"
              borderRadius="10px"
              custumFunc={() => handleAttendanceSubmit}
              className="mt-4"
            />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Attendance;
