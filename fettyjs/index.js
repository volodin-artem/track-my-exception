function Fetty(apikey) {
  return {
    _errors: [],
    _serverToPost: "https://trackmyexception.onrender.com/api/post/error",
    goTrack() {
      window.addEventListener("error", (evt) => {
        const error = (evt.error.message || "") + evt.error.stack;
        if (this._errors.includes(error)) return;
        this._errors.push(error);
        fetch(`${this._serverToPost}?token=${apikey}&errorBody=${error}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
      });
    },
  };
}

module.exports = Fetty;
