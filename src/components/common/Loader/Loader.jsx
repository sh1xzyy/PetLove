import clsx from "clsx";
import { PulseLoader } from "react-spinners";

const Loader = ({ custom = false, size = 20 }) => {
  return (
    <div
      className={clsx(
        "z-[10000]",
        !custom && "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
      )}
    >
      <PulseLoader color="var(--accent-orange)" size={size} />
    </div>
  );
};

export default Loader;
