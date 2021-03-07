import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useTransform, useViewportScroll } from "framer-motion"
import Presentation from "../components/Presentation/Presentation";
import { Link, animateScroll as scroll } from "react-scroll";
import Contact from "../components/Contact/Contact"
import Projects from "../components/Projects/Projects"
import SkillSet from '../components/SkillSet/SkillSet';

const Home = ({imageDetails, image}) => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);


  return (
    <div className="App">
       <svg className="progress-icon" viewBox="0 0 60 60">
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1 // Reverse direction of line animation
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          strokeDasharray="0 1"
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
      </svg>
    <nav>
        <Link
         activeClass="active"
         to="Hello"
         spy={true}
         smooth={true}
         offset={70}
         duration={500}
        >
          Hello
        </Link>
        <Link activeClass="active"
          to="Portfolio"
          spy={true}
          smooth={true}
          offset={90}
          duration={500}
        >Portfolio
        </Link>
        <Link  activeClass="active"
          to="Services"
          spy={true}
          smooth={true}
          offset={70}
          duration={500}
        >Services</Link>
        <Link  activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={70}
          duration={500}
        >Contact</Link>
    </nav>
     <Presentation />
     <Projects imageDetails={imageDetails} image={image}/>
     <SkillSet />
     <Contact />
  </div>
  );
};

export default Home;