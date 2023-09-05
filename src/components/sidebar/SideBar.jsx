import { infoMenu } from "../../data/sideBar/SideBarItems";
import { Sidebar } from "flowbite-react";
function SideBar() {
  return (
    <>
      <Sidebar className="w-full h-full">
        <div className="h-4/5 align-middle">
          <div className="w-auto my-5 h-1/4">
            <img src="./logo.svg" />
          </div>
          <div className="h-3/4">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                {infoMenu.map((e) => (
                  <Sidebar.Item
                    key={e.name}
                    item={e.name}
                    href={e.path}
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
    </>
  );
}

export { SideBar };
