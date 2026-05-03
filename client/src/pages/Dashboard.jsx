const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">User Dashboard</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Welcome back!</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">This is a placeholder dashboard. Contributors will add user-specific data here.</p>
        
        <div className="mt-6 border-t border-gray-200 pt-4">
          {/* TODO: Connect API here to fetch user data/bookings */}
          <div className="text-center py-10 bg-gray-50 rounded border border-dashed border-gray-300">
            <span className="text-gray-500">No active bookings yet.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
