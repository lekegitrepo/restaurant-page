import image from '../../../images/image-6.png';
const HomePage = (() => {
  const getName = () => {
    return "Noodle's Palace";
  }

  const getDescription = () => {
    return 'Lists of available foods';
  }

  const getImage = () => {
    return image.toString();
  }

  return {getName, getDescription, getImage}
})();

export {HomePage};