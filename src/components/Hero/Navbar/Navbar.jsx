import logo from "/img/logo.png";

const Navbar = () => {
  return (
    <div className="flex w-[90%] pt-10 m-auto">
      <div>
        <img src={logo} alt="logo" className="w-12" />
      </div>
      <div>
        <h3 className="text-white pl-5 pt-3 font-medium">
          coder.ibrahimgazi@gmail.com
        </h3>
      </div>
      <div className="w-[500px] ml-[200px]">
        <nav>
          <ul className="flex p-3 text-white font-medium font-sora gap-8 items-center">
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Works</a>
            </li>
            <li>
              <a href="">Resume</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
