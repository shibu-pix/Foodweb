import React from 'react';

const FindRecipes = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Find More Delicious Recipes</h2>
        <p className="mb-6 text-lg">
          Search through our wide collection of recipes to satisfy your cravings anytime.
        </p>

        {/* Search Form */}
        <div className="bg-white rounded-full flex flex-col sm:flex-row items-center justify-center gap-4 px-4 py-3 sm:py-4 w-full sm:w-fit mx-auto sm:rounded-full">
  <input
    type="text"
    placeholder="Search for a recipe..."
    className="w-full sm:w-80 px-4 py-2 rounded-full text-black focus:outline-none"
  />
  <button className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-2 sm:py-3 rounded-full">
    Search
  </button>
</div>
      </div>
    </section>
  );
};

export default FindRecipes;
