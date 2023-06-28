import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";

const Root = (props) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
