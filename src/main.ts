import { data } from "./contryList";
export const countryToEmoji = ({ iso = null, name = null }) => {
  const res = data.find(({ ISO, Name }) => ISO === iso || Name === name);

  return res?.["Emoji"] || "";
};
