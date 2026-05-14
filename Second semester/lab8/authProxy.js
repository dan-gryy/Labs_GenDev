const axios = require("axios");

class AuthProxy {
  constructor(type, value) {
    this.type = type;
    this.value = value;
    this.requests = 0;
    this.limit = 5;
  }

  changeAuth(type, value) {
    this.type = type;
    this.value = value;
  }

  async send(url, method = "GET", data = null) {
    if (this.requests >= this.limit) {
      throw new Error("Too many requests");
    }

    this.requests++;

    const headers = {};

    if (this.type === "apiKey") {
      headers["x-api-key"] = this.value;
    }

    if (this.type === "jwt") {
      headers["Authorization"] = `Bearer ${this.value}`;
    }

    if (this.type === "oauth") {
      headers["Authorization"] = `OAuth ${this.value}`;
    }

    console.log(`${method} request to ${url}`);

    try {
      const response = await axios({
        url,
        method,
        data,
        headers,
      });

      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        this.value = "new-token-456";
        headers["Authorization"] = `Bearer ${this.value}`;

        const retryResponse = await axios({
          url,
          method,
          data,
          headers,
        });

        return retryResponse.data;
      }

      throw error;
    }
  }
}

module.exports = AuthProxy;
