import airbnb from "../src/assets/Images/RentApp.png"
import netflix from "../src/assets/Images/Netflix.png"
import ecommerce from "../src/assets/Images/New-Ecommerce.png"
import bestbuy from "../src/assets/Images/BestBuy.png"
import sketch from "../src/assets/Images/Sketch.png"

export interface projectType {
  name: string;
  tech: string;
  liveLink: string;
  gitLink: string;
  image:string
}
interface ProjectsType {
  fullStack: projectType[];
  frontEnd: projectType[];
}

export const projects: ProjectsType = {
  fullStack: [
    {
      name: "Rent Application - where users can buy and rent properties",
      tech: "NextJS , MongoDB , Prisma , Typescript , React , Tailwind",
      liveLink: "https://rent-app-alpha.vercel.app/",
      gitLink: "https:github.com/TusharBhatt1/airbnb",
      image:airbnb
    },
  ],
  frontEnd: [
    {
      name: "Sketch.io - Image Editing Application with Download feature",
      liveLink: "https://zocket-alpha.vercel.app/",
      tech: "React , Typescript , LocalStorage , ColorPicker , React Icons , Tailwind",
      gitLink: "https:github.com/TusharBhatt1/zocket",
      image:sketch
    },
    {
        name: "Best Buy - Add to Wishlist + LRU Caching for recently viewed",
        liveLink: "https://bestbuy-main.vercel.app/",
        tech: "NextJS , Typescript, React , Zustand , React-hook-form , Yup , Tailwind",
        gitLink: "https:github.com/TusharBhatt1/bestbuy",
        image:bestbuy
      },
    {
      name: "Netflix Clone - All in one entertainment Application",
      liveLink: "https://net-flix-7ewm.vercel.app/",
      tech: "React , Redux , CSS",
      gitLink: "https:github.com/TusharBhatt1/netflix",
      image:netflix
    },
   

    {
      name: "React Ecommerce",
      liveLink: "https://new-ecommerce-five.vercel.app/",
      tech: "React , Redux , Responsive Design",
      gitLink: "https:github.com/TusharBhatt1/ecommerce",
      image:ecommerce
    },
  ],
};
