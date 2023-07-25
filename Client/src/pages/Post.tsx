import { Link, useNavigate, useParams } from "react-router-dom"
import { useQuery, gql } from '@apollo/client';
import { GoComment } from "react-icons/go";
import { AiOutlineArrowLeft, AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";

const POST = gql`
  query SingleUserPost($username: String!, $postId: ID!) {
  	singleUserPost(username: $username, postId: $postId) {
	    id
	    name
    	profileImg
    	username
	    post {
	      id
	      likes
	      media
	      postText
	      retweets
   	 	}
  	}	
}
`;


function Post() {
	const navigate = useNavigate();
	const params = useParams();
	const { loading, error, data } = useQuery(POST, {
    variables: {
      username: params.username,
      postId: params.postId,
    },
  });

	if (loading) return <p>Loading...</p>;
  	if (error) return <p>Error : {error.message}</p>;


  	function handleOnClickBack(){
  		navigate(-1)
  	}
	return (
		<>
			<div className="flex px-4 mb-6">
				<button onClick={handleOnClickBack}>
					<AiOutlineArrowLeft size={25} className="mt-3"/>
				</button>
				
			</div>

			<div className="flex mt-4 pb-2 border-gray-600 border-b-[1px]">
	          <img className="self-start mr-2" src={data.singleUserPost.profileImg} alt="account" height={50} width={50}/>
	          <div className="mt-2">
	            <div className="flex gap-x-2">
	              <Link to={`/profile/${data.singleUserPost.username}`} className="font-semibold hover:text-[#1D9BF0]">{data.singleUserPost.name}</Link>
	              <p className="text-gray-400">@{data.singleUserPost.username}</p>
	            </div>

	            <div>
	            	<p className="">{data.singleUserPost.post.postText}</p>
	            {data.singleUserPost.post.media && <img className="pt-4 object-cover w-full select-none" src={data.singleUserPost.post.media} alt="post image" height={100}/>}
	            <div className="flex items-center justify-between w-full text-gray-400 mt-4 pb-2 px-8 select-none">
	              <div className="flex items-center gap-x-1 ">
	                <GoComment className="cursor-pointer hover:text-gray-100"/>
	                <span className="text-[.8rem]">{data.singleUserPost.post.retweets*2}</span>
	              </div>
	              <div className="flex items-center gap-x-1">
	                <AiOutlineRetweet className="cursor-pointer hover:text-gray-100"/>
	                <span className="text-[.8rem]">{data.singleUserPost.post.retweets}</span>
	              </div>
	              <div className="flex items-center gap-x-1">
	                <AiOutlineHeart className="cursor-pointer hover:text-gray-100"/>
	                <span className="text-[.8rem]">{data.singleUserPost.post.likes}</span>
	              </div>
	              <div className="flex items-center gap-x-1">
	                <BiBarChart className="cursor-pointer hover:text-gray-100"/>
	                <span className="text-[.8rem]">{data.singleUserPost.post.retweets*4}</span>
	              </div>
	            </div>
	            </div>
	          </div>
	          
        </div>
		</>
	)
}

export default Post