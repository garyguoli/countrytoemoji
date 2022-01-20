import { data } from "./contryList";

export const countryToEmoji = (country) => {
  const countryiso = (country.iso || "").toUpperCase();
  const countryName = (country.name || "").toUpperCase();
  const checkCode =(a,b) => countryiso.length === 3?a:b;
  const res = data.find(({ code,code3, name }) => {
    if (checkCode(code3,code) === countryiso) return true;
    if (name === countryName) return true;
    return false;
  });
  return res ? res["emoji"] : "";
};
export const countryList = data

export default countryToEmoji;
