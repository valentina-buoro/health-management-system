import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,
        user: null,
        access_token: "",

        login: (data) =>
          set((state) => ({
            isLoggedIn: true,
            user: data,
          })),

        token: (token) => {
          set((state) => ({
            access_token: token,
          }));
        },

        logout: () => {
          // Clear user state
          set(() => ({
            isLoggedIn: false,
            user: null,
            access_token: "",
          }));

        },
      }),
      { name: "profiler" }
    )
  )
);

export default useAuthStore;
