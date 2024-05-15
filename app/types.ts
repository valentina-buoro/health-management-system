export interface LoginProps {
  email: string;
  password: string;
}

export interface SignupProps {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface MedicineProps {
  productName: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  sideEffect: string;
}
