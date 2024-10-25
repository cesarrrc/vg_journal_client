import React from "react";

// import component 👇
import Drawer from "react-modern-drawer";

import classes from "./Drawer.module.css";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const DrawerComponent = ({ isOpen, setIsOpen, toggleDrawer, children }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className={classes.drawer_container}
    >
      <div className={classes.content_container}>{children}</div>
    </Drawer>
  );
};

export default DrawerComponent;
