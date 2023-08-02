import imgReact from "../../assets/stacks/reactjs.png";
import imgNextJS from "../../assets/stacks/nextjs.png";
import imgTailwind from "../../assets/stacks/tailwindcss.png";
import imgBootstrap from "../../assets/stacks/bootstrapcss.png";
import imgSASS from "../../assets/stacks/sass.png";
import imgJest from "../../assets/stacks/jest.png";
import imgRTL from "../../assets/stacks/rtl.png";
import imgRedux from "../../assets/stacks/redux.png";
import imgTypescript from "../../assets/stacks/typescript.png";
import imgNodejs from "../../assets/stacks/nodejs.png";
import imgExpressjs from "../../assets/stacks/expressjs.png";
import imgMongoose from "../../assets/stacks/mongoose.png";
import imgSequelize from "../../assets/stacks/sequelize.png";
import imgRest from "../../assets/stacks/rest.png";
import imgMysql from "../../assets/stacks/mysql.png";
import imgMongodb from "../../assets/stacks/mongodb.png";
import imgFirebase from "../../assets/stacks/firebase.png";

interface IFstacks{
  title : string,
  img : string
}

function Stacks() {
  const frontend : Array<IFstacks> = [
    {
      title : "ReactJS",
      img : imgReact,
    },
    {
      title : "NextJS",
      img : imgNextJS,
    },
    {
      title : "TailwindCSS",
      img : imgTailwind,
    },
    {
      title : "BootstrapCSS",
      img : imgBootstrap,
    },
    {
      title : "SASS",
      img : imgSASS,
    },
    {
      title : "Jest",
      img : imgJest,
    },
    {
      title : "React Testing Library",
      img : imgRTL,
    },
    {
      title : "Redux",
      img : imgRedux,
    },
    {
      title : "Typescript",
      img : imgTypescript,
    },
  ];

  const backend : Array<IFstacks> = [
    {
      title : "NodeJS",
      img : imgNodejs,
    },
    {
      title : "ExpressJS",
      img : imgExpressjs,
    },
    {
      title : "Mongoose ORM",
      img : imgMongoose,
    },
    {
      title : "Sequelize ORM",
      img : imgSequelize,
    },
    {
      title : "REST API",
      img : imgRest,
    }
  ];
  
  const database : Array<IFstacks> = [
    {
      title : "MySQL",
      img : imgMysql,
    },
    {
      title : "MongoDB",
      img : imgMongodb,
    },
    {
      title : "Firebase",
      img : imgFirebase,
    }
  ];

  return {
    frontend,
    backend,
    database
  };
}

export default Stacks;
