import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="text-xl w-10 h-10 py-1 px-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="text-red-500">PRITI</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
              <NavLink to="/about" className={({isActive})=> isActive?'text-red-500':'text-red-900 font-semibold'}>
                  About
              </NavLink>
              <NavLink to="/projects" className={({isActive})=> isActive?'text-red-500':'text-red-900 font-semibold'}>
                  Projects
              </NavLink>
              <NavLink to="/contacts" className={({isActive})=> isActive?'text-red-500':'text-red-900 font-semibold'}>
                  Contact
              </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
