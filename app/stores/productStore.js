import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,
        product: null,
        accessToken: "",

        product: (productData) =>
          set((state) => ({
            isLoggedIn: true,
            product: [productData],
          })),
      }),
      { name: "product" }
    )
  )
);

export default useAuthStore;
