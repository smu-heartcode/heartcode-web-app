interface BeneficiaryItems {
  organisation: string; // Name of Beneficiary
  image: string; // Their Image or Logo (path to directory)
}

interface OrgCommItems {
  name: string; // Name of Org Comm
  role: string; // Role of Org Comm
  image: string; // Image of Org Comm (path to directory)
}

interface ProjectItems {
  name: string; // Website Name
  mentee: string; // Mentee Name
  mentor: string; // Mentor Name
  url: string; // URL of website
  thumbnail: string; // Thumbnail of website (screenshot of landing)
}

interface PhotoItems {
  src: string; // src to the image (must use /year/Photos/img.jpg for this)
  width: number; // aspect ratio
  height: number; // aspect ratio
}
interface YearMap {
  [year: string]: {
    description: string;
    beneficiaries: Array<BeneficiaryItems>;
    orgComm: Array<OrgCommItems>;
    projects: Array<ProjectItems>;
    photos: Array<PhotoItems>;
  };
}

const yearData: YearMap = {
  "2021": {
    description:
      "HeartCode 2021 was the fifth iteration of Project HeartCode led by Cheow Tian Le and Gan Shao Hong. Due to COVID-19, the run continued to remain virtual, focusing on the same segments as the previous year - Digital Content Creation and Web Development",
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
        name: "Homosexuality",
        mentee: "Pek Feng Yuan Jack",
        mentor: "Tan Yi Peng",
        url: "https://heartcode.hanxingjian.com/Projects/Pek%20Feng%20Yuan%20Jack/index.html",
        thumbnail: "yipeng_jack.png",
      },
      {
        name: "Vision",
        mentee: "Dennis How Ming Xuan",
        mentor: "Sylvia Goh",
        url: "https://heartcode.hanxingjian.com/Projects/Dennis%20How%20Ming%20Xuan/index.html",
        thumbnail: "sylvia_dennis.png",
      },
      {
        name: "A helping hand",
        mentee: "Ho Zhi Yi Ashley",
        mentor: "Euodia Tan",
        url: "https://heartcode.hanxingjian.com/Projects/Ashley/ahelpinghand.html",
        thumbnail: "euodia_ashley.png",
      },
      {
        name: "Youths with Depression",
        mentee: "Johnathan Lim Zhi Wei",
        mentor: "Lim Dao Yong",
        url: "https://heartcode.hanxingjian.com/Projects/Johnathan%20Lim%20Zhi%20Wei/index.html",
        thumbnail: "daoyong_johnathan.png",
      },
      {
        name: "Gambling Addiction",
        mentee: "Shirlyn Lim",
        mentor: "Toh Xuan Lei Jess",
        url: "https://heartcode.hanxingjian.com/Projects/Shirlyn%20Lim/index.html",
        thumbnail: "jess_shirlyn.png",
      },
      {
        name: "Mental Health Among Youths",
        mentee: "Fan Ming Yin",
        mentor: "Charis Chin",
        url: "https://heartcode.hanxingjian.com/Projects/Min%20Yin/index.html",
        thumbnail: "charis_mingyin.png",
      },
      {
        name: "Dealing with Autism",
        mentee: "Yee Cheng Fai",
        mentor: "Wong Jie Peng",
        url: "https://heartcode.hanxingjian.com/Projects/Yee%20Cheng%20Fai/index.html",
        thumbnail: "jiepeng_chengfai.png",
      },
      {
        name: "Caring for the blind",
        mentee: "Li Peixian, Bernice",
        mentor: "Lim Yin Shan",
        url: "https://heartcode.hanxingjian.com/Projects/Bernice/index.html",
        thumbnail: "yinshan_bernice.png",
      },
      {
        name: "Youth With Depression",
        mentee: "Seem Yong En",
        mentor: "James Teo Jun Hao",
        url: "https://heartcode.hanxingjian.com/Projects/Seem%20Yong%20En/index.html",
        thumbnail: "james_yongen.png",
      },
      {
        name: "Hope Haven",
        mentee: "Lee Wen Jing Larisa",
        mentor: "Rose Lin",
        url: "https://heartcode.hanxingjian.com/Projects/Larisa/hopehaven.html",
        thumbnail: "rose_larisa.png",
      },
      {
        name: "Be Their Eyes",
        mentee: "Lim Fu Jie",
        mentor: "Too Min Jay",
        url: "https://heartcode.hanxingjian.com/Projects/Fu%20jie/index.html",
        thumbnail: "minjay_fujie.png",
      },
      {
        name: "Stay Strong",
        mentee: "Isaac Ong Kay Chun",
        mentor: "Rusydiah Binte Rosle",
        url: "https://heartcode.hanxingjian.com/Projects/Isaac/index.html",
        thumbnail: "rusydiah_isaac.png",
      },
      {
        name: "Autism",
        mentee: "Ang Pei Xian",
        mentor: "Lau Wei Yang Jeffery",
        url: "https://heartcode.hanxingjian.com/Projects/Ang%20Pei%20Xian/index.html",
        thumbnail: "jeffery_peixian.png",
      },
      {
        name: "Visual Impairment",
        mentee: "Toh Ming Zhen",
        mentor: "Teh Xue Er",
        url: "https://heartcode.hanxingjian.com/Projects/Ming%20Zhen/index.html",
        thumbnail: "xueer_mingzhen.png",
      },
      {
        name: "How are you feeling?",
        mentee: "Rain Tan Yin",
        mentor: "Caslyn Phang Yun Shan",
        url: "https://heartcode.hanxingjian.com/Projects/Rain/index.html",
        thumbnail: "caslyn_rain.png",
      },
      {
        name: "Cheerful Smiles",
        mentee: "Pei Joon Yi",
        mentor: "Jerome Goh",
        url: "https://heartcode.hanxingjian.com/Projects/Joon%20yi/index.html",
        thumbnail: "jerome_joonyi.png",
      },
      {
        name: "Dementia",
        mentee: "Pang Chi Ling",
        mentor: "Louise Angeline Christie",
        url: "https://heartcode.hanxingjian.com/Projects/Pang%20Chi%20Ling/index.html",
        thumbnail: "angeline_chiling.png",
      },
      {
        name: "Muscle Dystrophy",
        mentee: "Tan Yong Sheng",
        mentor: "Paul Soh Wei Jie",
        url: "https://heartcode.hanxingjian.com/Projects/Yong%20Sheng/index.html",
        thumbnail: "paul_yongsheng.png",
      },
      {
        name: "Ways to move on after being retrenched",
        mentee: "Goh Si Ying",
        mentor: "Phoenikelly Yong Wai Yun",
        url: "https://heartcode.hanxingjian.com/Projects/Si%20Ying/index.html",
        thumbnail: "phoenikelly_siying.png",
      },
      {
        name: "Depression",
        mentee: "Leong Song Hui",
        mentor: "Ong Guang Qi",
        url: "https://heartcode.hanxingjian.com/Projects/Songhui/index.html",
        thumbnail: "guangqi_songhui.png",
      },
    ],
    photos: [
      {
        src: "/2021/Photos/1.png",
        width: 4,
        height: 2,
      },
      {
        src: "/2021/Photos/2.png",
        width: 4,
        height: 2,
      },
      {
        src: "/2021/Photos/3.png",
        width: 4,
        height: 2,
      },
      {
        src: "/2021/Photos/4.png",
        width: 4,
        height: 2,
      },
      {
        src: "/2021/Photos/5.png",
        width: 4,
        height: 2,
      },
      {
        src: "/2021/Photos/6.png",
        width: 4,
        height: 2,
      },
      {
        src: "/2021/Photos/7.png",
        width: 4,
        height: 2,
      },
      {
        src: "/2021/Photos/8.png",
        width: 4,
        height: 2,
      },
      {
        src: "/2021/Photos/9.png",
        width: 4,
        height: 2,
      },
      {
        src: "/2021/Photos/10.png",
        width: 4,
        height: 2,
      },
      {
        src: "/2021/Photos/11.png",
        width: 4,
        height: 2,
      },
      {
        src: "/2021/Photos/12.png",
        width: 5,
        height: 2,
      },
      {
        src: "/2021/Photos/13.png",
        width: 5,
        height: 2,
      },
      {
        src: "/2021/Photos/14.png",
        width: 5,
        height: 2,
      },
      {
        src: "/2021/Photos/15.png",
        width: 5,
        height: 2,
      },
      {
        src: "/2021/Photos/16.png",
        width: 4,
        height: 2,
      },
      {
        src: "/2021/Photos/17.png",
        width: 4,
        height: 2,
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
        name: "Visual Impairment",
        mentee: "Hana Chua Qi En",
        mentor: "Edena Teo",
        url: "https://heartcode-hana.netlify.app/",
        thumbnail: "edena_hana.png",
      },
      {
        name: "Breathe",
        mentee: "Chua Ee Teng",
        mentor: "Ow Ling Jia",
        url: "https://heartcode-eeteng.netlify.app/",
        thumbnail: "lingjia-eeteng.png",
      },
      {
        name: "ADHD",
        mentee: "Lim Hui Ting",
        mentor: "Rusydiah Binte Rosle",
        url: "https://heartcode-huiting.netlify.app/",
        thumbnail: "rusydiah_huiting.png",
      },
      {
        name: "Understanding Autism",
        mentee: "Khoo Jia Xuan Cheryl",
        mentor: "Lim Yin Shan",
        url: "https://heartcode-cheryl.netlify.app/",
        thumbnail: "yinshan_cheryl.png",
      },
      {
        name: "Autism",
        mentee: "Hui Ning Sherpa",
        mentor: "Siti Hindun",
        url: "https://heartcode-huining.netlify.app/",
        thumbnail: "hindun_huining.png",
      },
      {
        name: "Hearing Loss",
        mentee: "Lim Li Xuan",
        mentor: "Esther Teo Min",
        url: "https://heartcode-lixuan.netlify.app/",
        thumbnail: "esther_lixuan.png",
      },
      {
        name: "Autism",
        mentee: "Ong Yuki",
        mentor: "Megan Seah",
        url: "https://heartcode-yuki.netlify.app/",
        thumbnail: "megan_yuki.png",
      },
      {
        name: "Elderly Dementia",
        mentee: "Pang Jing Han",
        mentor: "Sylvia Goh",
        url: "https://heartcode-jinghan.netlify.app/",
        thumbnail: "sylvia_jinghan.png",
      },
      {
        name: "Lower Income Groups",
        mentee: "Phang Wan Ni Diyana",
        mentor: "Nolin Ho",
        url: "https://heartcode-diyana.netlify.app/",
        thumbnail: "nolin_diyana.png",
      },
      {
        name: "Understanding Visually Impaired",
        mentee: "Sharlotte Heng Xin Ying",
        mentor: "Teh Xue Er",
        url: "https://heartcode-sharlotte.netlify.app/",
        thumbnail: "xueer_sharlotte.png",
      },
      {
        name: "ADHD",
        mentee: "Choo Liang Rong",
        mentor: "Darryl Kwok",
        url: "https://heartcode-liangrong.netlify.app/",
        thumbnail: "daryl_liangrong.png",
      },
      {
        name: "People with disabilities",
        mentee: "Goh Jun You",
        mentor: "Lee Yi Hao",
        url: "https://heartcode-junyou.netlify.app/",
        thumbnail: "yihao_junyou.png",
      },
      {
        name: "Teenager Depression",
        mentee: "Guan Jiahong",
        mentor: "Sean Choon",
        url: "https://heartcode-jiahong.netlify.app/",
        thumbnail: "sean_jiahong.png",
      },
      {
        name: "Visually Impaired",
        mentee: "Yeo Zhe Wei",
        mentor: "Aaron Tan",
        url: "https://heartcode-zhewei.netlify.app/",
        thumbnail: "aaron_zhewei.png",
      },
      {
        name: "Understanding Depression",
        mentee: "Wesley Tan Kai En",
        mentor: "Jerriel Loo",
        url: "https://heartcode-wesley.netlify.app/",
        thumbnail: "jerriel_wesley.png",
      },
      {
        name: "The Visually Imparied Community",
        mentee: "Lim Jing Run",
        mentor: "Lee Shuoan",
        url: "https://heartcode-jingrun.netlify.app/",
        thumbnail: "shuoan_jingrun.png",
      },
      {
        name: "Teenager Depression",
        mentee: "Lim Wee Hong",
        mentor: "Paul Soh",
        url: "https://heartcode-weehong.netlify.app/",
        thumbnail: "paul_weehong.png",
      },
      {
        name: "Muscular Dystrophy",
        mentee: "Loke Jet Yoong",
        mentor: "Cheow Tian Le",
        url: "https://heartcode-jetyoong.netlify.app/",
        thumbnail: "tianle_jetyoong.png",
      },
    ],
    photos: [
      {
        src: "/2020/Photos/1.png",
        width: 6,
        height: 2,
      },
      {
        src: "/2020/Photos/2.png",
        width: 6,
        height: 2,
      },
      {
        src: "/2020/Photos/3.PNG",
        width: 5,
        height: 2,
      },
      {
        src: "/2020/Photos/4.PNG",
        width: 5,
        height: 2,
      },
      {
        src: "/2020/Photos/5.PNG",
        width: 7,
        height: 2,
      },
      {
        src: "/2020/Photos/6.PNG",
        width: 6,
        height: 2,
      },
      {
        src: "/2020/Photos/7.PNG",
        width: 7,
        height: 2,
      },
      {
        src: "/2020/Photos/8.png",
        width: 5,
        height: 2,
      },
      {
        src: "/2020/Photos/9.png",
        width: 6,
        height: 2,
      },
      {
        src: "/2020/Photos/10.PNG",
        width: 6,
        height: 2,
      },
      {
        src: "/2020/Photos/11.png",
        width: 6,
        height: 2,
      },
      {
        src: "/2020/Photos/12.png",
        width: 6,
        height: 2,
      },
      {
        src: "/2020/Photos/13.png",
        width: 6,
        height: 2,
      },
      {
        src: "/2020/Photos/14.PNG",
        width: 6,
        height: 2,
      },
      {
        src: "/2020/Photos/15.png",
        width: 6,
        height: 2,
      },
      {
        src: "/2020/Photos/16.png",
        width: 6,
        height: 2,
      },
      {
        src: "/2020/Photos/17.png",
        width: 6,
        height: 2,
      },
      {
        src: "/2020/Photos/18.png",
        width: 6,
        height: 2,
      },
      {
        src: "/2020/Photos/19.PNG",
        width: 6,
        height: 2,
      },
      {
        src: "/2020/Photos/20.PNG",
        width: 6,
        height: 2,
      },
      {
        src: "/2020/Photos/21.PNG",
        width: 6,
        height: 2,
      },
    ],
  },
  "2019": {
    description:
      "HeartCode 2019 was the third iteration of Project Heartcode, led by Mary Heng and Tsang Bao Xian. The curriculum similarly adopted the Internet of Things (IoT) and Web Development segments of the previous year. Students then embark on exciting IoT projects that revolved around social issues",
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
        image: "Mary.JPG",
      },
      {
        name: "Tsang Bao Xian",
        role: "Project Co-lead",
        image: "BaoXian.jpeg",
      },
      {
        name: "Phua Si Yu Arix",
        role: "Lead Trainer",
        image: "arix.jpeg",
      },
      {
        name: "Mohamed Najulah",
        role: "Lead Trainer",
        image: "Najulah.jpeg",
      },
      {
        name: "Madhumitha D/O Suresh Kumar",
        role: "Marketing",
        image: "Madhu.jpeg",
      },
      {
        name: "Soh Bai He",
        role: "Marketing",
        image: "BaiHe.jpeg",
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
        image: "Darren.jpg",
      },
    ],
    projects: [
      {
        name: "Stay Serene",
        mentee: "Alawiyah Kashif Malik",
        mentor: "Pearlyn Loh",
        url: "https://projectheartcode.netlify.app/projects/alawiyah_pearlyn/",
        thumbnail: "alawiyah_pearlyn.PNG",
      },
      {
        name: "Safe Returns",
        mentee: "Ayesha Siddiqah",
        mentor: "Francine Tan",
        url: "https://projectheartcode.netlify.app/projects/ayesha_francine/",
        thumbnail: "ayesha_francine.PNG",
      },
      {
        name: "Recolour",
        mentee: "Gayathri",
        mentor: "Peng You Xuan",
        url: "https://projectheartcode.netlify.app/Projects/gayathri_youxuan/index.html",
        thumbnail: "gayathri_youxuan.PNG",
      },
      {
        name: "Digital Senses",
        mentee: "Ching Hao Feng",
        mentor: "Lance Fu",
        url: "https://projectheartcode.netlify.app/projects/haofeng_lance/",
        thumbnail: "haofeng_lance.PNG",
      },
      {
        name: "Bright Shadow",
        mentee: "Israt Liza",
        mentor: "Emily Ang",
        url: "https://projectheartcode.netlify.app/projects/liza_emily/",
        thumbnail: "liza_emily.PNG",
      },
      {
        name: "Team Trees",
        mentee: "Marcus Yam",
        mentor: "Alvin Ang",
        url: "https://projectheartcode.netlify.app/projects/marcus_alvin/",
        thumbnail: "marcus_alvin.PNG",
      },
      {
        name: "Hearing Impairment",
        mentee: "Prisinthiya Raju",
        mentor: "Cheryl Yong",
        url: "https://projectheartcode.netlify.app/projects/prisinthiya_cheryl/",
        thumbnail: "prisinthiya_cheryl.PNG",
      },
      {
        name: "Understanding Kids with Autism",
        mentee: "Sing Qi Yi",
        mentor: "Yuen Huiqi",
        url: "https://projectheartcode.netlify.app/projects/qiyi_huiqi/finalproject",
        thumbnail: "qiyi_huiqi.PNG",
      },
      {
        name: "aWatch",
        mentee: "Rena Lim",
        mentor: "Lee Cheng Leng",
        url: "https://projectheartcode.netlify.app/projects/rena_chengleng/",
        thumbnail: "rena_chengleng.PNG",
      },
      {
        name: "The Independent Teen with Autism",
        mentee: "Justin Obias",
        mentor: "Teo Nian Kai",
        url: "https://projectheartcode.netlify.app/projects/roy_niankai/",
        thumbnail: "roy_niankai.PNG",
      },
      {
        name: "Got Your Back (G.Y.B)",
        mentee: "Sharizuan Muhammad",
        mentor: "Lincoln Law",
        url: "https://projectheartcode.netlify.app/projects/sharizuan_lincoln/",
        thumbnail: "sharizuan_lincoln.PNG",
      },
      {
        name: "Helping the Visually Impaired",
        mentee: "Shawn Neo",
        mentor: "Zeph Ng",
        url: "https://projectheartcode.netlify.app/projects/shawn_zeph/",
        thumbnail: "shawn_zeph.PNG",
      },
      {
        name: "Take me Home",
        mentee: "Tanisha",
        mentor: "Alyssa Siow",
        url: "https://projectheartcode.netlify.app/projects/tanisha_alyssa/tanisha_website",
        thumbnail: "tanisha_alyssa.PNG",
      },
      {
        name: "Angel Eyes",
        mentee: "Linus Cheng Xin Wei",
        mentor: "Mohammad Taufiq Al-Hakim",
        url: "https://projectheartcode.netlify.app/projects/taufiq_linus/",
        thumbnail: "taufiq_linus.PNG",
      },
      {
        name: "Sixth Sense",
        mentee: "Victoria Lin",
        mentor: "Pamela Pe",
        url: "https://projectheartcode.netlify.app/projects/victoria_pamela/",
        thumbnail: "victoria_pamela.PNG",
      },
      {
        name: "Be my Eyes",
        mentee: "Tan Xue En",
        mentor: "Zhang Xiaoyue",
        url: "https://projectheartcode.netlify.app/projects/xueen_xiaoyue/",
        thumbnail: "xueen_xiaoyue.PNG",
      },
    ],
    photos: [
      {
        src: "/2019/Photos/1.JPG",
        width: 4,
        height: 2,
      },
      {
        src: "/2019/Photos/2.JPG",
        width: 4,
        height: 2,
      },
      {
        src: "/2019/Photos/3.JPG",
        width: 3,
        height: 2,
      },
      {
        src: "/2019/Photos/4.JPG",
        width: 3,
        height: 2,
      },
      {
        src: "/2019/Photos/5.JPG",
        width: 3,
        height: 2,
      },
      {
        src: "/2019/Photos/6.JPG",
        width: 3,
        height: 2,
      },
      {
        src: "/2019/Photos/7.JPG",
        width: 3,
        height: 2,
      },
      {
        src: "/2019/Photos/8.JPG",
        width: 3,
        height: 2,
      },
      {
        src: "/2019/Photos/9.JPG",
        width: 3,
        height: 2,
      },
      {
        src: "/2019/Photos/10.JPG",
        width: 3,
        height: 2,
      },
      {
        src: "/2019/Photos/11.JPG",
        width: 3,
        height: 2,
      },
      {
        src: "/2019/Photos/12.JPG",
        width: 3,
        height: 2,
      },
      {
        src: "/2019/Photos/13.JPG",
        width: 3,
        height: 2,
      },
      {
        src: "/2019/Photos/14.JPG",
        width: 3,
        height: 2,
      },
      {
        src: "/2019/Photos/15.JPG",
        width: 3,
        height: 2,
      },
      {
        src: "/2019/Photos/16.JPG",
        width: 5,
        height: 3,
      },
      {
        src: "/2019/Photos/17.JPG",
        width: 6,
        height: 3,
      },
      {
        src: "/2019/Photos/18.JPG",
        width: 6,
        height: 3,
      },
      {
        src: "/2019/Photos/19.JPG",
        width: 3,
        height: 3,
      },
      {
        src: "/2019/Photos/20.jpg",
        width: 3,
        height: 2,
      },
      {
        src: "/2019/Photos/21.jpg",
        width: 3,
        height: 2,
      },
      {
        src: "/2019/Photos/22.jpg",
        width: 3,
        height: 2,
      },
      {
        src: "/2019/Photos/23.jpg",
        width: 3,
        height: 2,
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
    photos: [],
  },
  "2017": {
    description:
      "HeartCode 2017 was the first ever iteration of the project, first started by two SCIS alumnis Zul Yang Guo Qiang and Manfred Loh Pei En. As the inaugural community service project under Ellipsis, Project HeartCode is the first of many different ways that will be dedicated to helping SMU SCIS students play a part in the community. HeartCode 2017 consist of a five-day web development course and at the end of the course, students are to create their own website through the skills learnt to create an informational web page showcaseing prevalent societal issues.",
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
    projects: [],
    photos: [],
  },
};

export default yearData;
