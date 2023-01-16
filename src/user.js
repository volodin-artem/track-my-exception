import configuration from "./configuration.js";

export default {
  async getUserByCookie() {
    const token = window.localStorage.getItem("token");
    if (!token || token === "undefined") return null;
    return await fetch(`${configuration.api.url}/user?token=${token}`).then((response) => response.json());
  },
  async isExists() {
    const user = await this.getUserByCookie();
    return !!user;
  },
};
