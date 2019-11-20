import url from "url";

export function getModulePath() {
  const moduleUrl = import.meta.url; // as file:///path/to/app.mjs
  const urlObj = new url.URL(moduleUrl);
  return urlObj.pathname;
}

if (process.argv[1] === import.meta.url.substring(7)) {
  const modulePath = getModulePath();

  console.log(modulePath);
  console.log(import.meta);
  console.log(new url.URL(import.meta.url));
}
