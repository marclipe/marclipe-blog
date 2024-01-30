import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "u1u448t8",
  useCdn: false,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source);
}