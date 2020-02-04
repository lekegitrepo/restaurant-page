import image from '../../../images/image-8.png';
const About = (() => {
  const getName = () => {
    return 'About';
  }

  const getDescription = () => {
    return `<h4>Noodle's Palace</h4>
    <p>We have been feeding the appetite of the world for over a century now</p>`;
  }

  const getImage = () => {
    return image.toString();
  }

  return {getName, getDescription, getImage}
})();

export {About};
