import { Link } from 'react-router-dom';

const Services = () => {
  // TODO: (50% built) This is dummy data. 
  // Contributors need to replace this with an API call (e.g., fetch('/api/workers'))
  // and manage the loading/error states.
  const dummyWorkers = [
    { id: 1, name: "John Doe", profession: "Electrician", rating: 4.8, price: "$40/hr" },
    { id: 2, name: "Jane Smith", profession: "Plumber", rating: 4.9, price: "$50/hr" },
    { id: 3, name: "Mike Johnson", profession: "Carpenter", rating: 4.5, price: "$35/hr" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Workers Nearby</h1>
      
      {/* TODO: Add a search bar and category filters here */}
      <div className="mb-6">
        <input 
          type="text" 
          placeholder="Search for a service... (TODO: Implement search logic)" 
          className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyWorkers.map((worker) => (
          <div key={worker.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900">{worker.name}</h3>
            <p className="text-blue-600 font-medium">{worker.profession}</p>
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
              <span>⭐ {worker.rating}</span>
              <span>{worker.price}</span>
            </div>
            <Link 
              to={`/worker/${worker.id}`} 
              className="mt-6 w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
