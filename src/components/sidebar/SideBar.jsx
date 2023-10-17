import { infoMenu } from "../../data/sideBar/SideBarItems";
import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const [logo, setLogo] = useState("./logo.svg");

  useEffect(() => {
    const brand = JSON.parse(window.localStorage.getItem("brand"));
    if (brand?.logo) {
      setLogo(brand.logo);
    }
  }, []);

  let navigate = useNavigate();
  return (
    <Sidebar className="w-full flex w-sceen h-screen items-center">
      <div className="h-4/5 align-middle">
        <div className="w-auto my-5 h-1/4">
          <img src={logo} className="max-w-xs" />
        </div>
        <div className="h-3/4">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              {infoMenu().map((e) => (
                <Sidebar.Item
                  className="hover:bg-[var(--primary)] hover:text-white ease-in-out transition-all duration-100 hover:cursor-pointer"
                  key={e.name}
                  item={e.name}
                  onClick={() => {
                    navigate(e.path);
                  }}
                  icon={e.icon}
                >
                  {e.name}
                </Sidebar.Item>
              ))}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>
    </Sidebar>
  );
}

export { SideBar };
