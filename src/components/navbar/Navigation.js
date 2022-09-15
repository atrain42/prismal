//components
import NavLinks from "./NavLinks";

//styles
import classes from "./Navbar.module.css";

const Navigation = () => {
  return (
    <div className={classes.Navigation}>
      <NavLinks />
    </div>
  );
};

export default Navigation;
