import React from 'react';
import { useProfile } from '../context/ProfileContext';

export const Profile: React.FC = () => {
  const { profile, updateProfile, logout } = useProfile();

  if (!profile) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-gray-600">Please log in to view your profile</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <div className="mt-1 text-gray-900">{profile.name}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <div className="mt-1 text-gray-900">{profile.email}</div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Preferences</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={profile.preferences.notifications}
                  onChange={(e) => updateProfile({
                    ...profile,
                    preferences: {
                      ...profile.preferences,
                      notifications: e.target.checked
                    }
                  })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-900">
                  Receive notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={profile.preferences.newsletter}
                  onChange={(e) => updateProfile({
                    ...profile,
                    preferences: {
                      ...profile.preferences,
                      newsletter: e.target.checked
                    }
                  })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-900">
                  Subscribe to newsletter
                </label>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};