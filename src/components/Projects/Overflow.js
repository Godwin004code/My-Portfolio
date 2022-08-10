import Image from "../../Assets/unique.png"
import Image2 from "../../Assets/mes.png" 
import Image3 from "../../Assets/Screenshot 2022-04-09 204900.png" 
import Image7 from "../../Assets/Screenshot 2022-07-04 064520.png"
import Image5 from "../../Assets/Screensht 2022-04-11 145729.png"
import Image6 from "../../Assets/Screenshot 2022-04-13 032228.png"
import Image8 from "../../Assets/Screenshot 2022-07-04 062900.png"
import Image9 from "../../Assets/Screenshot 2022-07-08 123138.png"
import { FaJsSquare, FaHtml5, FaCss3, FaReact, FaSass } from "react-icons/fa"
import { SiMaterialui, SiTailwindcss, SiNextdotjs, SiVuedotjs } from "react-icons/si"

export const ProjectStack = [
    {
        id: 1,
        img: Image,
        stack1: <FaReact style={{color: '#5ed4f4'}} />,
        stack2: <SiMaterialui style={{color: 'blue'}} />,
        net: "https://godwinme.netlify.app",
        git: "https://github.com/Godwin004code/My-Portfolio",
        des: 'My portfolio website, built with React.js, email.js for sending me message that will deliver in my inbox.'
    },
    {
        id: 2,
        img: Image2,
        stack1:  <FaHtml5 style={{color: '#f06529'}} />,
        stack2: <FaCss3 style={{color: '#2ba4d9'}} />,
        stack3: <FaJsSquare style={{color: '#efd81d'}} />,
        net: "https://godwin-messenger.netlify.app/",
        git: "https://github.com/Godwin004code/godwin-messenger",
        des: 'A messenger website I made sometimes ago while testing how to use SMTP js'
    },
    {
        id: 3,
        img: Image8,
        stack1: <SiNextdotjs style={{color: '#000'}} />,
        stack2: <FaCss3 style={{color: '#2ba4d9'}} />,
        net: "https://devilon.online",
        git: "https://github.com/personal-blog",
        des: "A full stack blog made with Next.js(Front-end), Strapi(backend) and Cloudinary for picture hosting. It's a progressive web app, though service workers is not currently supported by iOS. The notification is powered with one signal API."
    },
    {
        id: 4,
        img: Image3,
        stack1:  <FaHtml5 style={{color: '#f06529'}} />,
        stack2: <FaCss3 style={{color: '#2ba4d9'}} />,
        stack3: <FaJsSquare style={{color: '#efd81d'}} />,
        net: "https://c2t-quote-generator.netlify.app",
        git: "https://github.com/Godwin004code/quote-gen",
        des: "Quote generator made with Vanilla JS where you decide to get the number of quotes you want and it will be generated. You get the quote and the author's name plus a befitting picture."
    },
    {
        id: 5,
        img: Image5,
        stack1: <FaReact style={{color: '#5ed4f4'}} />,
        stack2: <FaSass style={{color: '#c69'}} />,
        net: "https://sharper.netlify.app",
        git: "https://github.com/Godwin004code/Cloubayy",
        des: 'A progressive web app where you search for different picture titles and get your result, I implemented pixabay API for the pictures.'
    },
    {
        id: 6,
        img: Image6,
        stack1: <FaReact style={{color: '#5ed4f4'}} />,
        stack2: <SiMaterialui style={{color: 'blue'}} />,
        net: "https://fasterr.netlify.app",
        git: "https://github.com/Godwin004code/Landing-page",
        des: 'I implemented a design I saw online, all pages and links are working. I designed the login and signup myself.'
    },
    {
        id: 7,
        img: Image7,
        stack1: <FaHtml5 style={{color: '#f06529'}} />,
        stack2: <FaCss3 style={{color: '#2ba4d9'}} />,
        stack3: <FaJsSquare style={{color: '#efd81d'}} />,
        net: "https://stutern-page.netlify.app/",
        git: "https://github.com/Godwin004code/Landing-page",
        des: 'I cloned Stutern home page in this project. Nothing crazy here'
    },
    {
        id: 8,
        img: Image9,
        stack1: <SiVuedotjs style={{color: '#42b883'}} />,
        stack2: <SiTailwindcss style={{color: '#5ed4f4'}} />,
        net: "https://stutern-page.netlify.app/",
        git: "https://github.com/Godwin004code/Landing-page",
        des: 'This is a real estate website where you can order,sell and so on. Still under building.'
    },
  
]