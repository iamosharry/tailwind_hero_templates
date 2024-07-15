import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className: string;
}

const GhostButton = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={twMerge(
        "rounded-md px-4 py-2 text-zinc-100 transition-all hover:scale-[1.02] hover:bg-zinc-800 hover:text-zinc-50 active:scale-[0.98]",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default GhostButton;
