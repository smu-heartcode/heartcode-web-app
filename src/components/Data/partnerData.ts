interface partner {
  name: string; // Name of Partner 
  image: string; // Image of Partner (path to directory)
  intro: string; // Short Introduction about their role 
  description: string; // Description of them
}

interface partnerMap {
  [type: string]: Array<partner>; // Array of objects
}

const partnerData: partnerMap = {
  partners: [
    {
      name: "Mr Ng Kai Wa",
      image: "MrNg.png",
      intro: "Chairman, CEO and Co-Founder of InnoMedia Pte Ltd”",
      description: "Mr Ng Kai Wa actively supports Project HeartCode not only by contributing to the project funds, but also through actively involving himself by advising each year's project leaders in the planning of the project",
    },
    {
      name: "Chinese Development Assistance Council",
      image: "CDAC.png",
      intro: "Partner of Singapore Management University Project HeartCode",
      description: "Chinese Development Assistance Council (CDAC) is a non-profit self-help group for the Chinese community. CDAC offers programmes and assistance schemes to help the less-privileged in the community to maximise their potential and strive for social mobility through self-help and mutual support.",
    },
  ],
  pastPartners: [
    {
      name: "Central Singapore CDC",
      image: "CDC_Logo.png",
      intro: "Partner of the Singapore Management University Centre for Social Responsibility",
      description: "Central Singapore Community Development Council recognised Project HeartCode 2019's contribution to the Central Singapore district by involving beneficiaries from the district, and provided additional funding to support Project Heartcode in its efforts to upscale and improve the project",
    },
  ],
};

export default partnerData;
