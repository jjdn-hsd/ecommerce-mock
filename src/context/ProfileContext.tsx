import React, { createContext, useContext, useState } from 'react';
import { Profile } from '../types/Profile';

interface ProfileContextType {
  profile: Profile | null;
  updateProfile: (profile: Profile) => void;
  logout: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<Profile | null>(null);

  const updateProfile = (newProfile: Profile) => {
    setProfile(newProfile);
  };

  const logout = () => {
    setProfile(null);
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile, logout }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};