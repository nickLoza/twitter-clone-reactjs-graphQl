import { CiSettings } from "react-icons/ci";
import { MdOutlineForwardToInbox } from "react-icons/md";



function Messages() {
	return (
		<>
			<div className="flex justify-between px-6 mb-8 text-2xl font-semibold">
				<h2>Messages</h2>
				<div className="flex gap-x-2 items-center">
					<CiSettings/>
					<MdOutlineForwardToInbox/>
				</div>
			</div>


			<div className="flex flex-col max-w-[350px] m-auto justify-center px-2">
				<h3 className="font-bold text-xl md:text-3xl">Welcome to your <br/>inbox!</h3>
				<p className="text-gray-400 mt-2">Drop a line, share Tweets and more with private conversations between you and others on Twitter. </p>
				<button
	            className="twitter-bg w-[180px] text-white font-semibold p-3 rounded-full mt-6"
	          >
	            Write a message
          </button>
			</div>
		</>
	)
}

export default Messages;