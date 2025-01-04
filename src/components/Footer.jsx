import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import insta from '../images/icon-instagram.svg';
import img1 from '../images/bg-pattern-footer-mobile.svg';
import img2 from '../images/bg-pattern-footer-desktop.svg';

const Footer = () => {
  return (
    <footer className="relative uppercase flex flex-col justify-center items-center w-screen bg-very-light-gray lg:px-80P py-64P overflow-clip">
      <img
        src={img1}
        className="z-0 block lg:hidden absolute left-0 top-0 object-contain w-svw h-44H"
        alt=""
        aria-hidden="true"
      />
      <img
        src={img2}
        className="z-0 hidden lg:block absolute left-0 top-0 object-contain w-[42dvw]"
        alt=""
        aria-hidden="true"
      />

      <section className="z-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8 w-full">
        <img src={logo} alt="insure" />
        <div className="flex justify-center items-center gap-3">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="pinterest" />
          <img src={insta} alt="instagram" />
        </div>
      </section>

      <hr className="z-10 w-[90dvw] h-[0.1rem] bg-grayish-blue my-48M" />

      <section className="z-10 w-screen flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-start gap-6">
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6">
          <h4 className="text-dark-grayish-violet">Our company</h4>

          <ul className="text-black flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2">
            <li>How we work</li>
            <li>Why Insure?</li>
            <li>View plans</li>
            <li>Reviews</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6">
          <h4 className="text-dark-grayish-violet">Help me</h4>

          <ul className="text-black flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2">
            <li>FAQ</li>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookies</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6">
          <h4 className="text-dark-grayish-violet">Contact</h4>

          <ul className="text-black flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2">
            <li>Sales</li>
            <li>Support</li>
            <li>Live chat</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6">
          <h4 className="text-dark-grayish-violet">Others</h4>

          <ul className="text-black flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2">
            <li>Careers</li>
            <li>Press</li>
            <li>Licenses</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
