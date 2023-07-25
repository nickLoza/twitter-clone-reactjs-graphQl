import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ClipLoader } from "react-spinners"

const Home = lazy(() => import('../pages/Home'));
const Explore = lazy(() => import('../pages/Explore'));
const Notifications = lazy(() => import('../pages/Notifications'));
const Messages = lazy(() => import('../pages/Messages'));
const Lists = lazy(() => import('../pages/Lists'));
const Bookmarks = lazy(() => import('../pages/Bookmarks'));
const Communities = lazy(() => import('../pages/Communities'));
const Profile = lazy(() => import('../pages/Profile'));
const Post = lazy(() => import('../pages/Post'));


function Routers() {
	const loaderStyle = {
	    display: "flex",
	    justifyContent: "center",
	    alignItems: "center",
	    margin: "3rem auto"
  	};
	return (
		<Suspense fallback={<ClipLoader color="#1D9BF0" size={25} cssOverride={loaderStyle}/>}>
			<Routes>
				<Route path="/" element={<Navigate to={"/home"}/>}/>
				<Route path="/home" element={<Home/>}/>
				<Route path="/explore" element={<Explore/>}/>
				<Route path="/notifications" element={<Notifications/>}/>
				<Route path="/messages" element={<Messages/>}/>
				<Route path="/lists" element={<Lists/>}/>
				<Route path="/bookmarks" element={<Bookmarks/>}/>
				<Route path="/communities" element={<Communities/>}/>
				<Route path="/profile/:username" element={<Profile/>}/>
				<Route path="/post/:username/:postId" element={<Post/>}/>
				<Route path="*" element={<Navigate to={"/home"}/>}/>
			</Routes>
		</Suspense>
	)
}

export default Routers