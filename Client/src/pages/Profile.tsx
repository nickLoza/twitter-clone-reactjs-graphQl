import { AiOutlineArrowLeft, AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai"
import { MdOutlineLocationOn } from "react-icons/md"
import { GoComment } from "react-icons/go"
import { BiBarChart } from "react-icons/bi"
import NavigateButtons from "../components/NavigateButtons"
import { useQuery, gql } from '@apollo/client';

import { PostsType } from "../modules/types";
import { useNavigate, useParams } from "react-router-dom"
import Spinner from "../components/Spinner"

const USER_PROFILE = gql`
  query UserProfile($username: String!) {
	  userProfile(username: $username) {
	    country
	    description
	    followers
	    following
	    id
	    name
	    profileImg
	    username
	    posts {
	      id
	      likes
	      media
	      postText
	      retweets
	    }
	  }
}
`;


function Profile() {
	const navigate = useNavigate();
	const params = useParams();

	const { loading, error, data } = useQuery(USER_PROFILE,{
		variables: {
      username: params.username,
   }
	});



 	if (loading) return <Spinner/>;
  if (error) return <p>Error : {error.message}</p>;

  function handleOnClickBack(){
  		navigate(-1)
  	}

	return (
		<>
			<div className="flex items-center justify-between mx-8 pb-4">
				<div className="flex items-center gap-x-8">
					<button onClick={handleOnClickBack}>
						<AiOutlineArrowLeft size={25}/>
					</button>
					<div>
						<h2 className="text-xl font-bold">{data.userProfile[0].name}</h2>
					</div>
				</div>
			</div>

			<div className="flex items-end justify-between bg-[#ac8] w-full h-[250px]">
				<img className="bg-black rounded-full" src={data.userProfile[0].profileImg} alt="profile image" width={150}/>	
				<button className="py-2 px-4 text-medium bg-black rounded-full m-2 border-gray-400 border-[1px]">Edit profile</button>
			</div>

			<section className="mx-4">
				<div className="mt-4">
				<p className="text-xl font-bold">{data.userProfile[0].name}</p>
				<p className="text-gray-400">{data.userProfile[0].surname}</p>
				</div>

				<p className="max-w-[550px] mt-2">
					{data.userProfile[0].description}
				</p>

				<p className="flex  items-center gap-x-1 text-gray-400 my-2">
					<MdOutlineLocationOn/>
					{data.userProfile[0].country}
				</p>

				<div className="flex items-center text-gray-400 gap-x-3 my-2 mb-5">
					<p><span className="text-white font-bold">{data.userProfile[0].following}</span> Following</p>
					<p><span className="text-white font-bold">{data.userProfile[0].followers}</span> Followers</p>
				</div>

	      		<NavigateButtons buttons={["Tweets","Replies","Hightlights","Media","Likes"]}/>
				</section>

			<section>
			{data.userProfile[0].posts.map((item:PostsType, i:number) => (
	        <div className="flex mt-4 pb-2 border-gray-600 border-b-[1px] pr-[25px]" key={i}>
	        	<img className="self-start" src={data.userProfile[0].profileImg} alt="account" height={50} width={50}/>
	        	<div className="mt-2">
	        		<div className="flex gap-x-2">
	        			<p className="font-semibold">{data.userProfile[0].name}</p>
	        			<p className="text-gray-400">{data.userProfile[0].surname}</p>
	        		</div>
	        		<p>{item.postText}</p>
	        		{item.media && <img className="pt-4 w-full object-cover" src={item.media} alt="post image" height={100}/>}
	        		<div className="flex items-center justify-between w-full text-gray-400 mt-4 pb-2 px-8 select-none">
		              <div className="flex items-center gap-x-1 ">
		                <GoComment className="cursor-pointer hover:text-gray-100"/>
		                <span className="text-[.8rem]">{item.retweets*2}</span>
		              </div>
		              <div className="flex items-center gap-x-1">
		                <AiOutlineRetweet className="cursor-pointer hover:text-gray-100"/>
		                <span className="text-[.8rem]">{item.retweets}</span>
		              </div>
		              <div className="flex items-center gap-x-1">
		                <AiOutlineHeart className="cursor-pointer hover:text-gray-100"/>
		                <span className="text-[.8rem]">{item.likes}</span>
		              </div>
		              <div className="flex items-center gap-x-1">
		                <BiBarChart className="cursor-pointer hover:text-gray-100"/>
		                <span className="text-[.8rem]">{item.retweets*4}</span>
		              </div>
		            </div>
	        	</div>
	        </div>

      ))}
			</section>
		</>
	)
}

export default Profile