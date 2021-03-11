import './Nav.css'
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <Nav.Link as={ NavLink } to="/add-pet" className="nav-tabs" >
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

const MainNav = ({ user }) => {
  return (
    <Navbar className="nav-section"  expand="lg" >
      <Navbar.Brand href="/" className="page-logo">Pets-R-Us</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav>
          {/* <Nav.Link> */}

          {user && <div className="welcome-msg">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}

          {/* </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MainNav;

// const MainNav = ({ user }) => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#link">Link</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };
// export default MainNav;

//     <nav>
//       <div className="nav">
//         <NavLink className="logo" to="/">
//           Pets-R-Us
//         </NavLink>
//         <div className="links">
//           {user && <div className="link welcome">Welcome, {user.username}</div>}
//           {alwaysOptions}
//           {user ? authenticatedOptions : unauthenticatedOptions}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;
