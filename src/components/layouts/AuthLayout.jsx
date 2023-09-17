import { SideBar } from "../sidebar/SideBar";
const LayoutWrapper = ({ children }) => (
  <div className={"flex flex-row"}>
    <div className="hidden sm:block">
      <SideBar />
    </div>
    <main className="w-full">{children}</main>
  </div>
);

const AuthLayout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default AuthLayout;
