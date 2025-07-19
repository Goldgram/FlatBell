import { encode } from "./encoding";
import type { LoginForm } from "../types/login";

const GET_SECTERS_URL = `https://gongfetest.firebaseio.com/secrets/{SECRET}.json`;
// const GET_USERS_URL = `https://gongfetest.firebaseio.com/users/.json`;

export const getUserId = async ({
  email,
  password,
}: LoginForm): Promise<string> => {
  const secret = encode(email, password);
  try {
    const response = await fetch(GET_SECTERS_URL.replace("{SECRET}", secret));

    if (!response.ok) {
      // Note: log specifie issue to sentry etc
      throw new Error(`Response error`);
    }

    const responseId = await response.json();
    if (!responseId) {
      // Note: log specifie issue to sentry etc
      throw new Error(`No matching id`);
    }

    return responseId;
  } catch (error) {
    // Note: log specifie issue to sentry etc
    console.log("log specifie issue to sentry etc", error);
    throw error;
  }
};
