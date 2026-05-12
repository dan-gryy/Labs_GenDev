const axios = require("axios");

class AuthProxy {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }

  async send(url, method = "GET", data = null) {
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
    const response = await axios({
      url,
      method,
      data,
      headers,
    });

    return response.data;
  }
}

module.exports = AuthProxy;
