import hc1 from "../../assets/hc1.jpg";
import hc2 from "../../assets/hc2.jpg";
import hc3 from "../../assets/hc3.jpg";
import hc4 from "../../assets/hc4.jpg";
import hc5 from "../../assets/hc5.jpg";
import hc6 from "../../assets/hc6.jpg";
import hc7 from "../../assets/hc7.jpg";
import hc8 from "../../assets/hc8.jpg";
import hc9 from "../../assets/hc9.jpg";
import hc10 from "../../assets/hc10.jpg";

export const media = [hc1, hc2, hc3, hc4, hc5, hc6, hc7, hc8, hc9, hc10];
export const mediaByIndex = (index: number) => media[index % media.length];
