import React from "react";

const sizeClasses = {
  txtEina01SemiBold40: "font-einasemibold font-normal",
  txtEina01SemiBold32: "font-einasemibold font-normal",
  txtEina01SemiBold22: "font-einasemibold font-normal",
  txtEina01SemiBold30: "font-einasemibold font-normal",
  txtEina01SemiBold25: "font-einasemibold font-normal",
  txtEina01SemiBold14: "font-einasemibold font-normal",
  txtEina01SemiBold36: "font-einasemibold font-normal",
  txtEina01SemiBold48: "font-einasemibold font-normal",
  txtEina01Regular14: "font-einaregular font-normal",
  txtEina01Regular25: "font-einaregular font-normal",
  txtEina01Regular32: "font-einaregular font-normal",
  txtEina01Regular64: "font-einaregular font-normal",
  txtEina01Regular32WhiteA700: "font-einaregular font-normal",
  txtEina01Light16: "font-einalight font-normal",
  txtEina01Regular32Gray600: "font-einaregular font-normal",
  txtEina01Regular16: "font-einaregular font-normal",
  txtEina01Light18: "font-einalight font-normal",
  txtEina01Regular15: "font-einaregular font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
