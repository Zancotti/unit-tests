export const hashtags = (text) => {
  return text.split(" ").filter((v) => v.startsWith("#"));
};
