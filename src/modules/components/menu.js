import image from '../../../images/image-2.jpeg';
const menu = (() => {
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

export {menu};
