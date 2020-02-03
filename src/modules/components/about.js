import image from '../../../images/image-3.png';
const About = (() => {
  const getName = () => {
    return 'About';
  }

  const getDescription = () => {
    return 'Lists of available foods';
  }

  const getImage = () => {
    return image.toString();
  }

  return {getName, getDescription, getImage}
})();

export {About};
