import API from "./api"
import {RegisterPayload,LoginPayload,AuthResponse} from "../types/auth"

export const registerUser=async(payload:RegisterPayload):Promise<AuthResponse>=>{
    const response=await API.post<AuthResponse>(
        "/auth/register",
        payload
    )
    return response.data
}


export const loginUser = async (
  payload: LoginPayload
): Promise<AuthResponse> => {
  const response = await API.post<AuthResponse>(
    "/api/auth/login",
    payload
  );
  return response.data;
};