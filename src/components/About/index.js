import { useEffect, useState } from 'react';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a US Army veteran with 6 years of leadership and honorable
            service who is now a Full Stack Software Engineer. I am adaptable
            and eager to learn new skills since I place a high value on personal
            and professional development. I enjoy troubleshooting and process
            improvement, and I am energized by tasks that allow me to use my
            attention to detail. In my current position, I mostly work with
            react.js, SQL, and .NET Core (C#).
          </p>
          <p align="LEFT">
            I've worked in a variety of industries throughout the years, but the
            technical field has been by far the most fulfilling. I appreciate
            how technology always provides opportunities to learn and flourish.
            I am confident in my strong work ethic, optimistic attitude, and
            desire to learn. I also have the ability to work independently as
            well as in team environments.
          </p>
          <p>
            My experience on the task force sparked my interest in coding and
            inspired me to embark on my path to becoming a full-stack developer.
            I am a lifelong learner who takes pride in finding creative
            approaches to challenges that emerge in my personal and professional
            life.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
