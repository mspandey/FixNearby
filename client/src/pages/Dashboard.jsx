import React from "react";
import {
  FaCalendarCheck,
  FaClipboardList,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaMapMarkerAlt,
  FaBell,
} from "react-icons/fa";

const stats = [
  {
    label: "Total Bookings",
    value: "12",
    icon: <FaCalendarCheck />,
    color: "text-indigo-600 bg-indigo-50",
  },
  {
    label: "Active Jobs",
    value: "2",
    icon: <FaClipboardList />,
    color: "text-amber-600 bg-amber-50",
  },
  {
    label: "Completed",
    value: "10",
    icon: <FaCheckCircle />,
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    label: "Rating",
    value: "4.8/5",
    icon: <FaStar />,
    color: "text-pink-600 bg-pink-50",
  },
];

const recentBookings = [
  {
    title: "Home Cleaning",
    status: "In Progress",
    date: "28 May 2026",
    location: "Kharagpur",
  },
  {
    title: "AC Repair",
    status: "Completed",
    date: "25 May 2026",
    location: "Midnapore",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              User Dashboard
            </h1>
            <p className="mt-2 text-slate-500">
              Manage bookings, monitor services, and track activity.
            </p>
          </div>

          <button className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Book New Service
          </button>
        </div>

        {/* Hero */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-indigo-100">
                Welcome Back
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Your services are running smoothly 🚀
              </h2>

              <p className="mt-2 max-w-xl text-indigo-100">
                Track ongoing bookings, manage appointments, and review history.
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <FaBell className="text-yellow-300" />
                <div>
                  <p className="text-xs text-indigo-100">Upcoming</p>
                  <p className="font-semibold">Home Cleaning</p>
                </div>
              </div>

              <button className="mt-4 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-slate-100">
                View Details <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <h3 className="mt-2 text-3xl font-bold text-slate-900">
                    {item.value}
                  </h3>
                </div>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${item.color}`}
                >
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Recent Activity */}
          <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Recent Activity
                </h2>
                <p className="text-sm text-slate-500">
                  Latest bookings and updates
                </p>
              </div>

              <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {recentBookings.map((booking, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 rounded-xl border border-slate-100 p-5 transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {booking.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-2">
                        <FaClock /> {booking.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt /> {booking.location}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      booking.status === "Completed"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Quick Actions
            </h2>
            <p className="text-sm text-slate-500">
              Access important actions instantly
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Book a Service",
                "Track Booking",
                "Payment History",
                "Contact Support",
              ].map((action) => (
                <button
                  key={action}
                  className="flex w-full items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  {action}
                  <FaArrowRight />
                </button>
              ))}
            </div>

            {/* Empty state (softened) */}
            <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <FaClipboardList />
              </div>

              <h3 className="mt-3 font-semibold text-slate-900">
                No Pending Tasks
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                You’re all caught up
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;