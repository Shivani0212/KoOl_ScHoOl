import React, { useState } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import Header from "../../components/Dashboard/Header";

const Sports = () => {
  // Daily Sports Practice Data
  const [dailySportsPractice, setDailySportsPractice] = useState([
    {
      id: 1,
      name: "Basketball Practice",
      description: "Daily basketball practice session.",
      time: "10:30",
    },
    {
      id: 2,
      name: "Swimming Practice",
      description: "Daily swimming practice.",
      time: "09:00",
    },
  ]);

  // Sports Event Data
  const [sportsEvents, setSportsEvents] = useState([
    {
      id: 1,
      name: "Football Match",
      description: "Join us for a friendly football match.",
      date: "2023-09-15",
      time: "14:00",
    },
    {
      id: 2,
      name: "Basketball Tournament",
      description: "Annual basketball tournament.",
      date: "2023-09-18",
      time: "10:00",
    },
    {
      id: 3,
      name: "Swimming Competition",
      description: "Swimming competition with cash prizes.",
      date: "2023-09-10",
      time: "16:00",
    },
    {
      id: 4,
      name: "Badminton Competition",
      description: "Badminton competition with cash prizes.",
      date: "2023-09-14",
      time: "16:00",
    },
  ]);

  // Calculate the current date
  const currentDate = new Date();

  // Divide sports events into upcoming, past, and current
  const upcomingEvents = sportsEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate > currentDate;
  });

  const pastEvents = sportsEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate < currentDate;
  });

  const ongoingEvents = sportsEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.toDateString() === currentDate.toDateString() &&
      eventDate >= currentDate
    );
  });

  return (
    <DashboardLayout>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Activity" title="Sports" />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 my-5 border-b-2 border-gray-300 pb-2">
            Daily Sports Practice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dailySportsPractice.map((practice) => (
              <div
                key={practice.id}
                className="border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-lg font-semibold">{practice.name}</h3>
                <p className="text-gray-600">{practice.description}</p>
                <p className="text-gray-400 mt-2">Time: {practice.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 my-5 border-b-2 border-gray-300 pb-2">
            Sports Events
          </h2>

          <div>
            <h3 className="text-lg font-semibold my-3">Ongoing Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ongoingEvents.length === 0 ? (
                <p className="text-gray-600 italic">No Ongoing event</p>
              ) : (
                ongoingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    <h4 className="text-md font-semibold">{event.name}</h4>
                    <p className="text-gray-600">{event.description}</p>
                    <p className="text-gray-400 mt-2">
                      Date: {event.date}, Time: {event.time}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold my-3">Upcoming Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingEvents.length === 0 ? (
                <p className="text-gray-600 italic">No Upcoming Events</p>
              ) : (
                upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    <h4 className="text-md font-semibold">{event.name}</h4>
                    <p className="text-gray-600">{event.description}</p>
                    <p className="text-gray-400 mt-2">
                      Date: {event.date}, Time: {event.time}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold my-3">Past Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pastEvents.length === 0 ? (
                <p className="text-gray-600 italic">No past Events</p>
              ) : (
                pastEvents.map((event) => (
                  <div
                    key={event.id}
                    className="border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    <h4 className="text-md font-semibold">{event.name}</h4>
                    <p className="text-gray-600">{event.description}</p>
                    <p className="text-gray-400 mt-2">
                      Date: {event.date}, Time: {event.time}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Sports;
