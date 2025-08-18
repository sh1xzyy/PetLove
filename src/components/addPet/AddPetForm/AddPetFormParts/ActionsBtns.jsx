import { Link } from "react-router-dom";

const ActionsBtns = () => {
  return (
    <>
      <Link
        className="linear md:[48px] flex h-[42px] min-w-[100px] items-center justify-center rounded-[30px] bg-grey-005 px-[12px] text-gray-900 transition duration-[250ms] hover:bg-grey-05 hover:text-light-white md:min-w-[170px]"
        to="/"
      >
        Back
      </Link>
      <button
        className="linear md:[48px] h-[42px] min-w-[100px] rounded-[30px] bg-accent-orange px-[12px] text-light-white transition duration-[250ms] hover:bg-bg-cream hover:text-accent-orange md:min-w-[170px]"
        type="submit"
      >
        Submit
      </button>
    </>
  );
};

export default ActionsBtns;
