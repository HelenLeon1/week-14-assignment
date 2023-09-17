import ffpicture from "./fast-and-furious.jpg"
import avatarPicture from "./avatar1.jpg"
import pandaPicture from "./kung-fu-panda.jpg"

export const movies = [
    {
        id: 0,
        reviews: [{
            username: 'carlover58',
            rating: 4,
            review: 'Full of great action scenes and the cast is phenomenal!'
        },
        {
            username: 'susyCallahan',
            rating: 5,
            review: 'I love this movie! Great plot',
        }],
        movieName: "The Fast and the Furious",
        image: ffpicture, 
        summary: `Follow Brian O'Connor, an undercover cop as he is inflitrated into a a secret organization of street racers 
        to put an end to their hijacking schemes. But as he learns more about who they are and creates a strong bond with Dominic Torretto, the leader,
        and his sister Mia, with whom he falls in love with, he is unsure if he is willing to give in his new friends.`, 
    },
    {
        id: 1,
        reviews: [
            {
                username: 'HannahS',
                rating: 5,
                review: 'The effects in this movie are incredible! They are like nothing I have ever seen before'
            },
            {
                username: 'Owen',
                rating: 3,
                review: 'It was good but I did not like the characters that much. They were not memorable',
            }
        ],
        movieName: "Avatar",
        image: avatarPicture, 
        summary: `Welcome to the World of Pandora, the home of the Na'vi people. Humans have been mining in Pandora to steal natural resources
        from the native people. In order to be successful in their scheme, they send an ex Us marine who has become paraplegic in an "Avatar" 
        to infiltrate him into a Navi tribe. But once he learns about the destruction of their planet, he is determined to defend them.`, 
    }, 
    {
        id: 3,
        reviews: [{
            username: 'Andrea12',
            rating: 5,
            review: 'My favorite childhood movie. It makes me fele nostalgic everytime I see it and its so funny. Definately go watch it if you want a laugh!'
        },
        {
            username: 'AlejandraT58',
            rating: 5,
            review: 'My kids love this movie. I never get tired of the jokes and the message and story are great for anyone of any age.',
        }],
        movieName: "Kung Fu Panda",
        image: pandaPicture, 
        summary: `Follow Po's journey after unexpectedly becoming the chosen one to become a Kung Fu master. Despite much criticism and many 
        physical obstacles to success, Po is able to create his own unique style of Kung Fu and defies all odds in order to defeat the enemy 
        Tai Lung with the guidance of master Shi Fu and his new friends.`, 
    }
]


