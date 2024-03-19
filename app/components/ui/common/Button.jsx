import clsx from "clsx";

const SIZE = {
  sm: "p-2 text-base xs:px-4",
  md: "p-3 text-base xs:px-4",
  lg: "p-3 text-xl xs:px-4",
};

export function Button({
  children,
  className,
  size = "md",
  variant = "blue",
  hoverable = true,
  ...rest
}) {
  const sizeClass = SIZE[size];
  const variants = {
    white: ` text-black bg-white ${
      hoverable && "hover:bg-[rgba(31,38,135,0.77)]  hover:text-white"
    } active:scale-90  transition-all `,
    blue: `text-white bg-[rgba(31,38,135,0.77)]  shadow-blue-600/75 ${
      hoverable && "hover:bg-white hover:text-black"
    } active:scale-90  transition-all`,
    red: `text-red-200 bg-red-600 shadow-red-600/75 ${
      hoverable && "hover:bg-red-300 hover:text-red-700"
    } active:scale-90  transition-all`,
    purple: `text-sky-400 bg-indigo-700 shadow-indigo-600/75  ${
      hoverable && "hover:bg-indigo-200 hover:text-purple-700"
    } active:scale-90  transition-all`,
    green: `text-green-200 bg-green-700 shadow-green-600/75  ${
      hoverable && "hover:bg-green-200 hover:text-green-700"
    };
  active:scale-90 transition-all`,
  };
  return (
    <button
      {...rest} //this includes onClick and other events. The button sets up the disabled property in the tailwindscss so it can use disabed opacity and cursor no jover by enabling the property elsewhere during the buttons loading state.
      className={clsx(
        "flex items-center rounded-lg transition-all duration-300  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  aria-disabled:cursor-not-allowed aria-disabled:opacity-50 ",
        className,
        `${sizeClass} disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-2xl p2 active:scale-90 ${className} ${variants[variant]}`
      )}
    >
      {children}
    </button>
  );
}
