import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineMail,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

function Sidebar() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="https://res.cloudinary.com/dnodfc1ez/image/upload/v1644248547/YelpCamp/mhqvvothytow1gwjjber.jpg"
        alt="user profile"
        className="mx-auto rounded-full"
        height="128"
        width="128"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 font-sans text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Vivek </span>Singh
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Devloper
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
        href="/Vivek Resume.pdf"
        download="Vivek Resume.pdf"
      >
        <AiOutlineCloudDownload className="w-6 h-6" />
        Download Resume
      </a>

      <div className="flex justify-around w-full mx-auto my-5 text-green md:w-9/12">
        <a>
          <AiFillLinkedin className="w-8 h-8 text-blue-500 cursor-pointer" />
        </a>
        <a>
          <AiFillGithub className="w-8 h-8 text-gray-600 cursor-pointer" />
        </a>
        <a>
          <AiFillInstagram className="w-8 h-8 text-pink-500 cursor-pointer" />
        </a>
        <a>
          <AiFillFacebook className="w-8 h-8 text-blue-600 cursor-pointer" />
        </a>
      </div>

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Ranchi , Jharkhand</span>
          {/* <a href="https://www.google.com/maps/place/Birla+Institute+of+Technology+-+Mesra/@23.4163848,85.4216993,15z/data=!4m9!1m2!2m1!1sbit!3m5!1s0x39f4fb53f0c27be7:0x66180c1cf3c5e704!8m2!3d23.412305!4d85.439901!15sCgNiaXRaBSIDYml0kgEKdW5pdmVyc2l0eZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOTGF5MDNTRzFuUlJBQg">
            Ranchi , Jharkhand
          </a> */}
        </div>
        <p className="my-2 lg:text-sm">kumarsinghvivek27951@gamil.com</p>
        <p className="my-2">7667703881</p>
      </div>

      <button
        className="flex items-center justify-center w-8/12 px-4 py-2 mx-auto my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
        onClick={() => window.open("mailto:kumarsinghvivek27951@gamil.com")}
      >
        {/* <AiOutlineMail className="mr-3 text-white" /> */}
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
      >
        Theme
      </button>
    </div>
  );
}

export default Sidebar;
