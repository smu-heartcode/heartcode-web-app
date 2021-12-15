interface BeneficiaryItems {
  organisation: string; // Name of Beneficiary
  description: string; // Description of them
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
  "2020": {
    description:
      "HeartCode 2020 was a virtual run focusing on Digital Content Creation and Web Development",
    beneficiaries: [
      {
        organisation: "Secondary School",
        description: "XX Secondary School",
        image: "MrNg.png",
      },
      {
        organisation: "CDAC",
        description:
          "Chinese Development Assistance Council (CDAC) is a non-profit self-help group for the Chinese community.",
        image: "MrNg.png",
      },
    ],
    orgComm: [
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
    ],
    projects: [
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
    ],
  },
  "2019": {
    description:
      "HeartCode 2019 focuses on Internet of Things and Web Development",
    beneficiaries: [
      {
        organisation: "Secondary School",
        description: "XX Secondary School",
        image: "placeholder.png",
      },
      {
        organisation: "CDAC",
        description:
          "Chinese Development Assistance Council (CDAC) is a non-profit self-help group for the Chinese community.",
        image: "placeholder.png",
      },
    ],
    orgComm: [
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
    ],
    projects: [
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
    ],
  },
  "2018": {
    description:
      "HeartCode 2018 focuses on Internet of Things and Web Development",
    beneficiaries: [
      {
        organisation: "Secondary School",
        description: "XX Secondary School",
        image: "",
      },
      {
        organisation: "CDAC",
        description:
          "Chinese Development Assistance Council (CDAC) is a non-profit self-help group for the Chinese community.",
        image: "",
      },
    ],
    orgComm: [
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
      {
        name: "Sean Choon",
        role: "Web Developer",
        image: "placeholder.png",
      },
    ],
    projects: [
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
      {
        name: "Website Name",
        mentee: "Hello World",
        mentor: "Bye World",
        url: "",
        thumbnail: "placeholder.png",
      },
    ],
  },
};

export default yearData;
