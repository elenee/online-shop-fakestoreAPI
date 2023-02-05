import { Drawer } from "antd";
import { useState } from "react";
import "../../styles/ant-drawer.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

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
          <li><NavLink to="/" className='li' onClick={onClose}>Home</NavLink></li>
        </ul>
      </Drawer>
    </>
  );
};
export default HeaderDrawer;
