//import logo from "path" - prob. wont add

import { FaLinkedin, FaGithub } from 'react-icons/fa';


// import { FaLinkedin } from 'react-icons/fa';
// import { FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    return (
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <h1 className="mx-2 w-50">Welcome To My Page</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
        </div>
      </nav>
    );
  };

export default Navbar