interface BeneficiaryItems {
  organisation: string; // Name of Beneficiary
  image: string; // Their Image or Logo
}

interface OrgCommItems {
  name: string; // Name of Org Comm
  role: string; // Role of Org Comm
  image: string; // Image of Org Comm
}

interface ProjectItems {
  name: string; // Website Name
  mentee: string; // Mentee Name
  mentor: string; // Mentor Name
  url: string; // URL of website
  thumbnail: string; // Thumbnail of website (screenshot of landing)
}

interface YearMap {
  [year: string]: {
    description: string;
    beneficiaries: Array<BeneficiaryItems>;
    orgComm: Array<OrgCommItems>;
    projects: Array<ProjectItems>;
  };
}

const yearData: YearMap = {
  "2021": {
    description:
      "HeartCode 2021 was the fifth iteration of Project HeartCode led by Tian Le and Shao Hong. Due to COVID-19, the run continued to remain virtual, focusing on the same segments as the previous year - Digital Content Creation and Web Development",
    beneficiaries: [
      {
        organisation: "Chinese Development Assistance Council (CDAC)",
        image: "CDAC.png",
      },
    ],
    orgComm: [
      {
        name: "Cheow Tian Le",
        role: "Project Lead",
        image: "tianle.jpg",
      },
      {
        name: "Gan Shao Hong",
        role: "Project Co-lead",
        image: "shaohong.jpg",
      },
      {
        name: "Esther Teo",
        role: "Trainer (Digital Content Creation)",
        image: "esther.jpg",
      },
      {
        name: "Han Xing Jian",
        role: "Trainer (Web Development)",
        image: "xingjian.jpg",
      },
      {
        name: "Lee Shuoan",
        role: "Service Learning",
        image: "Shuoan.jpg",
      },
      {
        name: "Ow Ling Jia",
        role: "Marketing",
        image: "lingjia.jpg",
      },
      {
        name: "Yu Meng Ting",
        role: "Marketing",
        image: "Mengting.jpg",
      },
      {
        name: "Reyna Yeo",
        role: "Operations/Finance",
        image: "reyna.jpg",
      },
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "sean.jpeg",
      },
    ],
    projects: [
      {
        name: "Website Name",
        mentee: "Pek Feng Yuan Jack",
        mentor: "Tan Yi Peng",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Dennis How Ming Xuan",
        mentor: "Sylvia Goh",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Ho Zhi Yi Ashley",
        mentor: "Euodia Tan",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Johnathan Lim Zhi Wei",
        mentor: "Lim Dao Yong",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Jermaine Neo Tiong Mui",
        mentor: "Toh Xuan Lei Jess",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Fan Ming Yin",
        mentor: "Charis Chin",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Yee Cheng Fai",
        mentor: "Wong Jie Peng",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Li Peixian, Bernice",
        mentor: "Lim Yin Shan",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Seem Yong En",
        mentor: "James Teo Jun Hao",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Lee Wen Jing Larisa",
        mentor: "Rose Lin",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Lim Fu Jie",
        mentor: "Too Min Jay",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Isaac Ong Kay Chun",
        mentor: "Rusydiah Binte Rosle",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Ang Pei Xian",
        mentor: "Lau Wei Yang Jeffery",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Toh Ming Zhen",
        mentor: "Teh Xue Er",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Rain Tan Yin",
        mentor: "Caslyn Phang Yun Shan",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Pei Joon Yi",
        mentor: "Jerome Goh",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Pang Chi Ling",
        mentor: "Louise Angeline Christie",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Tan Yong Sheng",
        mentor: "Paul Soh Wei Jie",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Goh Si Ying",
        mentor: "Phoenikelly Yong Wai Yun",
        url: "",
        thumbnail: "placeholder.png",
      },
            {
        name: "Website Name",
        mentee: "Leong Song Hui",
        mentor: "Ong Guang Qi",
        url: "",
        thumbnail: "placeholder.png",
      },
    ],
  },
  "2020": {
    description:
      "HeartCode 2020 was the fourth iteration of Project Heartcode, led by Lance Fu and Alvin Ang. Due to COVID-19, it was converted to a virtual run, focusing on Digital Content Creation and Web Development",
    beneficiaries: [
      {
        organisation: "Chinese Development Assistance Council (CDAC)",
        image: "CDAC.png",
      },
    ],
    orgComm: [
      {
        name: "Lance Fu",
        role: "Project Lead",
        image: "LanceFu.jpg",
      },
      {
        name: "Alvin Ang",
        role: "Project Co-lead",
        image: "AlvinAng.jpg",
      },
      {
        name: "Alyssa Siow",
        role: "Trainer (Digital Content Creation)",
        image: "AlyssaSiow.jpg",
      },
      {
        name: "Loh Fu Xing",
        role: "Trainer (Web Development)",
        image: "LohFuXing.jpg",
      },
      {
        name: "Francine Tan",
        role: "Service Learning",
        image: "FrancineTan.jpg",
      },
      {
        name: "Cheryl Yong",
        role: "Marketing",
        image: "CherylYong.jpg",
      },
      {
        name: "Yuen Huiqi",
        role: "Marketing",
        image: "YuenHuiQi.jpg",
      },
      {
        name: "Emily Ang",
        role: "Operations/Finance",
        image: "EmilyAng.jpg",
      },
      {
        name: "Lincoln Law",
        role: "Operations/Finance",
        image: "LincolnLaw.jpg",
      },
    ],
    projects: [
      {
        name: "Website Name",
        mentee: "Hana Chua Qi En",
        mentor: "Edena Teo",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Chua Ee Teng",
        mentor: "Ow Ling Jia",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Lim Hui Ting",
        mentor: "Rusydiah Binte Rosle",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Khoo Jia Xuan Cheryl",
        mentor: "Lim Yin Shan",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hui Ning Sherpa",
        mentor: "Siti Hindun",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Lim Li Xuan",
        mentor: "Esther Teo Min",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Ong Yuki",
        mentor: "Megan Seah",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Pang Jing Han",
        mentor: "Sylvia Goh",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Phang Wan Ni Diyana",
        mentor: "Nolin Ho",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Sharlotte Heng Xin Ying",
        mentor: "Teh Xue Er",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Chan Song Xian Benjamin",
        mentor: "Maurice Lim",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Choo Liang Rong",
        mentor: "Darryl Kwok",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Goh Jun You",
        mentor: "Lee Yi Hao",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Guan Jiahong",
        mentor: "Sean Choon",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Yeo Zhe Wei",
        mentor: "Aaron Tan",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Wesley Tan Kai En",
        mentor: "Jerriel Loo",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Tan Jun Jie Benjamin",
        mentor: "Lee Shuoan",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Lim Wee Hong",
        mentor: "Paul Soh",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Loke Jet Yoong",
        mentor: "Cheow Tian Le",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Lim Jun Run",
        mentor: "Cheow Tian Le",
        url: "",
        thumbnail: "placeholder.png",
      },
    ],
  },
  "2019": {
    description:
      "HeartCode 2019 was the third iteration of Project Heartcode, led by Mary and Bao Xian. The curriculum similarly adopted the Internet of Things (IoT) and Web Development segments of the previous year. Students then embark on exciting IoT projects that revolved around social issues",
    beneficiaries: [
      {
        organisation: "Bendemeer Secondary School",
        image: "bendemeer.png",
      },
    ],
    orgComm: [
      {
        name: "Mary Theresa Heng Rui Yu",
        role: "Project Lead",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Tsang Bao Xian",
        role: "Project Co-lead",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Phua Si Yu Arix",
        role: "Lead Trainer",
        image: "arix.jpeg",
      },
      {
        name: "Mohamed Najulah",
        role: "Lead Trainer",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Madhumitha D/O Suresh Kumar",
        role: "Marketing",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Soh Bai He",
        role: "Marketing",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Muhammad Syukri Bin Rahiman",
        role: "Events",
        image: "syukri.jpeg",
      },
      {
        name: "Tay Bing Yuan",
        role: "Events",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Darren Png Wei Xuan",
        role: "Operations",
        image: "profilePlaceholder.jpeg",
      },
    ],
    projects: [
      {
        name: "Stay Serene",
        mentee: "Alawiyah Kashif Malik",
        mentor: "Pearlyn Loh",
        url: "https://projectheartcode.netlify.app/projects/alawiyah_pearlyn/",
        thumbnail: "alawiyah_pearlyn.png",
      },
      {
        name: "Safe Returns",
        mentee: "Ayesha Siddiqah",
        mentor: "Francine Tan",
        url: "https://projectheartcode.netlify.app/projects/ayesha_francine/",
        thumbnail: "ayesha_francine.png",
      },
      {
        name: "Recolour",
        mentee: "Gayathri",
        mentor: "Peng You Xuan",
        url: "https://projectheartcode.netlify.app/Projects/gayathri_youxuan/index.html",
        thumbnail: "gayathri_youxuan.png",
      },
      {
        name: "Digital Senses",
        mentee: "Ching Hao Feng",
        mentor: "Lance Fu",
        url: "https://projectheartcode.netlify.app/projects/haofeng_lance/",
        thumbnail: "haofeng_lance.png",
      },
      {
        name: "Bright Shadow",
        mentee: "Israt Liza",
        mentor: "Emily Ang",
        url: "https://projectheartcode.netlify.app/projects/liza_emily/",
        thumbnail: "liza_emily.png",
      },
      {
        name: "Team Trees",
        mentee: "Marcus Yam",
        mentor: "Alvin Ang",
        url: "https://projectheartcode.netlify.app/projects/marcus_alvin/",
        thumbnail: "marcus_alvin.png",
      },
      {
        name: "Hearing Impairment",
        mentee: "Prisinthiya Raju",
        mentor: "Cheryl Yong",
        url: "https://projectheartcode.netlify.app/projects/prisinthiya_cheryl/",
        thumbnail: "prisinthiya_cheryl.png",
      },
      {
        name: "Understanding Kids with Autism",
        mentee: "Sing Qi Yi",
        mentor: "Yuen Huiqi",
        url: "https://projectheartcode.netlify.app/projects/qiyi_huiqi/finalproject",
        thumbnail: "qiyi_huiqi.png",
      },
      {
        name: "aWatch",
        mentee: "Rena Lim",
        mentor: "Lee Cheng Leng",
        url: "https://projectheartcode.netlify.app/projects/rena_chengleng/",
        thumbnail: "rena_chengleng.png",
      },
      {
        name: "The Independent Teen with Autism",
        mentee: "Justin Obias",
        mentor: "Teo Nian Kai",
        url: "https://projectheartcode.netlify.app/projects/roy_niankai/",
        thumbnail: "roy_niankai.png",
      },
      {
        name: "Got Your Back (G.Y.B)",
        mentee: "Sharizuan Muhammad",
        mentor: "Lincoln Law",
        url: "https://projectheartcode.netlify.app/projects/sharizuan_lincoln/",
        thumbnail: "sharizuan_lincoln.png",
      },
      {
        name: "Helping the Visually Impaired",
        mentee: "Shawn Neo",
        mentor: "Zeph Ng",
        url: "https://projectheartcode.netlify.app/projects/shawn_zeph/",
        thumbnail: "shawn_zeph.png",
      },
      {
        name: "Take me Home",
        mentee: "Tanisha",
        mentor: "Alyssa Siow",
        url: "https://projectheartcode.netlify.app/projects/tanisha_alyssa/tanisha_website",
        thumbnail: "tanisha_alyssa.png",
      },
      {
        name: "Angel Eyes",
        mentee: "Linus Cheng Xin Wei",
        mentor: "Mohammad Taufiq Al-Hakim",
        url: "https://projectheartcode.netlify.app/projects/taufiq_linus/",
        thumbnail: "taufiq_linus.png",
      },
      {
        name: "Sixth Sense",
        mentee: "Victoria Lin",
        mentor: "Pamela Pe",
        url: "https://projectheartcode.netlify.app/projects/victoria_pamela/",
        thumbnail: "victoria_pamela.png",
      },
      {
        name: "Be my Eyes",
        mentee: "Tan Xue En",
        mentor: "Zhang Xiaoyue",
        url: "https://projectheartcode.netlify.app/projects/xueen_xiaoyue/",
        thumbnail: "xueen_xiaoyue.png",
      },
    ],
  },
  "2018": {
    description:
      "HeartCode 2018 was second run of Project HeartCode led by Goh Jin Qiang and Sim Xuesi, both of whom were volunteers in the pilot run. With the increasing adoption of Internet of Things (IoT), the curriculum was widened to include IoT components on top of the web development segment. Students can work on exciting IoT projects that revolved around social issues",
    beneficiaries: [
      {
        organisation: "Bendemeer Secondary School",
        image: "bendemeer.png",
      },
    ],
    orgComm: [
      {
        name: "Goh Jin Qiang",
        role: "Project Lead",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Sim Xuesi",
        role: "Project Co-lead",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Teo Wei Shen",
        role: "Lead Trainer",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Sim Cher Boon",
        role: "Web Developer",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Tang Zefang",
        role: "Marketing",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Allyson Lim",
        role: "Events",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Lionel Ng",
        role: "Operations",
        image: "profilePlaceholder.jpeg",
      },
    ],
    projects: [],
  },
  "2017": {
    description:
      "HeartCode 2017 was the first ever iteration of the run, first started by two SCIS alumnis Zul Yang Guo Qiang and Manfred Loh Pei En. As the inaugural community service project under Ellipsis, Project HeartCode is the first of many different ways that will be dedicated to helping SMU SCIS students play a part in the community. HeartCode 2017 consist of a five-day web development course and at the end of the course, students are to create their own website through the skills learnt to create an informational web page showcaseing prevalent societal issues.",
    beneficiaries: [
      {
        organisation: "Bukit Panjang Government High School",
        image: "BPGHS.jpeg",
      },
    ],
    orgComm: [
      {
        name: "Zul Yang Guo Qiang",
        role: "Project Lead",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Manfred Loh Pei En",
        role: "Project Lead",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Wu Jian Hua",
        role: "Lead Trainer",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Sherman Koa",
        role: "Lead Trainer",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Goh Jin Qiang",
        role: "Curriculum Director (Programming)",
        image: "profilePlaceholder.jpeg",
      },
      {
        name: "Lau Zi Quan",
        role: "Curriculum Director (Social Issues)",
        image: "profilePlaceholder.jpeg",
      },
    ],
    projects: []
  },
};

export default yearData;
