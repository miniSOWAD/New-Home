import Cookies from "js-cookie";

export function setCookie(name: string, value: string, days = 7) {
  Cookies.set(name, value, {
    expires: days,
    sameSite: "lax"
  });
}

export function getCookie(name: string) {
  return Cookies.get(name);
}

export function removeCookie(name: string) {
  Cookies.remove(name);
}