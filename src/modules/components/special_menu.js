import image from '../../../images/image-4.png';

const SpecialMenu = (() => {
  const getName = () => 'Special menu';

  const getDescription = () => {
    return `<h4>This is one of our popular and best dishes</h4>`;
  }

  const getImage = () => {
    return image.toString();
  }

  return {getName, getDescription, getImage}
})();

export {SpecialMenu};
