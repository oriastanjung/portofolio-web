export interface IFexperienceData {
    id: number,
    position : string,
    company : string,
    description : string,
    startDate : string,
    endDate : string,
    keypoint : Array<string>,
}
function useExperience() {
  const experienceData : Array<IFexperienceData>= [
    {
        id: 1,
      position: "Bootcamp Fullstack MERN Developer",
      company: "BuildWithAngga",
      description:
        "I joined Bootcamp for Fullstack MERN Developer from BuildWithAngga Program, where in this Bootcamp I learned on ReactJS, NextJS, MongoDB, ExpressJS, and NodeJS. I finished the Bootcamp with the result of Fullstack web apps using MERN Tech.",
      startDate: "January 2022",
      endDate: "April 2022",
      keypoint: [
        "Improving ReactJS skills with MERN Technologies",
        "Manage to build Fullstack App",
      ],
      
    },
    {
        id: 2,
      position: "Fullstack Developer",
      company: "Dinas Pendidikan Kota Tanjungpinang",
      description:
        "Dinas Pendidikan Kota Tanjungpinang previously need Developers Team to work to build apps for helping student when moving to a new school or another school",
      startDate: "October 2022",
      endDate: "December 2022",
      keypoint: [
        "I successfully build 2 Web Apps such as Frontend Web Apps for School and Dinas Pendidikan Kota Tanjungpinang",
        "Help to build Backend API on the Backend side with more than 50% feature on this Backend Side",
        "Integrating Frontend and API build from Backend Team",
      ],
      
    },
    {
        id:3,
      position: "Frontend ReactJS Developer - Studi Independen MSIB",
      company: "PT Hackitvate Teknologi Indonesia (Hacktiv8)",
      description:
        "I joined one of the MBKM Kampus Merdeka programs which is Studi Independen from Hacktiv8 with the program path of React and React Native for Frontend Developer. Here I managed to finish all my courses and Final Projects that help me to improve my skills in Frontend Developer such as ReactJS, Redux, Bootstrap, TailwindCSS, and of course it included Fetching Data from API.",
      startDate: "August 2022",
      endDate: "December 2022",
      keypoint: [
        "Successfully Built 4 Projects with the newest tech such as ReactJS, RapidAPI, and CSS Library with a rate of completion project 100%",
        "Improving Hard and Soft Skills such as Teamwork, Communication, Analytics Problem, Problem Solving, and Collaboration",
      ],
     
    },
    {
        id:4,
      position: "Web Developer and Administrator Intern",
      company: "Maritim Muda Nusantara",
      description:
        "Maritim Muda Nusantara is an organization or association that focuses on the development of the potential and abilities of the youth in the maritime field.",
      startDate: "February 2023",
      endDate: "July 2023",
      keypoint: [
        "Improving the website and web apps of Hub Maritim Muda, Geoparksyouth, and The Blue Economist",
        "Being an administrator in web apps to publish post for almost 25 posts",
        "Successfully Build new apps for Maritim Muda Nusantara, the web app is called The Blue Economist",
        "Successfully Integrating REST API to The Blue Economist",
      ],
      
    },
  ];
  return {
    experienceData
  };
}

export default useExperience;
