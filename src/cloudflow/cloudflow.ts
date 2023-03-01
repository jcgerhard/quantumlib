const localURL = 'http://127.0.0.1';
const defaultPort = 9090;

const getManualURL = (cloudflowBaseUrl: string) => new URL(`${cloudflowBaseUrl}/manual/manual.html`).toString();

export const cloudflow = { localURL, defaultPort, getManualURL };
