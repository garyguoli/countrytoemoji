import { data } from "./contryList";

export const countryToEmoji = (country) => {
  const countryiso = (country.iso || "").toUpperCase();
  const countryName = (country.name || "").toUpperCase();
  const res = data.find(({ code, code3, name }) => {
    if (code === countryiso) return true;
    if (code3 === countryiso) return true;
    if (name.toUpperCase() === countryName) return true;

    return false;
  });
  return res ? res["emoji"] : "";
};
export const countryList = data;

export default countryToEmoji;
