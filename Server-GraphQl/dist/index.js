import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { v4 as uuidv4 } from 'uuid';
const users = [
    {
        id: "1",
        name: "Nick Loza",
        username: "NickLozaDev",
        profileImg: "https://robohash.org/johnsmith",
        description: "Frontend Developer - REACT / Next.JS / JS / TYPESCRIPT / SASS / Tailwind CSS / Node.js - Español, Ingles e Italiano*",
        following: 20,
        followers: 120,
        country: "Argentina",
        posts: [
            {
                id: "1",
                postText: "Had a great time at the beach today! 🏖️ The weather was perfect, and I enjoyed swimming in the ocean. #BeachDay",
                media: "https://substackcdn.com/image/fetch/w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F200987b3-bf71-4994-b1a4-15fff5f7c849_480x269.gif",
                likes: 76,
                retweets: 5
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Emily Williams",
        username: "emilyw",
        profileImg: "https://robohash.org/emilyw",
        description: "Tech enthusiast | Coffee lover ☕️ | Exploring the digital realm 🌐 | Obsessed with all things innovation and gadgets 🚀 | #TechGeek",
        following: 540,
        followers: 120,
        country: "Canada",
        posts: [
            {
                id: uuidv4(),
                postText: "Trying out new recipes in the kitchen today! 🍳 Cooking is so much fun, and the food turned out delicious. #ChefLife",
                media: "https://media.photographycourse.net/wp-content/uploads/2022/04/08160610/geroldsee-philipslotte.jpg",
                likes: 34,
                retweets: 1
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Michael Johnson",
        username: "michaelj",
        profileImg: "https://robohash.org/michaelj",
        description: "Bookworm 📚 | Travel addict ✈️ | Passionate about photography 📷 | Capturing moments and stories | Wanderer at heart 🌍 | #BookTraveler",
        following: 990,
        followers: 1200,
        country: "England",
        posts: [
            {
                id: uuidv4(),
                postText: "Just finished a challenging workout at the gym! 💪 Feeling energized and ready to take on the day! #FitnessGoals",
                likes: 45,
                retweets: 3
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Sophia Anderson",
        username: "sophiaa",
        profileImg: "https://robohash.org/sophiaa",
        description: "Foodie at heart 🍔 | Culinary adventurer 🍜 | Cooking is my therapy 🧁 | Seeking the best food spots around the globe 🌮 | #FoodExplorer",
        following: 220,
        followers: 312,
        country: "Ireland",
        posts: [
            {
                id: uuidv4(),
                postText: "Enjoying a quiet evening with a good book and a cup of tea! 📚🍵 Reading is my favorite way to unwind. #BookLover",
                likes: 67,
                retweets: 8
            }
        ]
    },
    {
        id: uuidv4(),
        name: "James Lee",
        username: "jamesl",
        profileImg: "https://robohash.org/jamesl",
        description: "Fitness freak 💪 | Health is wealth 🥦 | Chasing endorphins and setting new records 🏋️‍♂️ | Inspiring others to embrace an active lifestyle 🏃‍♀️ | #FitLife",
        following: 240,
        followers: 170,
        country: "Argentina",
        posts: [
            {
                id: uuidv4(),
                postText: "Excited for the concert tonight! 🎵🎤 Music always brings people together and creates amazing memories. #ConcertVibes",
                likes: 98,
                retweets: 12
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Olivia Brown",
        username: "oliviab",
        profileImg: "https://robohash.org/oliviab",
        description: "Art lover 🎨 | Creativity is my fuel 🔥 | Painting the world with colors and imagination 🌈 | Sharing my artistic journey 🖌 | #ArtisticSoul",
        following: 4420,
        followers: 12120,
        country: "Chile",
        posts: [
            {
                id: uuidv4(),
                postText: "Spent the day exploring museums and art galleries! 🖼️ It's incredible to see so much creativity in one place. #ArtAppreciation",
                likes: 55,
                retweets: 2
            }
        ]
    },
    {
        id: uuidv4(),
        name: "William Davis",
        username: "williamd",
        profileImg: "https://robohash.org/williamd",
        description: "Nature enthusiast 🌿 | Environmental advocate 🌍 | Exploring the wilderness and promoting sustainable living 🌱 | #NatureLover",
        following: 3220,
        followers: 5888,
        country: "Uruguay",
        posts: [
            {
                id: uuidv4(),
                postText: "Enjoying a bike ride through the park! 🚲 The weather is perfect, and it's a great way to stay active. #NatureRide",
                likes: 87,
                retweets: 7
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Ava Wilson",
        username: "avaw",
        profileImg: "https://robohash.org/avaw",
        description: "Movie buff 🎬 | Cinema is my escape 🍿 | Reviewing the latest flicks and hidden gems 🎥 | Join me on my cinematic journey! 🎞 | #FilmAddict",
        following: 541,
        followers: 120,
        country: "Brazil",
        posts: [
            {
                id: uuidv4(),
                postText: "Spent the afternoon volunteering at the animal shelter! 🐾 It warms my heart to see these furry friends finding loving homes. #AdoptDontShop",
                likes: 43,
                retweets: 3
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Ethan Taylor",
        username: "ethant",
        profileImg: "https://robohash.org/ethant",
        description: "Fashionista 👠 | Style is a way of expressing myself 💃 | Curating trendy outfits and fashion tips 💄 | #FashionForward",
        following: 10,
        followers: 6444,
        country: "Japan",
        posts: [
            {
                id: uuidv4(),
                postText: "Finally mastered the guitar solo I've been practicing! 🎸 It took time and effort, but it was worth it. #MusicAchievement",
                likes: 63,
                retweets: 9
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Emma Harris",
        username: "emmah",
        profileImg: "https://robohash.org/emmah",
        description: "Animal lover 🐾 | Advocate for furry friends 🐶 | Fostering and adopting pets to find their forever homes 🏠 | #AnimalRights",
        following: 188,
        followers: 1270,
        country: "South Korea",
        posts: [
            {
                id: uuidv4(),
                postText: "Visited a beautiful flower garden today! 🌼🌺 Nature's colors never fail to amaze me. #NatureBeauty",
                likes: 58,
                retweets: 4
            }
        ]
    }
];
const typeDefs = `
  type Post {
    id: ID!
    postText: String!
    media: String
    likes: Int!
    retweets: Int!
  }

  type User {
    id: ID!
    name: String!
    username: String!
    profileImg: String!
  }

  type UserPosts {
    id: ID!
    name: String!
    username: String!
    profileImg: String!
    posts: [Post]
  }

  type UserProfile {
    id: ID!
    name: String!
    username: String!
    profileImg: String!
    description: String!
    country: String!
    following: Int!
    followers: Int!
    posts: [Post]
  }

  type SinglePost {
    id: ID!
    name: String!
    username: String!
    profileImg: String!
    post: Post
  }

  type Query {
    allUsers: [User]!
    allPosts: [UserPosts]!
    user(id:ID!): User
    userProfile(username:String!): [UserProfile]
    singleUserPost(username:String!, postId:ID!): SinglePost
  }
`;
const resolvers = {
    Query: {
        allUsers: () => users,
        allPosts: () => users.map(({ id, name, username, profileImg, posts }) => ({
            id, name, username, profileImg, posts
        })),
        user: (parent, args) => users.find((user) => user.id === args.id),
        userProfile: (parent, args) => {
            const user = users.find((user) => user.username === args.username);
            if (user) {
                return [user]; // Wrap the user object inside an array and return it
            }
            return []; // Return an empty array if the user is not found
        },
        singleUserPost: (parent, args) => {
            const user = users.find((user) => user.username === args.username);
            if (user) {
                const post = user.posts.find((post) => post.id === args.postId);
                return {
                    ...user,
                    post
                } || null; // Return the post if found, otherwise return null
            }
            return null; // Return null if the user is not found
        },
    }
};
const server = new ApolloServer({
    typeDefs, resolvers
});
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
const { url } = await startStandaloneServer(server, {
    listen: { port }
});
console.log(`Server ready at: ${url}`);
