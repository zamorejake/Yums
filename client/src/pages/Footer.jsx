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


 

<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
  <div class="sm:flex sm:items-center sm:justify-between">
      <a href="yums.png" class="flex items-center mb-4 sm:mb-0">
          <img src="yum.png" class="logo-img" alt="Yums Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Yums</span>
      </a>
      <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
              <a href="About" class="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
              <a href="Privacy Policy" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
              <a href="Licensing" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
          </li>
          <li>
              <a href="Contact" class="hover:underline">Contact</a>
          </li>
      </ul>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a href="Yums" class="hover:underline">&copy; 2023 Yums</a>. All Rights Reserved.</span>
</div>
</footer>


export default Footer2;