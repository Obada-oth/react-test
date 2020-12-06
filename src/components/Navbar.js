import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/Radar">
        <button>Radar</button>
      </Link>
      <Link to="/Bar">
        <button>Bar</button>
      </Link>
    </div>
  );
};

export default Navbar;
