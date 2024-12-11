import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginCredentials, RegisterData, AuthState } from '../types/Auth';

interface AuthContextType {
  authState: AuthState;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: false,
    error: null,
  });

  const login = async (credentials: LoginCredentials) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      // Simulate API call
      console.log('Login attempt with:', credentials);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
      navigate('/profile');
    } catch (error) {
      setAuthState({
        isAuthenticated: false,
        isLoading: false,
        error: 'Invalid credentials',
      });
    }
  };

  const register = async (data: RegisterData) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      // Simulate API call
      console.log('Registration attempt with:', data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful registration
      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
      navigate('/profile');
    } catch (error) {
      setAuthState({
        isAuthenticated: false,
        isLoading: false,
        error: 'Registration failed',
      });
    }
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
    navigate('/login');
  };

  const resetPassword = async (email: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      // Simulate API call
      console.log('Password reset attempt for:', email);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAuthState(prev => ({ ...prev, isLoading: false }));
      navigate('/login');
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Password reset failed',
      }));
    }
  };

  return (
    <AuthContext.Provider value={{ authState, login, register, logout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};