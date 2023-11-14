import { SideBar } from "../sidebar/SideBar";
const LayoutWrapper = ({ children }) => (
  <div className="flex w-screen h-screen">
    <div className="w-2/12">
      <SideBar />
    </div>
    <main className="w-10/12">{children}</main>
  </div>
);

const AuthLayout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default AuthLayout;
