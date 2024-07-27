// Array containing some light-hearted jokes with authors
const jokesArray = [
    {
        "joke": "Why don't scientists trust atoms? Because they make up everything!",
       
        "author": "Anonymous"
    },
    {
        "joke": "Atheism is a non-prophet organization.",

        "author": "CNN Dad Joke Generator"
    },
    {
        "joke": "Why can't a bicycle stand on its own? It's two-tired.",

        "author": "CNN Dad Joke Generator"
    },
    {
        "joke": "Why can't a bicycle stand on its own? It's two-tired.",

        "author": "CNN Dad Joke Generator"
    },
    {
        "joke": "To the guy who invented zero: Thanks for nothing!",

        "author": "CNN Dad Joke Generator"
    },
    {
        "joke": "Why can't you play poker on the African Savanna? There's too many cheetahs.",

        "author": "CNN Dad Joke Generator"
    },
    {
        "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
        
        "author": "John Doe"
    },
    {
        "joke": "What do you call fake spaghetti? An Impasta!",
        
        "author": "Jane Smith"
    },
    {
        "joke": "Why was the math book sad? Because it had too many problems.",
        
        "author": "Math Enthusiast"
    },
    {
        "joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        
        "author": "Golf Lover"
    },
    {
        "joke": "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
       
        "author": "Farm Fanatic"
    },
    {
        "joke": "What do you get when you cross a vampire and a snowman? Frostbite.",
        
        "author": "Monster Mixer"
    },
    {
        "joke": "How do you organize a space party? You planet.",
     
        "author": "Space Enthusiast"
    },
    {
        "joke": "Why did the bicycle fall over? Because it was two-tired!",
        
        "author": "Bike Rider"
    },
    {
        "joke": "What do you call a bear with no teeth? A gummy bear!",
       
        "author": "Nature Lover"
    }
];

function getRandomJoke() {
	const randomIndex = Math.floor(Math.random() * jokesArray.length);
	const joke = jokesArray[randomIndex];
	document.getElementById('joke-text').innerText = joke.joke;
	document.getElementById('joke-author').innerText = joke.author;
}

document.addEventListener('DOMContentLoaded', () => {
    getRandomJoke();

    document.getElementById('joke-button').addEventListener('click', getRandomJoke);
});