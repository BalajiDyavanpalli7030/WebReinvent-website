import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/user/userSlice';
import { RootState } from '../store/store';

const DashboardContent: React.FC = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state: RootState) => state.user.user?.email);

  const handleLogout = () => {
    dispatch(logout());
    // Navigate to SignIn page or handle logout
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-md p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, {userName}!</h1>
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Logout
          </button>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Dashboard Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
              <p className="text-gray-600">Your recent activity will be shown here.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Statistics</h3>
              <p className="text-gray-600">View your statistics and metrics.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
              <p className="text-gray-600">Check your notifications and updates.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardContent;
