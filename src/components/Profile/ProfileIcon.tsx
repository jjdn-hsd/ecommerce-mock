import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { useProfile } from '../../context/ProfileContext';

export const ProfileIcon: React.FC = () => {
  const { profile } = useProfile();

  return (
    <Link to="/profile" className="relative">
      {profile?.avatar ? (
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-8 h-8 rounded-full"
        />
      ) : (
        <UserCircleIcon className="w-8 h-8 text-gray-600" />
      )}
    </Link>
  );
};