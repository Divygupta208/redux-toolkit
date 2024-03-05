import { Fragment } from "react";
import MainHeader from "./MainHeader";
import Network from "../UI/Network";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
