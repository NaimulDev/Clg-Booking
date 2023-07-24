import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkdin <FaLinkedin size={28} />
        </>
      ),
      href: "https://www.linkedin.com/in/nimul/",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Nimul99",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={28} />
        </>
      ),
      href: "eng.naimul@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "/Resume_Nimul_Hassan.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%]  left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4  ml-[-90px] hover:ml-[-10px] hover:rounded-md duration-300 " +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full bg-  btn text-indigo-600"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
