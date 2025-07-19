import { encode } from "./encoding";
import type { LoginForm } from "../types/login";
import type { User } from "../types/user";

const GET_SECTERS_URL = `https://gongfetest.firebaseio.com/secrets/{SECRET}.json`;
const GET_USERS_URL = `https://gongfetest.firebaseio.com/users/.json`;

export const getUserId = async ({
  email,
  password,
}: LoginForm): Promise<number> => {
  const secret = encode(email, password);
  const response = await fetch(GET_SECTERS_URL.replace("{SECRET}", secret));

  if (!response.ok) {
    throw new Error(`Response error`);
  }

  const responseId = await response.json();
  if (!responseId) {
    throw new Error(`No matching id`);
  }

  return responseId;
};

export const getAllUsers = async (): Promise<User[]> => {
  const response = await fetch(GET_USERS_URL);

  if (!response.ok) {
    throw new Error(`Response error`);
  }

  const responseUsers = await response.json();
  if (!responseUsers) {
    throw new Error(`No data found`);
  }

  return responseUsers;
};
