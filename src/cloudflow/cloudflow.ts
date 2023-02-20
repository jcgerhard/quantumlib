/**
 * The type definition for a Cloudflow baseURL
 */
interface IBaseUrl {
    url?: string;
    port?: number;
}

/**
 * A function to get and/or create a valid Cloudflow base URL
 * @param {IBaseUrl} [baseUrl] An optional object to change host and/or port of the base URL
 * - Example 1: { url: 'https://my.cloudflow.com' }
 * - Example 2: { port: 9988 }
 * - Example 3: { url: 'https://my.cloudflow.com', port: 9988 }
 * @return {string} The base URL as a string
 */
export function baseURL(baseUrl: IBaseUrl = { url: 'http://127.0.0.1', port: 9090 }): string {
    const baseURL: URL = new URL(`${baseUrl.url}:${baseUrl.port}`);
    return baseURL.toString();
}

export const cloudflow = { baseURL };
