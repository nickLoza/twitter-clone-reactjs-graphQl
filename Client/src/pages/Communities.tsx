import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai"
import { MdAddCircleOutline } from "react-icons/md"

import listImg from "../assets/list.png";

function Communities() {
	return (
		<>
			<div className="flex items-center justify-between mx-8">
				<div className="flex items-center gap-x-8">
					<AiOutlineArrowLeft/>
					<h2 className="text-xl font-bold">Communities</h2>
				</div>
				<div className="flex items-center gap-x-2">
					<AiOutlineSearch/>
					<MdAddCircleOutline/>
				</div>
			</div>

			<h3 className="text-xl font-bold mt-6 px-6">Discover new Communities
</h3>
			<div className="flex flex-col gap-y-4 px-6 mt-6">
				<div className="flex items-center gap-x-2">
						<img src={listImg} alt="list" className="object-cover rounded-xl h-[75px]" width={75} height={75}/>
						<div>
							<p className="font-semibold text-medium">Cat Twitter</p>
								<span className="text-sm text-gray-400">113k members</span>
						</div>
				</div>
				<div className="flex items-center gap-x-2">
						<img src={listImg} alt="list" className="object-cover rounded-xl h-[75px]" width={75} height={75}/>
						<div>
							<p className="font-semibold text-medium">Music</p>
								<span className="text-sm text-gray-400">33k members</span>
						</div>
				</div>
				<button className="twitter-color mt-3 self-start">Show more</button>
			</div>
		</>
	)
}

export default Communities