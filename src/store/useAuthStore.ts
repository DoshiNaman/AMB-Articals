//@ts-nocheck
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import Cookies from "js-cookie";

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const cookiePersist = (config: any) => (set: any, get: any) => {
  const cookieName = "auth-storage";
  const cookieValue = Cookies.get(cookieName);

  if (cookieValue) {
    set({ isAuthenticated: JSON.parse(cookieValue) });
  }

  const persistSet = (newState: any) => {
    set(newState);
    Cookies.set(cookieName, JSON.stringify(newState.isAuthenticated), {
      expires: 7,
    });
  };

  return config(persistSet, get);
};

const useAuthStore = create<AuthState>(
  devtools(
    cookiePersist((set) => ({
      isAuthenticated: false,
      login: () => set({ isAuthenticated: true }),
      logout: () => set({ isAuthenticated: false }),
    }))
  )
);

export default useAuthStore;
