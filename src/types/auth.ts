export type Role = "Freelancer" | "Client";

export interface RegisterPayload {
  name: string;
  username: string;
  email: string;
  password: string;
  country: string;
  role: Role;
  avatar:File|null;
}

export interface LoginPayload {
  email: string;
  password: string;
  role: Role;
}

export interface AuthResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    id: string;
    name: string;
    username: string;
    email: string;
    country: string;
    role: Role;
    token: string;
  };
}