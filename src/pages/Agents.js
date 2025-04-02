import React from "react";
import Section6 from "../components/section6";
import Christina from "../assets/images/christina.jpg";
import Izzy from "../assets/images/izzy.jpg";
import Tammy from "../assets/images/tammy.gif";
import Ken from "../assets/images/ken.jpg";
import Jean from "../assets/images/jean.jpg";
import Brett from "../assets/images/brett.jpg";
import Chris from "../assets/images/chrisRob.jpg";

export const agents = [
  {
    id: 1,
    name: "Christina Cavallo",
    role: "Owner/Broker",
    image: Christina,
    about: `
      A lifelong resident of the Candlewood Lake region, Christina Cavallo is dedicated to guiding clients through every aspect of their real estate journey. 
      As the niece and protégé of Independent Realty Group’s late founder, Ellen Cavallo Buccitti, Christina spent five invaluable years as Ellen’s assistant—immersed in day-to-day operations, absorbing Ellen’s deep knowledge of waterfront properties, and inheriting her unwavering commitment to personalized service.
      
      In 2023, Christina assumed the role of Broker at Independent Realty Group, embracing both the company’s distinguished legacy and a new era of leadership. A devoted mother, Christina understands the importance of finding not just a house but a home—one that perfectly suits her clients’ families, lifestyles, and dreams. Her expertise spans Fairfield and Litchfield Counties, with a specialized focus on Candlewood Lake communities. From waterfront regulations to dock rights, she confidently navigates the complexities of buying and selling lake properties, ensuring an informed and seamless experience for every client.
      
      Carrying forward Ellen’s vision, Christina remains passionate about the personal touch that has defined Independent Realty Group since 2005. She believes in the power of local expertise and genuine connections, offering insightful guidance that goes beyond traditional real estate transactions. Whether you’re seeking a year-round lakeside haven or a seasonal retreat, Christina is committed to helping you discover the very best of the Candlewood Lake lifestyle—just as her aunt did for nearly two decades.
      
      Contact Christina Cavallo today and let her continue Ellen’s legacy of excellence by helping you find your perfect place to call home.
    `,
    contact: {
      email: "chris@inependentrealtygroup.com", // Replace with actual email link
      phone: "2037333969", // Replace with actual phone link
      profile: "#", // Replace with actual profile link
    },
    currentwidget: 62378,
    soldwidget: 62381,
  },
  {
    id: 2,
    name: "Isabelle Cavallo",
    role: "Realtor",
    image: Izzy,
    contact: {
      email: "isabellea.cavallo@gmail.com",
      phone: "2037330352",
      profile: "#",
    },
    soldwidget: 62390,
    currentwidget: 62389,
  },
  {
    id: 3,
    name: "Chris Robinson",
    role: "Realtor",
    image: Chris,
    about: `
      With over 18 years of experience as a Realtor and more than 30 years in sales, I have honed my skills in providing exceptional service to my clients. Throughout my career, I have been honored with several top producer awards and numerous 5-star recommendations, a testament to my commitment to excellence.

      Having lived in Danbury on Candlewood Lake since 1993, I have developed a profound connection to this beautiful area. Originally from the Finger Lakes region in New York, I bring a unique perspective and a wealth of knowledge about waterfront living. As a dedicated delegate to the Candlewood Lake Authority, I actively contribute to preserving and protecting this invaluable resource.

      Family is at the heart of everything I do. I am happily married with two wonderful children, and together, we enjoy all the water-related activities that Candlewood Lake has to offer. From water skiing—an area where my friends say I excel—to boating, my hobbies reflect my passion for lake life.

      Whether you are a first-time buyer, relocating for work, downsizing, or seeking the perfect lake house, I am here to guide you through every step of the process. I also have extensive experience with the VA loan process and am well-equipped to assist veterans and active military personnel in achieving their homeownership goals.

      If you want to know anything about the lake, boats, or skiing, feel free to ask. I am always eager to share my knowledge and help you make the most informed decisions.
    `,
    contact: {
      email: "robinson.cj1@outlook.com",
      phone: "2033126196",
      profile: "#",
    },
    currentwidget: 62392,
    soldwidget: 62393,
    
  },
  {
    id: 4,
    name: "Ken Freundt",
    role: "Realtor",
    image: Ken,
    about: "Having been born and raised in northern Fairfield County and having lived here my entire life, I have developed an extensive and intimate knowledge of the area. As a proud resident of a Candlewood Lake community, I cherish the moments spent boating and enjoying the beautiful scenery with friends and family. My deep-rooted connection to this region fuels my passion for real estate, and I am dedicated to helping you find your dream home. Allow me to share my love for the lake and my expertise in the local market to guide you in making the best real estate decisions.",
    contact: {
      email: "kenfreundt2020@gmail.com",
      phone: "2037310003",
      profile: "#",
    },
    currentwidget: 62396,
    soldwidget: 62397,
  
  },
  
  {
    id: 5,
    name: "Tammi Ligouri",
    role: "Realtor",
    image: Tammy,
    about: `
      I have been honored to serve buyers and sellers in Connecticut for almost 20 years. As a dedicated mom of two school-aged children, I understand the importance of finding the perfect home for your family. My career in real estate stems from my genuine enjoyment of working with and helping people. I thrive on thinking outside of the box and finding alternative solutions when presented with a challenge.

      In my free time, I love spending time with my family, watching my girls play softball, and go-kart racing. These activities bring me joy and balance in my life.

      Whether you are buying or selling, I am here to guide you through the process with dedication and expertise. Contact me today, and let's turn your real estate dreams into reality.
    `,
    contact: {
      email: "tammirealtor@sbcglobal.net",
      phone: "2037881210",
      profile: "#",
    },
    currentwidget: 62400,
    soldwidget: 62401,
    
  },
  
  {
    id: 6,
    name: "Jean MacCarthy",
    role: "Realtor",
    image: Jean,
    about: "My goal is to provide professional service and knowledge to you my buyers and sellers, to help you make the best decision for your unique situation.",
    contact: {
      email: "jm55@aol.com",
      phone: "2034175946",
      profile: "#",
    },
    currentwidget: 62394,
    soldwidget: 62395,
    
  },
  {
    id: 7,
    name: "Brett Jackson",
    role: "Realtor",
    image: Brett,
    about: `
      Brett hails from sunny Tampa, Florida, bringing a vibrant and diverse background to her real estate career. With 25 years of experience as a makeup artist in fashion, celebrity, and advertising, she has worked with renowned brands such as Neiman Marcus, Target, Macy's, Sephora, Marc Jacobs, and spent six years with Victoria's Secret.

      A Ridgefield resident since 2008, Brett's innate ability to connect her knowledge on a personal level with both sellers and buyers sets her apart. Initially introduced to Independent Realty Group as a buyer, Brett forged such a deep friendship and compassion with the team that it compelled her to become a part of this amazing brokerage herself.

      Brett's training and knowledge of Ridgefield, Brookfield, and most notably Candlewood Lake, have served her well in just a few short years. She provides one-on-one unwavering support and guidance throughout the real estate process to her clients.

      “Being able to live and work in such a different setting from the city has brought me such joy. Fairfield County has so much to offer.”

      On or off the lake—let's connect!
    `,
    contact: {
      email: "#",
      phone: "9173317347",
      profile: "#",
    },
    currentwidget: 62391,
    soldwidget: 62384,
    
  }
  
];

function Agents() {
  return (
    <Section6 agents={agents}/>
  );
}

export default Agents;
