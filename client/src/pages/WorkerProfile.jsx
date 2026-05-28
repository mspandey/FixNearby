import { useParams, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import {
  Star,
  MapPin,
  Clock,
  ShieldCheck,
  Briefcase,
  Phone,
  MessageCircle,
} from "lucide-react";

import BookingConfirmationModal from "../components/BookingConfirmationModal";

const WORKERS = {
  1: {
    id: 1,
    name: "John Doe",
    profession: "Electrician",
    price: "$45/hr",
    rating: 4.8,
    experience: "10+ Years",
    location: "New York, USA",
    completedJobs: 240,
    bio: "Experienced electrician with 10+ years of expertise in residential and commercial projects.",
  },
  2: {
    id: 2,
    name: "Jane Smith",
    profession: "Plumber",
    price: "$50/hr",
    rating: 4.9,
    experience: "15 Years",
    location: "California, USA",
    completedJobs: 310,
    bio: "Licensed plumber with extensive expertise in leak fixing and pipeline installation.",
  },
  3: {
    id: 3,
    name: "Mike Johnson",
    profession: "Carpenter",
    price: "$35/hr",
    rating: 4.5,
    experience: "7 Years",
    location: "Texas, USA",
    completedJobs: 180,
    bio: "Expert carpenter specializing in custom furniture and interior woodwork.",
  },
};

const REVIEWS = [
  { name: "User A", rating: 5, text: "Great service, arrived on time and fixed everything perfectly." },
  { name: "User B", rating: 4.5, text: "Professional, polite, and highly knowledgeable." },
  { name: "User C", rating: 4.8, text: "Affordable pricing and excellent work quality." },
];

const getBookings = () => JSON.parse(localStorage.getItem("bookings")) || [];
const saveBookings = (b) => localStorage.setItem("bookings", JSON.stringify(b));

const WorkerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});

  const worker = useMemo(() => WORKERS[Number(id)] || null, [id]);

  const handleBooking = () => {
    if (!worker) return;

    const newBooking = {
      id: "BK-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
      worker: worker.name,
      service: worker.profession,
      date: new Date().toLocaleDateString(),
      time: "10:00 AM",
      price: worker.price,
      status: "Pending",
    };

    saveBookings([newBooking, ...getBookings()]);

    setBookingDetails({
      service: worker.profession,
      worker: worker.name,
      date: new Date().toLocaleDateString(),
      time: "10:00 AM",
      price: worker.price,
    });

    setShowModal(true);
  };

  if (!worker) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h2 className="text-3xl font-semibold text-gray-800">Worker not found</h2>
        <p className="text-gray-500 mt-2">Profile doesn’t exist.</p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 px-4 py-10">

      <BookingConfirmationModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          navigate("/bookings");
        }}
        bookingDetails={bookingDetails}
      />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">

        {/* LEFT SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 rounded-2xl bg-white/70 backdrop-blur-xl shadow-sm p-6">

            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-700">
                {worker.name.charAt(0)}
              </div>

              <h1 className="text-xl font-semibold mt-4">{worker.name}</h1>
              <p className="text-blue-600 text-sm">{worker.profession}</p>

              <div className="mt-3 inline-flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full text-sm">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                {worker.rating}
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-gray-600">
              <p className="flex gap-2"><Briefcase size={16}/> {worker.completedJobs}+ Jobs</p>
              <p className="flex gap-2"><Clock size={16}/> {worker.experience}</p>
              <p className="flex gap-2"><MapPin size={16}/> {worker.location}</p>
              <p className="flex gap-2"><ShieldCheck size={16}/> Verified</p>
            </div>

            <div className="mt-6 bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500">Starting from</p>
              <p className="text-xl font-semibold text-blue-700">{worker.price}</p>
            </div>

            <button
              onClick={handleBooking}
              className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
            >
              Book Service
            </button>

            <div className="flex gap-3 mt-3">
              <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 py-2 rounded-xl transition">
                <Phone size={16}/> Call
              </button>

              <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 py-2 rounded-xl transition">
                <MessageCircle size={16}/> Chat
              </button>
            </div>

          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="lg:col-span-2 space-y-14">

          {/* ABOUT */}
          <section className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-2">About</h2>
            <p className="text-gray-600 leading-relaxed">{worker.bio}</p>
          </section>

          {/* SERVICES */}
          <section className="rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-5">Services</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {["Installation", "Maintenance", "Repair", "Emergency"].map((s) => (
                <div key={s} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                  <p className="font-medium">{s}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {worker.profession} service
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* REVIEWS */}
          <section className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-5">Reviews</h2>

            <div className="space-y-4">
              {REVIEWS.map((r, i) => (
                <div key={i} className="p-4 rounded-xl bg-gray-50">
                  <div className="flex justify-between">
                    <p className="font-medium">{r.name}</p>
                    <span className="text-yellow-500 text-sm">★ {r.rating}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">{r.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6">
            <h2 className="text-lg font-semibold">Need urgent service?</h2>
            <p className="text-sm text-blue-100 mt-1">
              Available for same-day bookings.
            </p>

            <button
              onClick={handleBooking}
              className="mt-4 bg-white text-blue-600 px-5 py-2 rounded-xl font-medium hover:bg-gray-100 transition"
            >
              Book Now
            </button>
          </section>

        </main>
      </div>
    </div>
  );
};

export default WorkerProfile;