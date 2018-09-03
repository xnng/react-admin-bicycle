import jsonp from "jsonp";

export const getWeather = options => {
  return new Promise((resolve, reject) => {
    jsonp(options.url, { param: "callback" }, (err, res) => {
      if (res.status === "success") {
        resolve(res);
      } else {
        reject(err);
      }
    });
  });
};
