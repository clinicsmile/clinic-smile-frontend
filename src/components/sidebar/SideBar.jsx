import { Sidebar } from 'flowbite-react';


export default function DefaultSidebar() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="#"
          >
            <p>
              Dashboard
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            label="Pro"
            labelColor="dark"
          >
            <p>
              Kanban
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            label="3"
          >
            <p>
              Inbox
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
          >
            <p>
              Users
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
          >
            <p>
              Products
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
          >
            <p>
              Sign In
            </p>
          </Sidebar.Item>
         
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}