import { useState } from "react";

//components
import NavLinks from "./NavLinks";

//icons
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

//classes
import classes from "./Navbar.module.css";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <BiMenuAltRight
      className={classes.Hamburger}
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <IoMdClose
      className={classes.Hamburger}
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);
  return (
    <div className={classes.mobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </div>
  );
};

export default MobileNavigation;
