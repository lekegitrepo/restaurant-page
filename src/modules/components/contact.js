import image from '../../../images/image-4.png';
const Contact = (() => {
  const getName = () => {
    return 'Menu';
  }

  const getDescription = () => {
    return 'Lists of available foods';
  }

  const getImage = () => {
    return image.toString();
  }

  return {getName, getDescription, getImage}
})();

export {Contact};
