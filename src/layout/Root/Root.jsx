import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins px-10">
      <ToastContainer position="bottom-right" />
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
