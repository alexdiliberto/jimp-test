import jimp from 'jimp';

const FILENAME = 'richter-belmont';
const INPUT_FILE = `./input/${FILENAME}.jpg`;
const OUTPUT_FILE = `./output/${FILENAME}.jpg`;

let invertImage = async () => {
  let image;
  try {
    image = await jimp.read(INPUT_FILE);
  } catch (e) {
    throw e;
  }

  image.invert();
  image.write(OUTPUT_FILE);
}

invertImage();
