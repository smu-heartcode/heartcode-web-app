
## Project HeartCode [Documentation]
  
Hi, this is a guide to help you and future members of Project HeartCode to maintain this current website. It should be relatively simple, as long as you have taken Intro to Programming. Your role here is to update the site with new data after every iterations of Project HeartCode, there is not much coding involved.
  
 Inside the Data folder within the src directory, you should see the following 3 data files: 
```javascript
📦Data  
 ┣ 📜blogData.ts  
 ┣ 📜partnerData.ts  
 ┗ 📜yearData.ts
```

Within the data files, the interface has already been declared for you - think of it as statically typing the objects, this is to ensure consistency and ease of maintenance across future batches. If the layout is of the wrong format (missing input, wrong data type), your linter should throw off a warning.

#### 1. blogData.ts 
```javascript
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
```
blogData refers to the blog posts on the /blog page - in the future where there are publications made about Project HeartCode, feel free to link them here.

#### 2. partnerData.ts 
```javascript
interface partner {
name: string; // Name of Partner
image: string; // Image of Partner (path to directory)
intro: string; // Short Introduction about their role
description: string; // Description of them
}

interface partnerMap {
[type: string]: Array<partner>; // Array of objects
}
```
partnerData refers to the partners collaborating with Project HeartCode - it can be seen under the /project page. There are two array values within the object - "partners" referring to current partners working with Project HeartCode, and "pastPartners" referring to partners that have worked with Project HeartCode in the past.

#### 3. yearData.ts 
```javascript
interface BeneficiaryItems {
organisation: string; // Name of Beneficiary
image: string; // Their Image or Logo (path to directory)
}

interface  OrgCommItems {
name: string; // Name of Org Comm
role: string; // Role of Org Comm
image: string; // Image of Org Comm (path to directory)
}

interface  ProjectItems {
name: string; // Website Name
mentee: string; // Mentee Name
mentor: string; // Mentor Name
url: string; // URL of website
thumbnail: string; // Thumbnail of website (screenshot of landing)
}

interface  PhotoItems {
src: string; // src to the image (must use /year/Photos/img.jpg for this)
width: number; // aspect ratio
height: number; // aspect ratio
}

interface  YearMap {
[year: string]: {
description: string;
beneficiaries: Array<BeneficiaryItems>;
orgComm: Array<OrgCommItems>;
projects: Array<ProjectItems>;
photos: Array<PhotoItems>;
};
}
```
 yearData is the most important one and will be updated for every iteration - To begin with, start with uploading all the necessary documents within the /public folder in the root directory. Follow the naming conventions **very closely**. 

E.g.,
```javascript
📦2021  
 ┣ 📜Beneficiaries
 ┣ 📜OrgComm  
 ┣ 📜Photos
 ┗ 📜Project
 ```
 
_If you are unsure, feel free to refer to how it is done for the previous runs._

yearData refers to the data on the actual run itself - under the /run/[year] page. The pages will be statically generated, so as long as you have a folder of the year, with the updated yearData accordingly, the page for the run will be created automatically. Do note to use squared images so as to not have them look distorted on the website :)

_Please feel free to pm the original owner [@seanisoverhere](https://t.me/seanisoverhere) if you require any assistance :)_
