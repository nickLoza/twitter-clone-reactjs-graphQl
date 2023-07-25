export type PostsType = {
	id: String
	postText: string
	media: string
	likes: number
    retweets: number
}

export type PostsItemsTypes = {
	id: ID
	name: string
	username: string
	profileImg: string
	posts: PostsType[]
}

export type UserItemsType = {
	id: ID!
    name: string
    username: string
    profileImg: string
}