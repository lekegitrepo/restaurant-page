import image from '../../../images/image-7.png';

const Contact = (() => {
  const getName = () => 'Contact';

  const getDescription = () => {
    return `<div class="form_main">
                <h4 class="heading"><strong>Quick </strong> Contact <span></span></h4>
                <div class="form">
                <form action="contact_send_mail.php" method="post" id="contactFrm" name="contactFrm">
                    <input type="text" required="" placeholder="Please input your Name" value="" name="name" class="txt">
                    <input type="text" required="" placeholder="Please input your mobile No" value="" name="mob" class="txt">
                    <input type="text" required="" placeholder="Please input your Email" value="" name="email" class="txt">
                    
                   <textarea placeholder="Your Message" name="mess" type="text" class="txt_3"></textarea>
                     <input type="submit" value="submit" name="submit" class="txt2">
                </form>
            </div>
            </div>`;
  };

  const getImage = () => {
    return image.toString();
  };

  return { getName, getDescription, getImage };
})();

export { Contact };
