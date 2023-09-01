interface IFDataProjects {
    
        id: string,
        title: string,
        description: string,
        stack: Array<string>,
        websiteUrl?: string,
        srcThumbnail: string,
        isFeatured : boolean,
        githubLink? : string,
        
      
}
function Projects() {
  const dataAllProjects : Array<IFDataProjects> = [
    {
      id: "1",
      title: "MovFlix React JS",
      description:
        "This Website is a list of movies that get from the API using Rest API TMDB API. Here you can read, see the rate of the movies, and search the best movies suit to you.",
      stack: ["ReactJS", "TMDB API", "CSS"],
      githubLink : "https://github.com/oriastanjung/GDSCmovflix-react",
      websiteUrl: "https://oriastanjung.github.io/GDSCmovflix-react/",
      srcThumbnail: "/projects/movflix/thumbnail.png",
      isFeatured : false
    },
    {
      id: "2",
      title: "YouTube Clone",
      description:
        "This Website is a clone of YouTube that i learned from watching YouTube Channel : Clever Programming. Its only some interface and only one function that work like Searching (dummy data). Fun fact : This one is actually my first based on learn ReactJS Projects :)",
      stack: ["ReactJS", "CSS"],
      githubLink : "https://github.com/oriastanjung/youtube-clone",
      websiteUrl: "https://oriastanjung.github.io/youtube-clone/",
      srcThumbnail: "/projects/youtube-clone/thumbnail.png",
      isFeatured : false
    },
    {
      id: "3",
      title: "Rivaille - Landing Page",
      description:
        "A Website which i build to complete my course at Dicoding Academy for the final project based on what i learn from the course. It is just simple landing page that the data is just not based on true story :)",
      stack: ["HTML5", "CSS", "Javascript"],
      githubLink : "https://github.com/oriastanjung/rivaille-page",
      websiteUrl: "https://oriastanjung.github.io/rivaille-page/",
      srcThumbnail: "/projects/rivaille/thumbnail.png",
      isFeatured : false
    },
    {
      id: "4",
      title: "Simple Web Calculator",
      description:
        "A Website which i build to complete my course at Dicoding Academy for the final project based on what i learn from the course. It is just simple calculator web using Javascript.",
      stack: ["HTML5", "CSS", "Javascript"],
      githubLink : "https://github.com/oriastanjung/simple-web-calculator",
      websiteUrl: "https://oriastanjung.github.io/simple-web-calculator/",
      srcThumbnail: "/projects/web-calculator/thumbnail.png",
      isFeatured : false
    },
    {
      id: "5",
      title: "College Faculty Page",
      description:
        "A Website which i build to complete my Mid Term project. It is about my College Campus Faculty.",
      stack: ["HTML5", "CSS"],
      githubLink : "https://github.com/oriastanjung/Fakultas-Web-Promotion",
      websiteUrl: "https://oriastanjung.github.io/Fakultas-Web-Promotion/",
      srcThumbnail: "/projects/faculty/thumbnail.png",
      isFeatured : false
    },
    {
      id: "6",
      title: "React Weather",
      description:
        "A Website to check the temperature on some specific city in the world.",
      stack: ["ReactJS", "CSS", "OpenWeather API"],
      githubLink : "https://github.com/oriastanjung/react-weather",
      websiteUrl: "https://oriastanjung.github.io/react-weather/",
      srcThumbnail: "/projects/react-weather/thumbnail.png",
      isFeatured : false
    },
    {
      id: "25",
      title: `ShoeCraft -  Ecommerce App`,
      description:
        "This is Fullstack E-Commerce App build using MERN Stack with TailwindCSS and Material UI for the Dashboard. It Integrated with Midtrans Payment Gateway to handle the transactions. ",
      stack: [
        "ReactJS",
        "CSS",
        "MongoDB",
        "ExpressJS",
        "NodeJS",
        "Sweet Alert",
      ],
      websiteUrl : "https://shoecraft.vercel.app/",
      githubLink : "https://shoecraft.vercel.app/",
      srcThumbnail: "/projects/shoecraft/thumbnail.png",
      isFeatured : true
    },
    {
      id: "7",
      title: "Alvaction - Always Vacation",
      description:
        "This Website is based on my learning course at BuildWithAngga. This Website contain some places to go for vacation.",
      stack: ["ReactJS", "Bootstrap 5"],
      githubLink : "https://github.com/oriastanjung/alvacation",
      websiteUrl: "https://alvacation.vercel.app/",
      srcThumbnail: "/projects/alvacation/thumbnail.png",
      isFeatured : true
    },
    
    {
      id: "10",
      title: "Semina - Event Helder",
      description:
        "Semina Web Apps is web application that i build when i following Bootcamp in 2022 at BuildWithAngga. Semina, is a web based application that give information about Event Availability and User can create account and joining the Event by Checkout the Payment first.",
      stack: [
        "NextJS",
        "ReactJS",
        "Bootstrap 5",
        "MongoDB",
        "ExpressJS",
        "NodeJS",
        "Toastify Alert",
      ],
      githubLink : "https://github.com/oriastanjung/semina-frontend",
      srcThumbnail: "/projects/semina/thumbnail.png",
      isFeatured : true
    },
    {
      id: "11",
      title: "Semina - Admin Page",
      description:
        "Semina Admin is the page created for admin Semina to easily Create, Read, Update and Delete data for Semina. It's build when i following Bootcamp in 2022 at BuildWithAngga.",
      stack: [
        "ReactJS",
        "Bootstrap 5",
        "MongoDB",
        "ExpressJS",
        "NodeJS",
        "Sweet Alert",
      ],
      srcThumbnail: "/projects/semina/thumbnail.png",
      isFeatured : false
    },
    
    {
      id: "13",
      title: "Oriastanjung - Portofolio V1.0",
      description:
        "Website that i build to post my portofolio earlier before this Portofolio V2.0 build :)",
      stack: ["HTML5", "Bootstrap 4", "CSS", "Javascript"],
      githubLink : "https://github.com/oriastanjung/oriastanjung.github.io",
      websiteUrl: "https://oriastanjung.github.io/",
      srcThumbnail: "/projects/portofolioV1/thumbnail.png",
      isFeatured : false
    },
    {
      id: "14",
      title: "SiKilat - Mini Games",
      description:
        "SiKilat is a game about delivery courier arcade. You need to deliver package that taken from warehouse to client which the location generated randomly. This Game is for my Final Project on my Computer Graphics College Course",
      stack: ["Unity Engine", "C#"],
      githubLink: "https://github.com/oriastanjung/tugas-game-grafkom",
      srcThumbnail: "/projects/sikilat/thumbnail.png",
      isFeatured : false
    },
    {
      id: "15",
      title: "Smart Courier",
      description:
        "Smart Courier is a project that simulate how the courier find a way to its package and final location to deliver using Dynamic Programming Approach Algorithm. This project is Final Project for my Design and Analysis Algorithm College Course",
      stack: ["Python", "Pygame"],
      githubLink: "https://github.com/oriastanjung/UAS-PAA",
      srcThumbnail: "/projects/smart-courier/thumbnail.png",
      isFeatured : false
    },
    {
      id: "16",
      title: "Breaking News",
      description:
        "Website that showing the latest and popular news in international",
      stack: ["ReactJS", "Javascript", "Bootstrap 5", "News Org API"],
      githubLink: "https://github.com/oriastanjung/breaking-news",
      srcThumbnail: "/projects/breaking-news/thumbnail.png",
      isFeatured : true
    },
    {
      id: "17",
      title: "Bukapedia",
      description:
        "Simple E-Commerce Website that using fakestore data to sell and buy products",
      stack: ["ReactJS", "Javascript", "Tailwind CSS", "Fake Store API"],
      githubLink : "https://github.com/oriastanjung/bukapedia",
      websiteUrl: "https://bukapedia-orias.netlify.app/",
      srcThumbnail: "/projects/bukapedia/thumbnail.png",
      isFeatured : true
    },
    
    {
      id: "19",
      title: "Rivies Movie Apps",
      description:
        "Web Apps that showing latest movies and popular movies, and you even can watch the movies free",
      stack: ["ReactJS", "Javascript", "Bootstrap 5", "TMDB API"],
      githubLink : "https://github.com/oriastanjung/rivies",
      websiteUrl: "https://rivies.vercel.app/",
      srcThumbnail: "/projects/rivies/thumbnail.png",
      isFeatured : true
    },
    {
      id: "20",
      title: "Sicerdik",
      description:
        "Web Apps that used to make student movement to other school easier and more effective",
      stack: [
        "ReactJS",
        "Javascript",
        "Bootstrap 5",
        "MongoDB",
        "ExpressJS",
        "PDFTron",
      ],
      srcThumbnail: "/projects/sicerdik/thumbnail.png",
      isFeatured : false
    },
    {
      id: "21",
      title: "Furniture Landing Page",
      description:
        "Web development of Furniture Landing Page in collaboration with UIX Designer - Rezi Afrialdi for building the website using ReactJS and TailwindCSS.",
      stack: [
        "ReactJS",
        "TailwindCSS",
      ],
      githubLink : "https://github.com/oriastanjung/furniture-landing-page",
      websiteUrl: "https://furniture-landing-page-ori.vercel.app/",
      srcThumbnail: "/projects/furniture/thumbnail.png",
      isFeatured : true
    },
    
    {
      id: "23",
      title: "Moneyout - Recording monthly expenses",
      description:"Simple web application for recording monthly expenses built in ReactJS,Redux Toolkit and TailwindCSS",
      stack: [
        "ReactJS",
        "Redux Toolkit",
        "Tailwind CSS"
      ],
      githubLink : "https://github.com/oriastanjung/moneyout",
      websiteUrl: "https://moneyout.vercel.app/",
      srcThumbnail: "/projects/moneyout/thumbnail.jpg",
      isFeatured : true
    },
    {
      id: "24",
      title: "Luxspace - Furniture App",
      description:"Development of Web Applications and implementation of Progressive Web Apps using ReactJS and TailwindCSS from BuildWith Angga course.",
      stack: [
        "ReactJS",
        "Progressive Web Apps",
        "Tailwind CSS"
      ],
      githubLink : "https://github.com/oriastanjung/luxspace_bwa",
      websiteUrl: "https://luxspace-bwa-cyan.vercel.app/",
      srcThumbnail: "/projects/luxspace/thumbnail.png",
      isFeatured : true
    },
    {
        id: "18",
        title: "Hotel Reservation App",
        description:
          "Mobile App to search and booking hotels that have in Indonesia or Global Country.",
        stack: ["ReactJS", "Javascript", "Priceline-Provider API"],
        githubLink: "https://github.com/oriastanjung/hotel-reservation-app.git",
        srcThumbnail: "/projects/hotel-reservation-app/thumbnail.png",
        isFeatured : false
      },
      
      {
        id: "22",
        title: "Serenity - Jakarta Recommendation Place App",
        description:"An application for recommending interesting places in Jakarta build with my team.",
        stack: [
          "Flutter",
          "MongoDB",
          "ExpressJS"
        ],
        githubLink: "https://github.com/oriastanjung/serenity_app",
        srcThumbnail: "/projects/serenity/thumbnail.jpeg",
        isFeatured : false
      },
      {
        id: "12",
        title: "Resto",
        description:
          "Website i build to following the challenge from BuildWithAngga",
        stack: ["HTML5", "Bootstrap 5"],
        githubLink : "https://github.com/oriastanjung/bwa-challenge",
        websiteUrl: "https://oriastanjung.github.io/bwa-challenge/",
        srcThumbnail: "/projects/resto/thumbnail.png",
        isFeatured : false
      },
      {
        id: "8",
        title: "Simple Food Order",
        description:
          "This Website is based on my learning course at Udemy. This Website build for me to remember ReactJS again cause i kinda always forgot when im into some other projects. It using React Hooks such as useState, useEffect, useReducer and useRef.",
        stack: ["ReactJS", "CSS"],
        githubLink : "https://github.com/oriastanjung/simple-food-order",
        websiteUrl: "https://oriastanjung.github.io/simple-food-order/",
        srcThumbnail: "/projects/simple-food-order/thumbnail.png",
        isFeatured : false
      },
      {
        id: "9",
        title: "Just Do It",
        description:
          "This is Todo List Fullstack App using MERN Tech. I Created this project for testing my experience on MERN after Bootcamp MERN a while ago. Sorry, if its a simple app but made complicatedly :)",
        stack: [
          "ReactJS",
          "CSS",
          "MongoDB",
          "ExpressJS",
          "NodeJS",
          "Sweet Alert",
        ],
        githubLink : "https://github.com/oriastanjung/just-do-it",
        srcThumbnail: "/projects/just-do-it/thumbnail.png",
        isFeatured : false
      },
      
  ];
  const dataProjectsLandingPage : Array<IFDataProjects> = [...dataAllProjects].reverse().slice(0,6)
  const featuredProjects : Array<IFDataProjects> = [...dataAllProjects].filter((item) => item.isFeatured === true)

  return {dataAllProjects, dataProjectsLandingPage, featuredProjects};
}

export default Projects;
