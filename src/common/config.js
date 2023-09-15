const ENV = "development";
const configPath = `./env/${ENV}.json`;
const config = await (async () =>
  await import(/* @vite-ignore */ configPath))();
export const API = { name: "clinic-smile-api", url: config.CLINIC_SMILE_API };
