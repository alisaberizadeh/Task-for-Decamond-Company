"use client"
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IUser } from "@/lib/types";
import axios from "axios";
import Cookies from "js-cookie";

interface IAuth {
  user: IUser | null;
  login: (mobile: string) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as IAuth);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<IUser | null>(null);

  // Load user data from cookie
  useEffect(() => {
    const savedUser = Cookies.get("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        setUser(null);
      }
    }
  }, []);

  // login method
  const login = async (mobile: string) => {
    console.log("your Mobile Number is : ", mobile);
    try {
      const response = await axios.get("https://randomuser.me/api/?results=1&nat=us");
      if (response.status === 200) {
        const userData: IUser = {
          name: response.data.results[0].name.first + response.data.results[0].name.last,
          gender: response.data.results[0].gender,
          email: response.data.results[0].email,
          location: response.data.results[0].location.city + " , " + response.data.results[0].location.country,
          image: response.data.results[0].picture.large,
          mobile: mobile,
        };
        setUser(userData);
        Cookies.set("user", JSON.stringify(userData), { expires: 7, path: "/" }); 
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error is : ", error);
    }
  };

  // logout method
  const logout = () => {
    setUser(null);
    Cookies.remove("user");
    router.push("/auth");
  };

  return <AuthContext.Provider value={{ user, logout, login }}>{children}</AuthContext.Provider>;
};
