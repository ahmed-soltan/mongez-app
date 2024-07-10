import endpoint from "shared/endpoint";

// for dummy purpose only
export function getAbout() {
  return endpoint.get("/home");
}
