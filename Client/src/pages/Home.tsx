import { ChangeEvent, useState } from "react";
import { AiOutlineFileGif, AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { CgOptions } from "react-icons/cg";
import { BsEmojiSmile, BsImage } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { GoComment } from "react-icons/go";
import { BiBarChart } from "react-icons/bi";
import NavigateButtons from "../components/NavigateButtons";
import { useQuery, gql } from '@apollo/client';

import { PostsItemsTypes } from "../modules/types";
import { Link, useNavigate } from "react-router-dom";

const ALL_POSTS = gql`
  query AllPosts {
    allPosts {
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


function Home() {
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState("");

  const { loading, error, data } = useQuery(ALL_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost(e.target.value);
  };

  const handlePostSubmit = () => {
    if (newPost.trim() !== "") {
      setNewPost("");
    }
  };

  function handleOnClickPost(username:String, postId:String){
    navigate(`/post/${username}/${postId}`);
  }
  return (
    <>
      <h2 className="px-6 mb-8 text-2xl font-semibold">Home</h2>

      <NavigateButtons buttons={["For You","Following"]}/>
      <div className="px-8 pb-4 border-gray-600 border-b-[1px]">
        <textarea
          className="w-full  text-xl bg-transparent resize-none outline-none"
          placeholder="What's happening?"
          value={newPost}
          onChange={handleInputChange}
          rows={2}
        />
        <div className="w-full flex items-center justify-between">
          <div className="flex text-2xl gap-x-2 twitter-color">
            <BsImage />
            <AiOutlineFileGif />
            <CgOptions />
            <BsEmojiSmile />
            <MdOutlineLocationOn />
          </div>
          <button
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full mt-2"
            onClick={handlePostSubmit}
          >
            Tweet
          </button>
        </div>
      </div>

      {data.allPosts.map((item:PostsItemsTypes, i:number) => (
        item.posts.length > 0 && 
        <div className="flex mt-4 pb-2 border-gray-600 border-b-[1px]" key={i}>
          <img className="self-start mr-2" src={item.profileImg} alt="account" height={50} width={50}/>
          <div className="mt-2">
            <div className="flex gap-x-2">
              <Link className="font-semibold hover:text-[#1D9BF0]" to={`/profile/${item.username}`}>{item.name}</Link>
              <p className="text-gray-400">@{item.username}</p>
            </div>

            <div 
            onClick={()=>handleOnClickPost(item.username, item.posts[0].id)} 
            className="cursor-pointer">
                <p className="">{item.posts[0].postText}</p>
                {item.posts[0].media && <img className="pt-4 object-cover w-full select-none" src={item.posts[0].media} alt="post image" height={100}/>}
                <div className="flex items-center justify-between w-full text-gray-400 mt-4 pb-2 px-8 select-none">
                  <div className="flex items-center gap-x-1 ">
                    <GoComment className="cursor-pointer hover:text-gray-100"/>
                    <span className="text-[.8rem]">{item.posts[0].retweets*2}</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <AiOutlineRetweet className="cursor-pointer hover:text-gray-100"/>
                  <span className="text-[.8rem]">{item.posts[0].retweets}</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <AiOutlineHeart className="cursor-pointer hover:text-gray-100"/>
                  <span className="text-[.8rem]">{item.posts[0].likes}</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <BiBarChart className="cursor-pointer hover:text-gray-100"/>
                  <span className="text-[.8rem]">{item.posts[0].retweets*4}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      ))}
    </>
  );
}

export default Home;
