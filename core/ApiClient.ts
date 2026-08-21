import { APIRequestContext } from "@playwright/test";

export default class ReqResClient {
  constructor(private request: APIRequestContext) {}

  private getHeaders(token?: string) {
    return {
      "Content-Type": "application/json",

      "x-api-key": process.env.REQRES_API_KEY!,

      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
    };
  }

  async get(endpoint: string, token?: string) {
    return this.request.get(endpoint, {
      headers: this.getHeaders(token),
    });
  }

  async post(endpoint: string, data: unknown, token?: string) {
    return this.request.post(endpoint, {
      data,
      headers: this.getHeaders(token),
    });
  }

  async put(endpoint: string, data: unknown, token?: string) {
    return this.request.put(endpoint, {
      data,
      headers: this.getHeaders(token),
    });
  }

  async patch(endpoint: string, data: unknown, token?: string) {
    return this.request.patch(endpoint, {
      data,
      headers: this.getHeaders(token),
    });
  }

  async delete(endpoint: string, token?: string) {
    return this.request.delete(endpoint, {
      headers: this.getHeaders(token),
    });
  }
}
