import logo from '../images/logo.svg';
import { FacebookIcon } from '../utils/Icons';
import { TwitterIcon } from '../utils/Icons';
import { PinterestIcon } from '../utils/Icons';
import { InstaIcon } from '../utils/Icons';
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
          <FacebookIcon />
          <TwitterIcon />
          <PinterestIcon />
          <InstaIcon />
        </div>
      </section>

      <hr className="z-10 w-[90dvw] h-[0.1rem] bg-grayish-blue my-48M" />

      <section className="z-10 w-screen flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-start gap-6">
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6">
          <h3 className="text-dark-grayish-violet">Our company</h3>

          <ul className="text-black flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2">
            <li className="group relative cursor-pointer">
              How we work
              <span className="absolute left-0 bottom-0 w-0 h-2H bg-black group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="group relative cursor-pointer">
              Why Insure?
              <span className="absolute left-0 bottom-0 w-0 h-2H bg-black group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="group relative cursor-pointer">
              View plans
              <span className="absolute left-0 bottom-0 w-0 h-2H bg-black group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="group relative cursor-pointer">
              Reviews
              <span className="absolute left-0 bottom-0 w-0 h-2H bg-black group-hover:w-full transition-all duration-300"></span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6">
          <h3 className="text-dark-grayish-violet">Help me</h3>

          <ul className="text-black flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2">
            <li className="group relative cursor-pointer">
              FAQ
              <span className="absolute left-0 bottom-0 w-0 h-2H bg-black group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="group relative cursor-pointer">
              Terms of use
              <span className="absolute left-0 bottom-0 w-0 h-2H bg-black group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="group relative cursor-pointer">
              Privacy policy
              <span className="absolute left-0 bottom-0 w-0 h-2H bg-black group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="group relative cursor-pointer">
              Cookies
              <span className="absolute left-0 bottom-0 w-0 h-2H bg-black group-hover:w-full transition-all duration-300"></span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6">
          <h3 className="text-dark-grayish-violet">Contact</h3>

          <ul className="text-black flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2">
            <li className="group relative cursor-pointer">
              Sales
              <span className="absolute left-0 bottom-0 w-0 h-2H bg-black group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="group relative cursor-pointer">
              Support
              <span className="absolute left-0 bottom-0 w-0 h-2H bg-black group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="group relative cursor-pointer">
              Live chat
              <span className="absolute left-0 bottom-0 w-0 h-2H bg-black group-hover:w-full transition-all duration-300"></span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6">
          <h3 className="text-dark-grayish-violet">Others</h3>

          <ul className="text-black flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2">
            <li className="group relative cursor-pointer">
              Careers
              <span className="absolute left-0 bottom-0 w-0 h-2H bg-black group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="group relative cursor-pointer">
              Press
              <span className="absolute left-0 bottom-0 w-0 h-2H bg-black group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="group relative cursor-pointer">
              Licenses
              <span className="absolute left-0 bottom-0 w-0 h-2H bg-black group-hover:w-full transition-all duration-300"></span>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
