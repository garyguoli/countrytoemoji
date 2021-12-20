import { data } from "./contryList";

export const countryToEmoji = (country) => {
  const iso = (country.iso || "").toLowerCase();
  const name = (country.name || "").toLowerCase();
  const res = data.find(({ ISO, Name }) => {
    if (ISO.toLocaleLowerCase() === iso) return true;
    if (Name.toLowerCase() === name) return true;
    return false;
  });
  return res ? res["Emoji"] : "";
};
export default countryToEmoji;
