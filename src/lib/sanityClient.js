// src/lib/sanityClient.js
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "uwl1dhz5", // Find this in your sanity.json or at manage.sanity.io
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2024-09-15", // use a UTC date in YYYY-MM-DD format
});
