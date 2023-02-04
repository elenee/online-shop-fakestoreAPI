import { Drawer } from "antd";
import { useState } from "react";
import "../../styles/ant-drawer.css";
import { GiHamburgerMenu } from "react-icons/gi";

const HeaderDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <GiHamburgerMenu className="drawerButton" onClick={showDrawer} />
      <Drawer placement="right" onClose={onClose} open={open}>
        <ul>
          <li>Home</li>
          <li>Items</li>
          <li>Contact</li>
          <li>Pay</li>
        </ul>
      </Drawer>
    </>
  );
};
export default HeaderDrawer;
