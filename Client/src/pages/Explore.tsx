import { BsSearch } from "react-icons/bs"
import { CiSettings } from "react-icons/ci"
import { topHashtags } from "../db/twitterDB"
import NavigateButtons from "../components/NavigateButtons"

function Explore() {
	return (
		<>
			<div className="flex justify-center">
				<div className="flex gap-x-4 px-8 mx-[25px] mb-5 py-3 rounded-full items-center bg-[#16181C] w-[75%]">
					<BsSearch/>
					<input className="bg-transparent" type="text" placeholder="Search Twitter"/>
					</div>
					<CiSettings size={25} className="mt-3"/>
				</div>

      		<NavigateButtons buttons={["For you","Trending","News","Sports","Entertainment"]}/>
      		<div className="px-6">
	      		{topHashtags.map((item,i)=>(
	      			<div className="mb-4" key={i}>
	      			<p className="text-sm text-gray-500">{item.topic}</p>
	      			<p className="font-semibold">{item.title}</p>
	      			<p className="text-sm text-gray-500 mt-1">{item.tweetsNum} Tweets</p>
	      			</div>
	      			))}
	      		{topHashtags.map((item,i)=>(
	      			<div className="mb-4" key={i}>
	      			<p className="text-sm text-gray-500">{item.topic}</p>
	      			<p className="font-semibold">{item.title}</p>
	      			<p className="text-sm text-gray-500 mt-1">{item.tweetsNum} Tweets</p>
	      			</div>
	      			))}
	      		{topHashtags.map((item,i)=>(
	      			<div className="mb-4" key={i}>
	      			<p className="text-sm text-gray-500">{item.topic}</p>
	      			<p className="font-semibold">{item.title}</p>
	      			<p className="text-sm text-gray-500 mt-1">{item.tweetsNum} Tweets</p>
	      			</div>
	      			))}
      			</div>
      	</>
      		)
}

export default Explore