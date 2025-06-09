import React from "react";

const BookingSection = () => {
  return (
    <section className="bg-black py-20 px-3">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Title */}
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-0 tracking-widest">
          Want to book a table?
        </h1>

        {/* Button */}
        <button className="bg-green-700 text-black px-10 py-2 font-bold rounded hover:bg-gray-200 transition">
          Book
        </button>
      </div>
    </section>
  );
};

export default BookingSection;

