import React from "react";

import Section1 from "./section1"
import Section2 from "./section2"
import Section3 from "./section3"
import Section4 from "./section4"
import Section5 from "./section5"
import Section6 from "./section6"
import Section7 from "./section7"

import Christina from "../assets/images/christina.jpg";
import Izzy from "../assets/images/izzy.jpg";
import Sadie from "../assets/images/sadie.jpg";
import Tammy from "../assets/images/tammy.gif";

const agents = [
  {
    id: 1,
    name: "Christina Cavallo",
    role: "Owner/Broker",
    image: Christina,
    contact: {
      email: "#", // Replace with actual email link
      phone: "#", // Replace with actual phone link
      profile: "#", // Replace with actual profile link
    },
  },
  {
    id: 2,
    name: "Isabelle Cavallo",
    role: "Realtor",
    image: Izzy,
    contact: {
      email: "#",
      phone: "#",
      profile: "#",
    },
  },
  {
    id: 3,
    name: "Sadie Virtudes",
    role: "Realtor",
    image: Sadie,
    contact: {
      email: "#",
      phone: "#",
      profile: "#",
    },
  },
  {
    id: 4,
    name: "Tammi Ligouri",
    role: "Realtor",
    image: Tammy,
    contact: {
      email: "#",
      phone: "#",
      profile: "#",
    },
  },
];

function Home() {
    return (
      <>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        {/* <Section5 /> */}
        {/* <Section6 agents={agents} /> */}
        {/* <Section7 /> */}
      </>
    );
  }

export default Home;
