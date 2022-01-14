interface blogItems {
  title: string;
  author: string;
  date: Date; // date object month starts from 0 (January is 0)
  url: string;
  description: string;
}

interface blogMap {
  [posts: string]: Array<blogItems>
}

const blogData: blogMap = {
  posts: [
    {
      title: "Heart Coding: These Students Are Helping Underprivileged Youths Level Up in Coding",
      author: "The SMU Blog (SMU Social Media Team)",
      date: new Date(2019, 9, 30),
      url: "https://blog.smu.edu.sg/undergraduate/bsc-is/heart-coding-these-students-helping-underprivileged-youths-level-up-coding/",
      description: "Story written by SMU Social Media Team detailing the history of Project HeartCode and how it works"
    },
    {
      title: "Project HeartCode",
      author: "Ellipsis",
      date: new Date(2018, 1, 25),
      url: "https://scis.smu.edu.sg/sis-xp/project-heartcode",
      description: "Story written by Ellipsis (SMU SCIS Student Society) providing an introduction to Project HeartCode"
    },
  ]
};

export default blogData;
