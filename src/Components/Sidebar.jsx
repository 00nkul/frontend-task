import { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
    const Menus = [
        { title: "Contacts", link: "/" },
        { title: "Charts and Maps", link: "test" },
    ];
    const [activeLink, setActiveLink] = useState("/");

    return (
        <div className="flex w-100">
            <div className={`w-full bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
                <ul className="">
                    {Menus.map((Menu, index) => (
                        <div onClick={() => {setActiveLink(Menu.link)}}>
                            <Link to={Menu.link}>
                                <li
                                    key={index}
                                    className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2 }   
                                ${Menu.link === activeLink && "bg-light-white"} `}
                                    active={Menu.link === activeLink}>
                                    <span className={`origin-left duration-200`}>
                                        {Menu.title}
                                    </span>
                                </li>
                            </Link>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Sidebar;
