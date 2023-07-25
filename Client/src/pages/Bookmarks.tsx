import bookmarkCageImg from "../assets/bookmarkCage.png";

function Bookmarks() {
	return (
		<>
		    <div className="px-6 mb-6">
			 	<h2 className="text-xl font-bold">Bookmarks</h2>
			 	<p className="text-sm text-gray-500">@NickLozaDev</p>
			</div>
			<div className="max-w-[370px] m-auto mt-[50px] px-2">
				<img src={bookmarkCageImg} alt="bookmarks cage"/>
				<h3 className="text-3xl font-bold mt-4">Save Tweets for later</h3>
				<p className="text-sm mt-2 text-gray-400">Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.</p>
			</div>
		</>
	)
}

export default Bookmarks