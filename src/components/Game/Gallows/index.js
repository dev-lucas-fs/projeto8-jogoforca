import { Image } from "./style";

import images from "./images";

function Gallows({ imageIndex }) {
  return <Image src={images[imageIndex]} />;
}

export default Gallows;
