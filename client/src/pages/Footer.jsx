import { Footer } from 'flowbite-react';

const Footer2 = () => {
const test = "test";


return (
    <>
    <Footer container>
      <Footer.Copyright
        by="Yums™"
        href="#"
        year={2023}
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
    </>
);
};

export default Footer2;