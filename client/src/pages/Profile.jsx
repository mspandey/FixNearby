const Profile = () => {
  // TODO: (50% built) Load authenticated user's data from global state or API.
  // Example: const { user } = useAuth();
  
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Settings</h1>
      
      <div className="bg-white shadow rounded-lg p-6">
        <form className="space-y-6">
          {/* TODO: Tie inputs to component state and handle form submission */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" defaultValue="John Customer" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" defaultValue="john@example.com" disabled className="mt-1 block w-full px-3 py-2 border border-gray-200 bg-gray-50 rounded-md shadow-sm text-gray-500 sm:text-sm cursor-not-allowed" />
            <p className="mt-1 text-xs text-gray-500">Email cannot be changed.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" placeholder="(555) 123-4567" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>

          <div className="pt-4 border-t border-gray-200">
            <button type="button" onClick={() => alert('TODO: Handle API update logic')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
