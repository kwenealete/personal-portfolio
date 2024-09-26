import projImg1 from "../assets/img/20mini.png";
import projImg2 from "../assets/img/foodRecipe.png";
import projImg3 from "../assets/img/myportfolio.png";
import projImg4 from "../assets/img/weather.png";
import projImg5 from "../assets/img/shopping.png";
import projImg6 from "../assets/img/sickfits.png";
import projImg7 from "../assets/img/expenseTracker.png";
import projImg8 from "../assets/img/blogApp.png";

export const projects = [
  {
    title: "Personal Portfolio",
    description: "First iteration of my personal website.",
    srcCode: "https://github.com/kwenealete/personal-portfolio",
    imgUrl: projImg3,
    tools: "ReactJS ,Bootstrap, CSS, Nodemailer, Express, animate.css",
  },
  {
    title: "Food Recipe App",
    description: "A food app displaying recipes for various meals/food/drinks.",
    srcCode: "https://github.com/kwenealete/FoodRecipes",
    imgUrl: projImg2,
    tools: 'ReactJS ,Tailwindcss'
  },
  {
    title: "20-React-mini-Apps",
    description:
      "A collection of 20 mini apps showcasing diferrent functionalities within web development",
    srcCode: "https://github.com/kwenealete/20-reactjs-projects",
    imgUrl: projImg1,
    tools: 'ReactJS'
  },
  {
    title: "Weather App",
    description:
      "Made a little app to permit one get real instant knowledge about any location's weather condtions.",
    srcCode: "https://github.com/kwenealete/WeatherApp",
    imgUrl: projImg4,
    tools: 'ReactJS'
  },
  {
    title: "React-Redux Store App",
    description: "A functional online store for commercial purpose.",
    srcCode: "https://github.com/kwenealete/online-react-redux-shopping-store",
    imgUrl: projImg5,
    tools: 'ReactJS, Redux, Tailwindcss'
  },
  {
    title: "Online Shop",
    description:
      "Just another E-commerce site, enabling not just sale but robust to enough with authentication on various fronts.",
    srcCode: "https://github.com/kwenealete/React-Webstore",
    imgUrl: projImg6,
    tools: ' ReactJS, KeystoneJS, NodeJS, GrpahQL, Apollo/Client, Jest, Styled components'
  },
  {
    title: "Expense Tracker",
    description:
      "Keeping track of our expenses is a real issue, So I built this app to help us track how our finances is spent.",
    srcCode: "https://github.com/kwenealete/expense-tracker-react-app",
    imgUrl: projImg7,
    tools: 'ReactJS, Chakra/UI, React-Apexcharts'
  },
  {
    title: "Blog App",
    description: "A fully full-stack app for blogging.",
    srcCode: "https://github.com/kwenealete/blog-post-mern-stack-app",
    imgUrl: projImg8,
    tools: 'ReactJS, NodeJS, Axios, MongoDB, Express, Nodemon'
  },
];
