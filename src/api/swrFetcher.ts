'use server'
import axios from "axios";

const API_KEY = process.env.XRAPID_API_KEY;

export const fetcher = (url: string) =>
  axios
    .get(url, {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    })
    .then((res) => res.data);
