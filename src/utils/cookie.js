import cookie from "cookie";

export const newCookie = (name, value, options) => {
  document.cookie = cookie.serialize(
    name,
    value,
    options
      ? options
      : {
          maxAge: 60 * 60 * 24 * 7,
        }
  );
};

export const getCookies = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies;
};

export const eatAllCookies = () => {
  Object.keys(getCookies()).forEach((key) => {
    console.log(key, "*************KEYYYYYYYYYYY ************");
    document.cookie = cookie.serialize(key, "", {
      maxAge: 0,
    });
  });
};
