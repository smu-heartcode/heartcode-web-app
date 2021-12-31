import hc1 from "/public/static/hc1.jpg";
import hc2 from "/public/static/hc2.jpg";
import hc3 from "/public/static/hc3.jpg";
import hc4 from "/public/static/hc4.jpg";
import hc5 from "/public/static/hc5.png";
import hc6 from "/public/static/hc6.jpg";
import hc7 from "/public/static/hc7.png";
import hc8 from "/public/static/hc8.jpg";
import hc9 from "/public/static/hc9.jpg";
import hc10 from "/public/static/hc10.jpg";

export const media = [hc1, hc2, hc3, hc4, hc5, hc6, hc7, hc8, hc9, hc10];
export const mediaByIndex = (index: number) => media[index % media.length];
