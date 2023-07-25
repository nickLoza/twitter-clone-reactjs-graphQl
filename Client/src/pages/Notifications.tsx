import { AiFillHeart } from "react-icons/ai"
import NavigateButtons from "../components/NavigateButtons"

function Notifications() {
	return (
		<>
			<h2 className="px-6 mb-8 text-2xl font-semibold">Notifications</h2>

      		<NavigateButtons buttons={["All","Verified","Mentions"]}/>

      		<div>
      			<div className="flex px-3">
      				<AiFillHeart size={75} color="red" className="mr-3"/>
      				<div className="mt-4">
      					<img src="http://robohash.org/98" alt="mock user" width={40}/>
      					<div className="mt-2">
      						<span className="font-semibold">ElonMusk</span>
      						<span> liked your Tweet</span>
      					</div>
      					<p className="text-gray-500">
      					Buenas tardes, les presentó un clon de Twitch (Next.js 13 y Tailwind ) que hice hoy

      					#frontend #programadorweb #nextjs #css #desarrolloweb #HTML #javascript #React #juniordev
      					#developerArgentina
      					https://twitch-clone-2023.vercel.app
      					</p>
      				</div>
      			</div>
      		</div>
		</>
	)
}

export default Notifications