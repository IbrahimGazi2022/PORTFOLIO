import logo from "../../../../public/img/logo.png";

const Navbar = () => {
  return (
    <div className="flex w-[90%] p-10 m-auto">
      <div>
        <img src={logo} alt="logo" className="w-12" />
      </div>
      <div>
        <h3 className="text-white pl-5 pt-3 font-medium">
          coder.ibrahimgazi@gmail.com
        </h3>
      </div>
      <nav>
        <ul>
          <li>
            <a href="" className="text-white font-medium">
              Service
            </a>
          </li>
          <li>
            <a href="" className="text-white font-medium">
              Works
            </a>
          </li>
          <li>
            <a href="" className="text-white font-medium">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
