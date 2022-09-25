import { Image } from "./style";

import images from "./images";

function Gallows({ imageIndex }) {
  return <Image data-identifier="game-image" src={images[imageIndex]} />;
}

export default Gallows;
