import { infoMenu } from "../../data/sideBar/SideBarItems";
import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();
  const [logo, setLogo] = useState("./logo.svg");
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 1200);
  useEffect(() => {
    const brand = JSON.parse(window.localStorage.getItem("brand"));
    if (brand?.logo) {
      setLogo(brand.logo);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let navigate = useNavigate();
  return (
    <Sidebar collapsed={isCollapsed} className=" shadow-black shadow-2xl">
      <div className="h-4/5 align-middle">
        <div className="w-auto h-1/4">
          <img src={logo} className="h-5/6 mx-auto" />
        </div>
        <div className="h-3/4">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              {infoMenu().map((e) => (
                <Sidebar.Item
                  className={`hover:bg-[var(--primary)] hover:text-white text-[--primary] ease-in-out transition-all duration-100 hover:cursor-pointer ${location.pathname === e.path ? "bg-[var(--primary)] text-white font-semibold shadow-md shadow-[--primary]" : ""}`}
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
