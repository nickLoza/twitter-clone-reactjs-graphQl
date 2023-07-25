import { AiOutlineArrowLeft, AiOutlineFileAdd } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import { FiMoreHorizontal } from "react-icons/fi"

import listImg from "../assets/list.png";


function Lists() {
	return (
		<>
			<div className="flex px-4">
				<AiOutlineArrowLeft size={25} className="mt-3"/>
				<div className="flex gap-x-4 px-8 mx-[25px] mb-5 py-3 rounded-full items-center bg-[#16181C] w-[75%]">
					<BsSearch/>
					<input className="bg-transparent" type="text" placeholder="Search Lists"/>
				</div>
				<AiOutlineFileAdd size={25} className="mr-4 mt-3"/>
				<FiMoreHorizontal size={25} className="mt-3"/>
			</div>

			<div className="px-6 pb-6 border-gray-600 border-b-[1px]">
				<h3 className="text-xl font-bold mb-8">Pinned Lists</h3>
				<p className="text-gray-400 ml-2">Nothing to see here yet — pin your favorite Lists to access them quickly.</p>
			</div>

			<div className="px-6 mt-6">
				<h3 className="text-xl font-bold mb-8">Discover new Lists</h3>
				<div className="flex flex-col gap-y-6">
					<div className="flex items-center gap-x-2">
						<img src={listImg} alt="list" className="object-cover rounded-xl h-[50px]" width={50} height={50}/>
						<div>
							<div className="flex items-center gap-x-3">
								<p className="font-semibold text-medium">Chess</p>
								<span className="text-sm text-gray-400">3k members</span>
							</div>
							<p className="text-sm text-gray-400">2k followers including @ElonMusk</p>
						</div>
					</div>
					<div className="flex items-center gap-x-2">
						<img src={listImg} alt="list" className="object-cover rounded-xl h-[50px]" width={50} height={50}/>
						<div>
							<div className="flex items-center gap-x-3">
								<p className="font-semibold text-medium">F1</p>
								<span className="text-sm text-gray-400">2k members</span>
							</div>
							<p className="text-sm text-gray-400">21k followers including @ElonMusk</p>
						</div>
					</div>
					<div className="flex items-center gap-x-2">
						<img src={listImg} alt="list" className="object-cover rounded-xl h-[50px]" width={50} height={50}/>
						<div>
							<div className="flex items-center gap-x-3">
								<p className="font-semibold text-medium">Science</p>
								<span className="text-sm text-gray-400">113k members</span>
							</div>
							<p className="text-sm text-gray-400">222k followers including @ElonMusk</p>
						</div>
					</div>
				</div>
			</div>

			<div className="px-6 mt-6">
				<h3 className="text-xl font-bold mb-8">Your Lists</h3>
				<p className="text-gray-400 ml-2">You haven't created or followed any Lists. When you do, they'll show up here.</p>
			</div>
		</>
	)
}

export default Lists