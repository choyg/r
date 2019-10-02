const nasa = require('./nasa.client');

module.exports.onMessage = async (msg) => {
  switch (msg.content) {
    case '!Help': msg.reply("Write !Rovie to get random image, from Mars.");
      break;
    case '!Rovie': msg.reply(await randomRoverImage());
      break;
  }
};

let pictures = [];
const randomRoverImage = async () => {
  if (pictures.length === 0) {
    pictures = await nasa.getCuriousityPictures();
  }
  const image = pictures[Math.floor(Math.random() * pictures.length)];
  return image.img_src;
};