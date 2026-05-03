import { Link } from 'react-router-dom';

const Bookings = () => {
  // TODO: (50% built) Fetch actual booking history for the logged-in user.
  const dummyBookings = [
    { id: 'BK-101', worker: 'Jane Smith', service: 'Plumbing', date: '2023-10-25', status: 'Completed' },
    { id: 'BK-102', worker: 'John Doe', service: 'Electrical', date: '2023-11-05', status: 'Pending' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {dummyBookings.map((booking) => (
            <li key={booking.id}>
              <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-blue-600 truncate">
                    {booking.service} with {booking.worker}
                  </p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      booking.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      Booking ID: {booking.id}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>
                      Date: {booking.date}
                    </p>
                  </div>
                </div>
                {/* TODO: Add action buttons (e.g., Cancel Booking, Leave Review) based on status */}
                {booking.status === 'Pending' && (
                   <button className="mt-3 text-sm text-red-600 hover:text-red-800 font-medium" onClick={() => alert('TODO: Implement cancellation API')}>Cancel Booking</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Empty State Example */}
      {/* <div className="text-center py-12 bg-white rounded-lg shadow">
        <h3 className="mt-2 text-sm font-medium text-gray-900">No bookings</h3>
        <p className="mt-1 text-sm text-gray-500">Get started by finding a service near you.</p>
        <div className="mt-6">
          <Link to="/services" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Find Services
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Bookings;
