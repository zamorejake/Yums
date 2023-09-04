import { Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';

const Header = () => {

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img
            alt="Yums Logo"
            className="mr-3 h-19 sm:h-14 title"
            src="/yums.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link href="#">
            <p>About</p>
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;