export default function HomePage() {
  return (
    <main className="container mx-auto p-4 max-w-4xl">

      <section className="text-center py-10 md:py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 leading-tight">
          Welcome to the Football Club Explorer
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Your centralized hub for discovering and tracking football organizations worldwide.
          Whether you're a dedicated fan or a sports analyst, find detailed information on every club, league, and country.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8">
        
        <div className="p-6 border-t-4 border-indigo-500 rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-white">
          <h3 className="text-2xl font-bold mb-2 text-indigo-800">
            Explore Clubs
          </h3>
          <p className="text-gray-600">
            Dive into comprehensive profiles, detailed statistics, and historical data for thousands of football teams globally.
          </p>
        </div>

        <div className="p-6 border-t-4 border-indigo-500 rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-white">
          <h3 className="text-2xl font-bold mb-2 text-indigo-800">
            Browse Leagues
          </h3>
          <p className="text-gray-600">
            Filter organizations by league and country. Quickly see the setup and participating teams in any competition.
          </p>
        </div>

        <div className="p-6 border-t-4 border-indigo-500 rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-white">
          <h3 className="text-2xl font-bold mb-2 text-indigo-800">
            Manage Favorites
          </h3>
          <p className="text-gray-600">
            Save your most cherished teams to your personal list and access their information instantly from anywhere.
          </p>
        </div>
      </section>

      <section className="text-center mt-12 mb-6">
        <p className="text-lg text-gray-500">
          Ready to start your journey? Use the navigation bar above to explore!
        </p>
      </section>
    </main>
  );
}