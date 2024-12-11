import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const navigation = [
  { name: 'Overview', path: '/dashboard' },
  { name: 'Orders', path: '/dashboard/orders' },
  { name: 'Profile', path: '/dashboard/profile' },
  { name: 'Addresses', path: '/dashboard/addresses' },
];

export const DashboardLayout: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-2">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    {user?.firstName?.[0]}
                    {user?.lastName?.[0]}
                  </div>
                  <div>
                    <p className="font-medium">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </div>

                <nav className="space-y-1">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-3 py-2 rounded-md ${
                          isActive
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};