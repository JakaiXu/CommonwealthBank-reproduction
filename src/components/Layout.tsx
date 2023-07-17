import React from "react";
import Header from "./HeaderGroup/Header";
type Children = {
  children: React.ReactNode;
};
const Layout = ({ children }: Children) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
