const songDecoder = song => {
  return (words = song.split("WUB"))
    .filter(x => x !== "")
    .join(",")
    .replace(/,/g, " ");
};

module.exports = songDecoder;
