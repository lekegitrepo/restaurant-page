import image from '../../../images/image-9.png';

const Menu = (() => {
  const getName = () => 'Menu';

  const getDescription = () => '<h4>Lists of available foods</h4>';

  const getImage = () => image.toString();

  return { getName, getDescription, getImage };
})();

export { Menu };
