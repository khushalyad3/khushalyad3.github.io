import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import image1 from 'assets/1.jpg'
import image2 from 'assets/2.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SocialIcon } from 'react-social-icons';
import TypingAnimator from 'react-typing-animator';
import { motion, useScroll, useSpring } from "framer-motion";

import React, { useEffect, useState } from "react";
import { Animate } from "react-move";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

// Animation
import { easeQuadInOut } from "d3-ease";
import { borderRadius, fontSize, padding } from '@mui/system'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const code0 = "<";
  const code1 = ">";
  const code2 = "/";
  const bannerTitle = "I Build";
  const [text, setText] = useState("")
  const fullText =
    ["UI/UX Design", "Web apps using React.Js/Next.js", "Mobile apps using Flutter", "Automation Tools", "Backend"]
  // useEffect(() => {
  //   // debugger;
  //   let index = 0;
  //   let newString = "";
  //   const interval = setInterval(async () => {
  //     console.log("indexxx remainder" + (index % fullText.length));
  //     console.log("whatttttttttttttttt" + (index));
  //     console.log("fulllllllllllllllll" + (fullText.length));
  //     const currentText = fullText[index % fullText.length];
  //     newString += currentText.charAt(newString.length);
  //     setText(newString);
  //     if (newString === currentText) {
  //       await delay(2000);
  //       index++;

  //       newString = "";
  //     }

  //   }, 300);
  //   return () => clearInterval(interval);
  // }, []);
  // const delay = (ms) => {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  const residenceInfo = [
    {
      id: 1,
      key: "Country",
      value: "India"
    },
    {
      id: 2,
      key: "State",
      value: "Delhi"
    }
  ];

  const speakingLanguages = [
    {
      id: 1,
      language: "Hindi",
      percentage: "100"
    },
    {
      id: 2,
      language: "English",
      percentage: "85"
    },
    {
      id: 3,
      language: "Spanish",
      percentage: "20"
    }
  ];
  const steps = [
    {
      id: 1,
      job: "Class 12th",
      name: "Chiranjiv Bharti School Gurgaon",
      year: "2015 - 2016",
      type: "Eductaion"
    },
    {
      id: 2,
      job: "Btech Computer Science",
      name: "Manav Rachna University",
      year: "2016 - 2020",
      type: "Eductaion"
    },
    {
      id: 3,
      job: "Flutter Developer",
      name: "All In One Software Solution Pvt ltd",
      year: "Mar 2021 - August 2022",
      type: "Full Time Job"
    },
    {
      id: 4,
      job: "Flutter Developer",
      name: "The All Safe",
      year: "August 2022 - Present",
      type: "Full Time Job"
    },
  ];
  const socialIcons = ["facebook",
    "github",
    "twitter",
    "youtube",
    "linkedin",
    "instagram"];
  const socialsIcon =
  {
    height: "2.1rem",
    width: "2.1rem",
    boxShadow: "8px 8px 80px rgba(0, 0, 0, 0.36)",
    borderRadius:"50%",
    // border:"0.1rem solid black"
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }} className={styles.container}>
          <div className={styles.sidebar}>
            <div className={styles.introductionGrid}>
              <div className={styles.introductionBanner}>
                <div className={styles.profileBox}>
                  <div className={styles.profile}>
                  </div>
                </div>
                <div className={styles.introductionCard}>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.5 }} ><h2 className='bd1'>
                      Hi, I&apos;m <span style={{ color: "orange" }}>Khushal yadav</span>
                    </h2>
                  </motion.div>
                  <br></br>
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.8 }} className={styles.littleAboutMe}>
                    <p>
                      <b>Software Engineer</b> having 2 years of experience in mobile app development using flutter and web apps using react js.
                    </p>
                    <h5>
                      Last Update: 19 March 2023
                    </h5>

                  </motion.div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5 }} className={styles.basicInfo}>
              {/* <div className={styles.divider}></div> */}
              {residenceInfo.map((item) => <div key={item.id} className={styles.lang}>
                <h4 key={item.id}>{item.key}:</h4>
                <p key={item.id}>{item.value}</p>
              </div>)}
              <div className={styles.divider}></div>
              <div className={styles.languageKnown}>
                {speakingLanguages.map((item) => <AnimatedProgressProvider
                key={item.id}
                  valueStart={item.percentage}
                  valueEnd={item.percentage}
                  duration={1}
                  easingFunction={easeQuadInOut}>
                  {value => {
                    const roundedValue = Math.round(value);
                    return (
                      <div>
                        <CircularProgressbar
                          backgroundColor="orange"
                          value={value}
                          text={`${roundedValue}%`}
                          strokeWidth={5}
                          styles={buildStyles({ pathTransition: "none", backgroundColor: "orange", pathColor: "orange", trailColor: "black", textColor: "orange", textSize: "1.6rem" })}
                          counterClockwise
                          className={styles.circularIndicator}
                        />
                        <div className='pdt_0_5'></div>
                        <p>{item.language}</p>
                      </div>
                    );
                  }}
                </AnimatedProgressProvider>)}
              </div>
              <div>
                {Languages()}
              </div>
            </motion.div>
            <div className={
              styles.socials}>
              {socialIcons.map((e) => 
                <SocialIcon key={e.key} network={e} style={socialsIcon} fgColor={"white"} bgColor={"black"} />
              )}
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.coverImage}>
              {/* <Image
                      src={image1}
                    fill={true}
                    /> */}
              <div className={styles.coverImageOverlay}>
                <div className={styles.aboutME}>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.5 }} >
                    <h1 className='bd2'>SOFTWARE ENGINEER</h1>
                    <span style={{ display: "flex", flexWrap: "wrap" }}>
                      <h4>{code0}</h4>
                      <h4 style={{ color: "orange" }}>code</h4>
                      <h4>{code1}</h4>
                      &nbsp;
                      <h4>{bannerTitle}</h4>
                      &nbsp;
                      <h4 key={fullText.key}>
                        <TypingAnimator
                          textArray={fullText}
                          cursorColor="#fff"
                          textColor="#fff"
                          fontSize="1.2rem"
                          typingSpeed={90}
                          delaySpeed={1500}
                        />
                      </h4>
                      &nbsp;
                      <h4>{code0}</h4>
                      <h4>{code2}</h4>
                      <h4 style={{ color: "orange" }}>code</h4>
                      <h4>{code1}</h4>
                    </span>
                    <button className="button mgt_2 mgb_1">
                      <p className='bd2'>Contact Me</p>
                    </button>
                  </motion.div>
                  <div className={styles.image2}>
                    <Image
                      src={image2}
                      height={250}
                      width={250}
                      alt={"image"}
                    />
                  </div>
                </div>
                <div className='pdt_2 pdb_1' style={{ width: "100%", textAlign: 'left' }}>
                  {Titles("Education/Experiences")}
                </div>
                <div className={styles.parentExperience}>
                  <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={-1} nonLinear={true} alternativeLabel style={{ textAlign: "center" }}>
                      {steps.map((label) => (
                        <Step key={label.id}>
                          <StepLabel> <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.5 }}>  <h5 style={{ color: "orange", fontWeight: "bold", padding: "0.2rem", borderRadius: "2px" }}>{label.job}</h5>
                          </motion.div></StepLabel>

                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.8 }} style={{ color: "white", fontWeight: "bold", padding: "0.4rem", borderRadius: "2px" }}>
                            <h6 className='pdt_0_2'>{label.name}</h6>
                            <h6 className='pdt_0_2'>{label.year}</h6>
                            <h6 className='pdt_0_2'>({label.type})</h6>
                          </motion.div>
                        </Step>
                      ))}
                    </Stepper>
                  </Box>
                </div>
                <div className='pdt_2 pdb_1' style={{ width: "100%", textAlign: 'left' }}>
                  {Titles("Projects")}
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  )
}


export const Languages = () => {
  const languageKnown =
    [
      {
        id: 1,
        name: "Flutter/Dart",
        experience: "2 years",
        persentage: "90",
        specialize: "hybrid apps",
        type: "Frontend"
      },
      {
        id: 2,
        name: "Html/Css",
        experience: "2 years",
        persentage: "80",
        specialize: "web apps",
        type: "Frontend"
      },
      {
        id: 3,
        name: "React JS",
        experience: "8 months",
        persentage: "70",
        specialize: "web apps",
        type: "Frontend"

      },
      {
        id: 4,
        name: "C#",
        experience: "1 years",
        persentage: "70",
        specialize: "web apps",
        type: "Backend"
      },
      {
        id: 5,
        name: "Firebase",
        experience: "1 years",
        persentage: "80",
        specialize: "serverless backend",
        type: "Databases"
      },
      {
        id: 6,
        name: "No SQL",
        experience: "1 years",
        persentage: "80",
        specialize: "database",
        type: "Databases"
      },
      {
        id: 7,
        name: ".net",
        experience: "1 years",
        persentage: "70",
        specialize: "web apps",
        type: "Frontend"
      },
      {
        id: 8,
        name: "Microsoft server SQL",
        experience: "1 years",
        persentage: "80",
        specialize: "database",
        type: "Databases"

      },
      {
        id: 9,
        name: "Supabase",
        experience: "1 months",
        persentage: "60",
        specialize: "serverless backend",
        type: "Databases"
      },
      {
        id: 10,
        name: "Swift",
        experience: "6 months",
        persentage: "40",
        specialize: "iOS apps",
        type: "Frontend"

      },
      {
        id: 11,
        name: "Kotlin",
        experience: "6 months",
        persentage: "30",
        specialize: "android apps",
        type: "Frontend"
      },
      {
        id: 12,
        name: "Java",
        experience: "6 months",
        persentage: "30",
        specialize: "android apps",
        type: "Frontend"
      },
      {
        id: 13,
        name: "React Native",
        experience: "0 months",
        persentage: "10",
        specialize: "hybrids apps",
        type: "Frontend"
      },
      {
        id: 14,
        name: "Node JS",
        experience: "6 months",
        persentage: "40",
        specialize: "serverside backend",
        type: "Backend"
      }

    ];
  const typeOfLang = [
    "Frontend", "Backend", "Databases"
  ];
  return (
    <>
      {typeOfLang.map((e) =>
        <div key={e.key} className={styles.titleType}>
          {/* <div className={styles.divider}></div> */}
          <h3>{e}</h3>

          {languageKnown.map((item) => {
            if (e == item.type)
              return <div className={styles.listOfLang}>
                <div className={styles.lang}>
                  <p key={item.id}>{item.name}</p>
                  <p key={item.id}>{item.persentage}%</p>
                </div>
                <div className='pd_0_1'></div>
                <Progressbar bgcolor="orange" progress={item.persentage} height={3} />
                <div className='pd_0_2'></div>
              </div>

          })
          }
        </div>
      )}

    </>
  );
}


export const Progressbar = ({ bgcolor, progress, height }) => {

  const Parentdiv = {
    height: height,
    backgroundColor: 'black',
    borderRadius: 40,
    marginBottom: 10,

  }

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right'
  }

  // const progresstext = {
  //   padding
  //   color: 'black',
  //   fontWeight: 900
  // }

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        {/* <span style={progresstext}>{`${progress}%`}</span> */}
      </div>
    </div>
  )
}

export class AnimatedProgressProvider extends React.Component {
  interval = undefined;

  state = {
    isAnimated: false
  };

  static defaultProps = {
    valueStart: 0
  };

  componentDidMount() {
    if (this.props.repeat) {
      this.interval = window.setInterval(() => {
        this.setState({
          isAnimated: !this.state.isAnimated
        });
      }, this.props.duration * 1000);
    } else {
      this.setState({
        isAnimated: !this.state.isAnimated
      });
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <Animate
        start={() => ({
          value: this.props.valueStart
        })}
        update={() => ({
          value: [
            this.state.isAnimated ? this.props.valueEnd : this.props.valueStart
          ],
          timing: {
            duration: this.props.duration * 1000,
            ease: this.props.easingFunction
          }
        })}
      >
        {({ value }) => this.props.children(value)}
      </Animate>
    );
  }
}

export const Titles = (titles) => {
  return (
    <>
      <h3 style={{ fontWeight: "bold" }}>{titles}</h3>
    </>)
}

