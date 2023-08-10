interface IFDataAchievements {
        id: string,
        title: string,
        credential? : string,
        stack: Array<string>,
        websiteUrl?: string,
        srcThumbnail: string,  
}
function Achievements() {
  const dataAllAchievements : Array<IFDataAchievements> = [
    {
      id: "7",
      title: "React Testing - BuildWithAngga",
      credential : "I742Epv9Gz",
      stack: ["React JS", "RTL", "Jest"],
      websiteUrl: "https://drive.google.com/file/d/1N6aYOOb17hmHXAZ7pA1Bj16Y12RywE3O/view",
      srcThumbnail: "/achievements/certificate-7.png",
    },
    {
      id: "6",
      title: "Fullstack Javascript Developer - BuildWithAngga",
      credential : "XOTBFo4kHR",
      stack: ["React JS", "Bootstrap CSS", "SASS", "Express JS", "MongoDB", "NodeJS"],
      websiteUrl: "https://drive.google.com/file/d/1UaxSwHoCfljkuPtP7waS-VXDLeZsRz38/view",
      srcThumbnail: "/achievements/certificate-6.png",
    },
    {
      id: "2",
      title: "Member Google Developer Studens Club - GDSC ITB",
      credential : "7bc3471a-bf68-4798-8c59-881061723490",
      stack: ["ReactJS", "REST API", "Bootstrap CSS", "TailwindCSS", "ExpressJS", "NodeJS", "MySQL"],
      websiteUrl: "https://drive.google.com/file/d/1_I4hDZvQWqjziFMfNSPX1l5TBGT-E73v/view?usp=drive_link",
      srcThumbnail: "/achievements/certificate-2.png",
    },
    {
      id: "3",
      title: "Bootcamp MERN - BuildWithAngga",
      credential : "-",
      stack: ["React JS", "NEXT JS", "Bootstrap CSS", "TailwindCSS", "ExpressJS", "NodeJS", "MongoDB"],
      websiteUrl: "https://drive.google.com/file/d/1YKap5a5137s8NkV1MlsPdWi_l9NE-xGT/view?usp=drive_link",
      srcThumbnail: "/achievements/certificate-3.png",
    },
    {
      id: "4",
      title: "React Native - Hacktiv8",
      credential : "-",
      stack: ["React JS", "React Native", "Rapid API"],
      websiteUrl: "https://drive.google.com/file/d/1cymiCJ0amrgJi41SZnwVs3mKMiP9zQpm/view?usp=drive_link",
      srcThumbnail: "/achievements/certificate-4.png",
    },
    {
      id: "5",
      title: "Pemrograman Javascript - Dicoding",
      credential : "6RPNDYWM8Z2M",
      stack: ["Javascript"],
      websiteUrl: "https://drive.google.com/file/d/1T_zhoD1amfjDulMeq8IRCLU1Z4weN9JO/view?usp=drive_link",
      srcThumbnail: "/achievements/certificate-5.png",
    },
    {
      id: "8",
      title: "Front-end Pemula - Dicoding",
      credential : "4EXG5M371XRL",
      stack: ["Javascript", "Bootstrap CSS"],
      websiteUrl: "https://drive.google.com/drive/u/0/folders/1E1wtFV5BWmvBQGCGg9NttwHgh7iGmUax",
      srcThumbnail: "/achievements/certificate-8.png",
    },
    {
      id: "1",
      title: "NEXT JS BASIC - BuildWithAngga",
      credential : "kES7Qp6Gid",
      stack: ["NEXT JS"],
      websiteUrl: "https://drive.google.com/file/d/11tvb7WxYCYI6YJh_LewqAxHUyyDikD1-/view?usp=drive_link",
      srcThumbnail: "/achievements/certificate-1.png",
    },
    
    
  ];

  return {dataAllAchievements};
}

export default Achievements;
