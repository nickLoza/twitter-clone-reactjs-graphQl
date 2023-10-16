import { BiSolidHomeCircle } from "react-icons/bi";
import { BsInbox, BsSearch } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { Link } from "react-router-dom";

const menuItems = [
	{title: "Home", route:"/home", icon: <BiSolidHomeCircle/>},
	{title: "Explore", route:"/explore", icon: <BsSearch/>},
	{title: "Notifications", route:"/notifications", icon: <MdNotificationsNone/>},
	{title: "Messages", route:"/messages", icon: <BsInbox/>},
]

function Menu() {
	return (
		<ul className="flex lg:hidden justify-around fixed bottom-0 left-0 w-[100vw] text-3xl bg-black py-4 border-t-[1px] border-[#475569] z-[1000]">
			{menuItems.map((item,i)=>(
				<li key={i}>
					<Link to={item.route}>
						{item.icon}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Menu;