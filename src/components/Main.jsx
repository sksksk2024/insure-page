import work1 from '../images/bg-pattern-how-we-work-desktop.svg';
import work2 from '../images/bg-pattern-how-we-work-mobile.svg';
import left1 from '../images/bg-pattern-intro-left-mobile.svg';
import left2 from '../images/bg-pattern-intro-left-desktop.svg';
import right1 from '../images/bg-pattern-intro-right-mobile.svg';
import right2 from '../images/bg-pattern-intro-right-desktop.svg';
import img4 from '../images/image-intro.jpg';
import snappy from '../images/icon-snappy-process.svg';
import affordable from '../images/icon-affordable-prices.svg';
import peopleFirst from '../images/icon-people-first.svg';

const Main = () => {
  return (
    <main className="flex flex-col justify-center items-center w-screen h-auto bg-white overflow-clip">
      <section
        className="relative bg-very-dark-violet flex flex-col-reverse lg:flex-row justify-center items-center gap-16 lg:gap-2
      text-center lg:text-start text-white pb-64P w-screen"
      >
        <div className="z-10 flex flex-col justify-center items-center lg:items-start gap-8 lg:w-1/2 p-16P">
          <hr className="hidden lg:block w-160W h-[0.2rem] bg-very-dark-violet" />

          <h1
            className="font-dm-serif-display font-bold text-3xl lg:text-4xl tracking-tight leading-10 lg:leading-2xs-tight
          max-w-container-500"
          >
            Humanizing your insurance.
          </h1>

          <p className="max-w-container-600">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>

          <button className="text-white uppercase py-8P px-16P w-[50dvw] lg:w-auto border-2 border-solid border-white text-white hover:text-black hover:border-black hover:bg-white">
            View plans
          </button>
        </div>
        <img
          src={img4}
          className="z-10 w-full lg:w-1/3 lg:relative top-128I"
          alt="humanizing your insurance"
        />

        <img
          src={left1}
          className="z-0 block lg:hidden absolute bottom-200I left-0 object-contain w-[97dvw]
        "
          // Not put the width and height will prevent it from not responding to stick to the edge commands
          alt=""
          aria-hidden="true"
        />
        <img
          src={left2}
          className="z-0 lg:block hidden absolute top-300I left-0 h-500H object-contain
        "
          // Not put the width and height will prevent it from not responding to stick to the edge commands
          alt=""
          aria-hidden="true"
        />

        <img
          src={right1}
          className="z-0 block lg:hidden absolute -bottom-200I right-0 h-400H object-contain
        "
          // Not put the width and height will prevent it from not responding to stick to the edge commands
          alt=""
          aria-hidden="true"
        />
        <img
          src={right2}
          className="z-0 lg:block hidden absolute -top-32I right-0 h-500H object-contain
        "
          // Not put the width and height will prevent it from not responding to stick to the edge commands
          alt=""
          aria-hidden="true"
        />
      </section>

      <section className="flex flex-col justify-center items-center lg:items-start gap-24 py-112P">
        <div className="relative flex flex-col justify-center items-center lg:items-start ">
          <hr className="block w-160W h-[0.2rem] bg-very-dark-violet" />

          <h1 className="mt-48M font-dm-serif-display font-bold text-3xl lg:text-4xl text-black tracking-tight leading-10">
            We’re different
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 py-16P">
          <div className="flex flex-col justify-start items-center lg:items-start gap-4 text-grayish-blue text-center lg:text-start">
            <img src={snappy} alt="Snappy Process" />
            <h3 className="font-dm-serif-display text-xl text-black">
              Snappy Process
            </h3>
            <p className="min-w-container-100 w-[90dvw] max-w-container-300">
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </p>
          </div>

          <div className="flex flex-col justify-start items-center lg:items-start gap-4 text-grayish-blue text-center lg:text-start">
            <img src={affordable} alt="Snappy Process" />
            <h3 className="font-dm-serif-display text-xl text-black">
              Affordable Prices
            </h3>
            <p className="w-[90dvw] max-w-container-300">
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </div>

          <div className="flex flex-col justify-start items-center lg:items-start gap-4 text-grayish-blue text-center lg:text-start">
            <img src={peopleFirst} alt="Snappy Process" />
            <h3 className="font-dm-serif-display text-xl text-black">
              People First
            </h3>
            <p className="w-[90dvw] max-w-container-300">
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-12 text-center lg:text-start p-32P w-[80dvw] bg-very-dark-violet overflow-clip">
          <h2 className="z-50 font-dm-serif-display font-bold text-2xl lg:text-3xl text-white max-w-container-500 leading-2xs-tight">
            Find out more about how we work
          </h2>
          <button className="z-50 text-white uppercase py-8P px-16P border-2 border-solid border-white text-white hover:text-black hover:border-black hover:bg-white">
            How we work
          </button>
          <img
            src={work1}
            className="hidden lg:block absolute right-0 object-contain"
            alt=""
            aria-hidden="true"
          />
          <img
            src={work2}
            className="block lg:hidden absolute right-0 object-contain"
            alt=""
            aria-hidden="true"
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
