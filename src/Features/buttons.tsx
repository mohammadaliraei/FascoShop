import React, { HTMLAttributes } from "react";

type ButtonProps = {
  label: string;
  isSwitch: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const Buttons: React.FC<ButtonProps> = ({ label, isSwitch, ...rest }) => {
  return (
    <button
      className={isSwitch ? "bg-black text-white" : "bg-gray-100 text-gray-700"}
      style={{
        borderRadius: "0.375rem",
        padding: "0.5rem 1rem",
        margin: "0.5rem",
      }}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Buttons;
