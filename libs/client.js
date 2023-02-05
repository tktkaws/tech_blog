// import { createClient } from "microcms-js-sdk";

// export const client =  createClient() {
//     serviceDomain: "dtdm",
//     apikey:process.env.API_KEY,

// }

import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "dtdm",
  apiKey: process.env.API_KEY,
});
