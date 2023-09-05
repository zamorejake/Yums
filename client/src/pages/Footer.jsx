import { Link } from 'react-router-dom';
const Footer2 = () => {


return (
    <>
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
  <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
          <a href="yums.png" class="flex items-center mb-4 sm:mb-0">
              <img src="yums.png" class="logo-img" alt="Yums Logo" width={200}/>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                  <Link to='/about' class="mr-4 hover:underline md:mr-6 ">About</Link>
              </li>
              <li>
                  <Link to='/privacy' class="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
              </li>
              <li>
                  <Link to='/login' class="mr-4 hover:underline md:mr-6 ">Staff Login</Link>
              </li>
          </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a href="Yums" class="hover:underline">&copy; 2023 Yums</a>. All Rights Reserved.</span>
  </div>
</footer>

    </>
);
};

export default Footer2;