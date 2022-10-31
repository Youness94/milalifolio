import self from "../img/self.png"
import ladies from "../img/ladies.png"
import alaiqan from "../img/alaiqan.png"
import amazone from "../img/amazone.png"
import vegefoods from "../img/vegefoods.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Milali",
    lastName: "Youness",
    initials: "web", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Morocco'
        },
        {
            emoji: "💼",
            text: "I works for kitea group"
        },
        {
            emoji: "📧",
            text: "younesmilali@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Youness94",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "linkedin.com/in/milali-youness-a32887149",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Milali. I'm a Full Stack Developer with 2+ years of experience in designing and developing user interfaces, testing, debugging, and training in eCommerce technologies. You should hire me!",
    skills:
        {
            proficientWith: ['Javascript', 'React', 'bootstrap', 'Html5', 'Css3', 'Responsive Design'],
            exposedTo: ['Nodejs','PHP','Laravel', 'Express Js',  'Github', 'Wordpress', 'MongoDB' ]
        }
    ,
    services:{},
    hobbies: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Fishing',
            emoji: '🎣'
        },
        {
            label: 'Hunting',
            emoji: '🏹'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Learning',
            emoji: '💡'
        },
        
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Ecommerce Shop",
            live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source:"https://github.com/Youness94/ecommerce-web", // this should be a link to the **repository** of the project, where the code is hosted.
            image: ladies
        },
        {
            title: "Al-aiqan Shop",
            live: "https://al-aiqan.com/",
            source: "https://al-aiqan.com/",
            image: alaiqan
        },
       
        {
            title: "VEGEFOODS",
            live: "",
            source: "https://github.com/Youness94/ShoppingCart-backend",
            image: vegefoods
        },
        {
            title: "Amazone clone",
            live: "",
            source: "https://github.com/Youness94/amazone-clone" ,
            image: amazone
        },
        // {
        //     title: "Project 5",
        //     live: "h",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}