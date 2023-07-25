import { BiSolidHomeCircle } from "react-icons/bi";
import { BsSearch,BsInbox,BsBookmark,BsPeople } from "react-icons/bs";
import { MdNotificationsNone } from 'react-icons/md';
import { RiFileListLine } from "react-icons/ri";
import { FiFeather } from "react-icons/fi";
import { GoVerified } from "react-icons/go";
import { AiOutlineUser, AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";


const asideItems = [
	{title: "Home", route:"/home", icon: <BiSolidHomeCircle/>},
	{title: "Explore", route:"/explore", icon: <BsSearch/>},
	{title: "Notifications", route:"/notifications", icon: <MdNotificationsNone/>},
	{title: "Messages", route:"/messages", icon: <BsInbox/>},
	{title: "Lists", route:"/lists", icon: <RiFileListLine/>},
	{title: "Bookmarks", route:"/bookmarks", icon: <BsBookmark/>},
	{title: "Communities", route:"/communities", icon: <BsPeople/>},
	{title: "Verified", route:"#", icon: <GoVerified/>},
	{title: "Profile", route:"/profile/NickLozaDev", icon: <AiOutlineUser/>},
	{title: "More", route:"#", icon: <CiCircleMore/>}
]

function AsideLeft() {
  return (
    <aside className="sticky max-w-[75px] lg:min-w-[270px] h-screen left-0 top-0 flex flex-col justify-between p-6 ">
      {/*top*/}
      <nav className="flex flex-col items-center lg:items-start text-3xl">
        <Link className="lg:ml-3" to={"/home"}>
          <AiOutlineTwitter />
        </Link>
        <div className="flex flex-col gap-y-6 my-8 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <ul className="flex flex-col gap-y-2 px-3">
            {asideItems.map((item, i) => (
              <li key={i}>
                <NavLink className="flex items-center gap-x-4 p-2 rounded-xl hover:bg-[#ffffff20] transition duration-350" to={`${item.route}`}>
                  {item.icon}
                  <span className="hidden lg:block text-xl">{item.title}</span>
                </NavLink>
              </li>
            ))}
            <li>
                <a href="https://github.com/nickLoza/twitter-clone" target="_blank" className="flex items-center gap-x-4 p-2 rounded-xl hover:bg-[#ffffff20] transition duration-350" >
                  <AiOutlineGithub/>
                  <span className="hidden lg:block text-xl">Repository</span>
                </a>
              </li>
          </ul>
        </div>
        <button className="flex items-center self-center justify-center text-xl w-12 h-12  lg:w-[100%] lg:text-lg  twitter-bg rounded-full font-bold">
          <FiFeather className="block lg:hidden" />
          <span className="hidden lg:block">Tweet</span>
        </button>
      </nav>
      {/*bottom*/}
      <div className="flex items-center">
        <img src="http://robohash.org/30" alt="profile" width={50} height={50} />
        <div className="hidden lg:block">
          <p className="font-semibold">Nick Loza</p>
          <p className="text-gray-400">@NickLozaDev</p>
        </div>
      </div>
    </aside>
  );
}

export default AsideLeft;

