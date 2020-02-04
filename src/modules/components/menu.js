import image from '../../../images/image-9.png';

const Menu = (() => {
  const getName = () => { return 'Menu'; }

  const getDescription = () => {
    return `<h4>Lists of available foods</h4>`;
  }

  const getImage = () => {
    return image.toString();
  }

  return {getName, getDescription, getImage}
})();

export {Menu};
