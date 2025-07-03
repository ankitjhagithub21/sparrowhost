'use client'
import axios from "axios";
// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = async () => {
    try {
      await fetch('/api/logout'); // Call the API to clear the cookie
      setUser(null);
      // Redirect to login, using window.location.replace to avoid history
      if (window.location.pathname !== '/login') {
        window.location.replace('/login');
      }
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const {data} = await axios.get('/api/get-user-data',{
          withCredentials:true
        });
        
        if(data.success){
            setUser(data.user);
        }else{
          setUser(null)
        }
        
      } catch (error) {
        setUser(null); // Make sure to set user to null if API call fails
        // Optionally, handle more logic, such as redirecting to login page
        if (window.location.pathname !== '/login') {
          window.location.replace('/login');
        }
      }
    };
    getUser();
  }, []);

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
