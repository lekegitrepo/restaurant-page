import image from '../../../images/image-1.png';
const SpecialMenu = (() => {
  const getName = () => {
    return 'Special menu';
  }

  const getDescription = () => {
    return 'Lists of available foods';
  }

  const getImage = () => {
    return image.toString();
  }

  return {getName, getDescription, getImage}
})();

export {SpecialMenu};
