import { SideBar } from "../sidebar/SideBar";
const LayoutWrapper = ({ children }) => (
  <div className="flex">
    <div className="">
      <SideBar />
    </div>
    <main className="w-full">{children}</main>
  </div>
);

const AuthLayout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default AuthLayout;
