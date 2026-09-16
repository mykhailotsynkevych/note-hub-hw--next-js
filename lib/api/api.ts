import axios from "axios";

export const nextServer = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
  withCredentials: true, // дозволяє axios працювати з cookie
});