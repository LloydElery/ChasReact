import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="nav w-full relative flex justify-center items-center flex-row-reverse scroll-snap-align-start">
        <a href="/">
          <h1 className="nav-title flex justify-center text-xl text-black/80 p-2.5">
            My CV Page
          </h1>
        </a>
        <button className="dropdown-btn bg-transparent border-none m-0 pt-2.5">
          Button
        </button>
        <Link to="about">About</Link> | <Link to="cv">Projects</Link> |{" "}
        <Link to="location">Locations</Link> |{" "}
      </nav>
    </>
  );
};

export default Nav;
