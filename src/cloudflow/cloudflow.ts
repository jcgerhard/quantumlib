const helloCloudflow = 'Hello from Cloudflow!';

/**
 * A function to get and/or create a valid Cloudflow base URL
 * @param {string} [url] - The (optional) base URL of the Cloudflow server like "http://127.0.0.1"
 * @param {number} [port] - The (optional) port that is used to access the Cloudflow server like "9090"
 * @returns {string} The base URL as a string
 */
export function baseURL(url = 'http://127.0.0.1', port = 9090): string {
    const baseURL: URL = new URL(`${url}:${port}`);
    return baseURL.toString();
}

export const cloudflow = { helloCloudflow, baseURL };
