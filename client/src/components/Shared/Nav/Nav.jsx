import "./Nav.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <Nav.Link as={NavLink} to="/users/:id/" className="nav-tabs">
      My Pets
    </Nav.Link>
    <Nav.Link as={NavLink} to="/add-pet" className="nav-tabs">
      Add a Pet
    </Nav.Link>
    <Nav.Link className="nav-tabs" href="/sign-out">
      Sign Out
    </Nav.Link>
  </>
);

const unauthenticatedOptions = (
  <>
    <Nav.Link className="nav-tabs" href="/sign-in">
      Sign In
    </Nav.Link>
    <Nav.Link className="nav-tabs" href="/sign-up">
      Sign Up
    </Nav.Link>
  </>
);

const alwaysOptions = (
  <>
    <Nav.Link className="nav-tabs" href="/pets">
      Adoptable Pets
    </Nav.Link>
  </>
);


//Old Logo src = https://i.imgur.com/MYeogFE.png
const MainNav = ({ user }) => {
  return (
    <Navbar className="nav-section sticky-top" expand="lg" >
      <Navbar.Brand href="/" className="page-logo">
        <img className="logo-pic" src="https://i.imgur.com/eTLFAD5.png" alt="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {user && <div className="welcome-msg">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MainNav;
