import React, { useEffect, useState } from "react";
import cookie from "cookie";

const useCookies = () => {
  const [cookies, setCookies] = useState(cookie.parse(document.cookie));

  const getCookies = () => cookie.parse(document.cookie);

  const newCookie = (name, value) => {
    document.cookie = cookie.serialize(name, value, {
      maxAge: 60 * 60 * 24 * 7,
    });

    console.log("setting new cookie");
    setCookies({ ...cookie.parse(document.cookie) });
  };

  const deleteCookies = () => {
    console.log(cookies, "*************cookie");
    Object.keys(cookies).forEach((key) => {
      console.log(key, "*************KEYYYYYYYYYYY ************");
      document.cookie = cookie.serialize(key, "", {
        maxAge: 0,
      });
    });

    setCookies(cookie.parse(document.cookie));
  };

  useEffect(() => {
    setCookies(cookie.parse(document.cookie));
  }, []);

  useEffect(() => {
    console.log(cookies, "from useCookie hook");
  }, [cookies]);

  return { cookies, getCookies, setCookies, newCookie, deleteCookies };
};

export default useCookies;
