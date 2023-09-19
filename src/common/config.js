const configPath = `./env/development.json`;
const config = import(configPath);
export const API = { name: "clinic-smile-api", url: config.CLINIC_SMILE_API };
