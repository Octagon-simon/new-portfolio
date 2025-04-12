"use client"

import Image from "next/image"
import styles from "./page.module.css"
import { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { calculateDuration } from "../utils/dateUtils"
import { recentExperiences, calculateTotalExperience } from "../utils/experienceData"
import ScrollProgressBar from "../components/ScrollProgressBar"
import ThemeToggle from "../components/ThemeToggle"
import PrintResume from "../components/PrintResume"

//Techstack
const TechnologiesSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  return (
    <Slider {...settings}>
      <div>
        <Image src="/tech/Javascript.svg" alt="JavaScript" width={50} height={50} />
      </div>
      <div>
        <Image src="/tech/TypeScript.svg" alt="TypeScript" width={50} height={50} />
      </div>
      <div>
        <Image src="/tech/Nodejs.svg" alt="Node.js" width={50} height={50} />
      </div>
      <div>
        <Image src="/tech/React.svg" alt="React" width={50} height={50} />
      </div>
      <div>
        <Image src="/tech/Nextjs.svg" alt="Next.js" width={50} height={50} />
      </div>
      <div>
        <Image src="/tech/HTML5.svg" alt="HTML5" width={50} height={50} />
      </div>
      <div>
        <Image src="/tech/CSS.svg" alt="CSS" width={50} height={50} />
      </div>
      <div>
        <Image src="/tech/Github.svg" alt="GitHub" width={50} height={50} />
      </div>
      <div>
        <Image src="/tech/Git.svg" alt="Git" width={50} height={50} />
      </div>
      <div>
        <Image src="/tech/Figma.svg" alt="Figma" width={50} height={50} />
      </div>
    </Slider>
  )
}

//My projects
const ProjectsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <Slider {...settings}>
      <div className={`${styles.projectCard}`}>
        <div className={styles.projectCardHead}>
          <h4>Coding Blocks</h4>
          <div className={`${styles.dateBadge}`}>July 2021</div>
          <p>
            Using my PHP skills, I created a WordPress plugin that allows for the seamless embedding of styled code
            snippets within WordPress posts. This enhancement addresses the issue of unstyled default code snippets,
            providing a more appealing and readable presentation.
          </p>
        </div>
        <div className={styles.projectCardBody}>
          <div className={styles.badgeContainer}>
            <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
            <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>WordPress</div>
          </div>
          <div className={styles.imageContainer}>
            <a href="https://github.com/Octagon-simon/coding-blocks" rel="noreferrer noopener" target="_blank">
              <Image src="/projects/coding-blocks.webp" alt="" className="img is-fullwidth" width={500} height={500} />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.projectCard}`}>
        <div className={styles.projectCardHead}>
          <h4>Octavalidate</h4>
          <div className={`${styles.dateBadge}`}>January 2022</div>
          <p>
            This is a feature-reach form validation library that was built with Javascript and PHP and it helps to
            validate your client-side and server-side forms using sophisticated regular expressions & validation rules.
            You will find this project implemented as a form validation for the contact section.
          </p>
        </div>
        <div className={styles.projectCardBody}>
          <div className={styles.badgeContainer}>
            <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
            <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>Javascript</div>
          </div>
          <div className={styles.imageContainer}>
            <a href="https://github.com/octagon-simon/octaValidate" rel="noreferrer noopener" target="_blank">
              <Image src="/projects/octavalidate.webp" alt="" className="img is-fullwidth" width={500} height={500} />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.projectCard}`}>
        <div className={styles.projectCardHead}>
          <h4>Word Unscrambler</h4>
          <div className={`${styles.dateBadge}`}>August 2022</div>
          <p>
            This is a very small project that is built with Javascript that unscrambles any word so long as that word
            exists in the project's custom dictionary
          </p>
        </div>
        <div className={styles.projectCardBody}>
          <div className={styles.badgeContainer}>
            <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
            <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>Javascript</div>
          </div>
          <div className={styles.imageContainer}>
            <a
              href="https://github.com/Octagon-simon/Octagon-simon.github.io/tree/main/projects/unscrambler"
              rel="noreferrer noopener"
              target="_blank"
            >
              <Image
                src="/projects/word-unscrambler.webp"
                alt=""
                className="img is-fullwidth"
                width={500}
                height={500}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.projectCard}`}>
        <div className={styles.projectCardHead}>
          <h4>PostsAPIWP</h4>
          <div className={`${styles.dateBadge}`}>September 2022</div>
          <p>
            Leveraging my PHP expertise, I developed a WordPress plugin capable of generating a virtual API. This API
            enables users to easily share their WordPress posts with other websites, enhancing content distribution and
            integration capabilities.
          </p>
        </div>
        <div className={styles.projectCardBody}>
          <div className={styles.badgeContainer}>
            <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
            <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>WordPress</div>
          </div>
          <div className={styles.imageContainer}>
            <a href="https://octagon-simon.github.io/projects/posts-api-wp/" rel="noreferrer noopener" target="_blank">
              <Image src="/projects/posts-api-wp.webp" alt="" className="img is-fullwidth" width={500} height={500} />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.projectCard}`}>
        <div className={styles.projectCardHead}>
          <h4>NFT Marketplace</h4>
          <div className={`${styles.dateBadge}`}>November 2022</div>
          <p>
            This project, inspired by a 4-week coding challenge, allowed me to master my API integration skills by
            creating a simple web app that simulates the purchase of an NFT and specifically focuses on retrieving data
            from an NFT API endpoint.
          </p>
        </div>
        <div className={styles.projectCardBody}>
          <div className={styles.badgeContainer}>
            <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
            <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>Javascript</div>
          </div>
          <div className={styles.imageContainer}>
            <a
              href="https://github.com/Octagon-simon/Octagon-simon.github.io/tree/main/projects/nft"
              rel="noreferrer noopener"
              target="_blank"
            >
              <Image src="/projects/nefta-nft.webp" alt="" className="img is-fullwidth" width={500} height={500} />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.projectCard}`}>
        <div className={styles.projectCardHead}>
          <h4>SanBlog</h4>
          <div className={`${styles.dateBadge}`}>November 2022</div>
          <p>
            Using the MERN stack (MongoDB, ReactJS, ExpressJS, NodeJS), I built my very first full-stack application.
            It's a fully functional blogging website that represents a significant achievement in my development skills.
          </p>
        </div>
        <div className={styles.projectCardBody}>
          <div className={styles.badgeContainer}>
            <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
            <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>ReactJS</div>
          </div>
          <div className={styles.imageContainer}>
            <a href="https://github.com/Octagon-simon/san-blog" rel="noreferrer noopener" target="_blank">
              <Image src="/projects/sanblog.webp" alt="" className="img is-fullwidth" width={500} height={500} />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.projectCard}`}>
        <div className={styles.projectCardHead}>
          <h4>Oshare</h4>
          <div className={`${styles.dateBadge}`}>December 2022</div>
          <p>
            This is full-stack web app, built with PHP and ReactJS, that enables people to upload files and share the
            auto-generated links to these files. These files are deleted after 24 hours and the links revoked as well.
          </p>
        </div>
        <div className={styles.projectCardBody}>
          <div className={styles.badgeContainer}>
            <div className={`${styles.badge} ${styles.badgeBrandRose}`}>Offline</div>
            <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>ReactJS</div>
          </div>
          <div className={styles.imageContainer}>
            <a href="https://github.com/Octagon-simon/oshare" rel="noreferrer noopener" target="_blank">
              <Image src="/projects/oshare.webp" alt="" className="img is-fullwidth" width={500} height={500} />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.projectCard}`}>
        <div className={styles.projectCardHead}>
          <h4>TailorsKit</h4>
          <div className={`${styles.dateBadge}`}>March 2023</div>
          <p>
            This full-stack web app, built with PHP and ReactJS, empowers tailors to efficiently store and access
            clients' measurements (male and female) and create orders while showcasing their portfolio. It offers a
            responsive solution for tailors to manage their business needs.
          </p>
        </div>
        <div className={styles.projectCardBody}>
          <div className={styles.badgeContainer}>
            <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
            <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>ReactJS</div>
          </div>
          <div className={styles.imageContainer}>
            <a href="https://github.com/tekprenuers/tailors-kit" rel="noreferrer noopener" target="_blank">
              <Image src="/projects/tailorskit.webp" alt="" className="img is-fullwidth" width={500} height={500} />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.projectCard}`}>
        <div className={styles.projectCardHead}>
          <h4>Home Sparkle</h4>
          <div className={`${styles.dateBadge}`}>October 2023</div>
          <p>
            I honed my frontend skills through a fully responsive project, which I developed using Next.js and Bulma.
            This project was crafted from a Figma design, strengthening my proficiency in frontend web development.
          </p>
        </div>
        <div className={styles.projectCardBody}>
          <div className={styles.badgeContainer}>
            <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
            <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>NextJS</div>
          </div>
          <div className={styles.imageContainer}>
            <a href="https://github.com/Octagon-simon/home-sparkle" rel="noreferrer noopener" target="_blank">
              <Image src="/projects/home-sparkle.webp" alt="" className="img is-fullwidth" width={500} height={500} />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.projectCard}`}>
        <div className={styles.projectCardHead}>
          <h4>Furniro | E-commerce React Template</h4>
          <div className={`${styles.dateBadge}`}>December 2023</div>
          <p>
            A modern e-commerce template built with NextJS, featuring a responsive design, product filtering, cart
            functionality, and checkout process. This template provides a product filtering, cart functionality, and
            checkout process. This template provides a solid foundation for online furniture stores.
          </p>
        </div>
        <div className={styles.projectCardBody}>
          <div className={styles.badgeContainer}>
            <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
            <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>ReactJS</div>
          </div>
          <div className={styles.imageContainer}>
            <a href="#" rel="noreferrer noopener" target="_blank">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Furniro E-commerce Template"
                className="img is-fullwidth"
                width={500}
                height={500}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.projectCard}`}>
        <div className={styles.projectCardHead}>
          <h4>Rivabit</h4>
          <div className={`${styles.dateBadge}`}>November 2023</div>
          <p>
            A cryptocurrency exchange platform with real-time market data, secure wallet integration, and trading
            functionality. Built with React and Node.js, focusing on security and user experience.
          </p>
        </div>
        <div className={styles.projectCardBody}>
          <div className={styles.badgeContainer}>
            <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
            <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>Full Stack</div>
          </div>
          <div className={styles.imageContainer}>
            <a href="#" rel="noreferrer noopener" target="_blank">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Rivabit Platform"
                className="img is-fullwidth"
                width={500}
                height={500}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.projectCard}`}>
        <div className={styles.projectCardHead}>
          <h4>Aiforhomework</h4>
          <div className={`${styles.dateBadge}`}>February 2024</div>
          <p>
            An AI-powered educational platform that helps students with homework by providing step-by-step solutions and
            explanations. Built with Next.js and integrated with OpenAI's API.
          </p>
        </div>
        <div className={styles.projectCardBody}>
          <div className={styles.badgeContainer}>
            <div className={`${styles.badge} ${styles.badgeBrandRose}`}>Offline</div>
            <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>NextJS</div>
          </div>
          <div className={styles.imageContainer}>
            <a href="#" rel="noreferrer noopener" target="_blank">
              {/* <Image
                src="/placeholder.svg?height=500&width=500"
                alt="AI For Homework Platform"
                className="img is-fullwidth"
                width={500}
                height={500}
              /> */}
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.projectCard}`}>
        <div className={styles.projectCardHead}>
          <h4>Lagos Cafe</h4>
          <div className={`${styles.dateBadge}`}>January 2024</div>
          <p>
            A restaurant management system with online ordering, reservation, and inventory management features. Built
            with MERN stack and integrated with payment gateways for seamless transactions.
          </p>
        </div>
        <div className={styles.projectCardBody}>
          <div className={styles.badgeContainer}>
            <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
            <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>MERN Stack</div>
          </div>
          <div className={styles.imageContainer}>
            <a href="#" rel="noreferrer noopener" target="_blank">
              <Image
                src="/projects/lagos-cafe.webp"
                alt="Lagos Cafe Management System"
                className="img is-fullwidth"
                width={500}
                height={500}
              />
            </a>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default function Home() {
  const [dateRange, setDateRange] = useState(null)
  const [hasValidated, setHasValidated] = useState(false)
  const [totalExperience, setTotalExperience] = useState({ years: 0, months: 0, formatted: "" })

  useEffect(() => {
    // Calculate total experience when component mounts
    const experience = calculateTotalExperience()
    setTotalExperience(experience)

    // Add animation classes to elements when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      // Check if octaValidate is available in the global scope
      if (typeof window !== "undefined" && window.octaValidate) {
        const ov = new window.octaValidate("form_contact")

        if (ov.validate()) {
          e.currentTarget.submit()
        } else {
          setHasValidated(1) //same as true
          e.preventDefault()
        }
      } else {
        console.error("octaValidate is not available")
        e.currentTarget.submit() // Submit anyway if validation is not available
      }
    } catch (err) {
      console.error(err)
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <main className={styles.main}>
      {/* Accessibility skip link */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Scroll progress indicator */}
      <ScrollProgressBar />

      {/* Theme toggle button */}
      {/* <ThemeToggle /> */}

      {/* Add Print Resume button */}
      {/* <PrintResume /> */}

      <section className="hero is-medium">
        <div className={`hero-body is-justify-content-center ${styles.heroBody}`}>
          <div className="container">
            <div className={`columns ${styles.heroColumns} ${styles.heroDesktop}`}>
              <div className={`column is-align-self-center ${styles.heroColumnsItem} animate-on-scroll`}>
                <div className={styles.badge}>
                  <p>👋 Greetings!</p>
                </div>
                <div className={styles.heroNameContainer}>
                  <h1>Simon Ugorji ✨</h1>
                </div>
                <p style={{ marginBottom: "15px" }}>Software Engineer · Technical Writer · HNG11 Finalist</p>
                <div className={styles.heroSocial}>
                  {/* <GitH */}
                  <a href="https://github.com/Octagon-simon" aria-label="GitHub Profile">
                    <Image src={"/github.svg"} className="svg-white" alt="Check out my Github Profile" width={25} height={25} />
                  </a>
                  <a href="https://www.linkedin.com/in/simon-ugorji-57a6a41a3/" aria-label="LinkedIn Profile">
                    <Image src={"/linkedin.svg"} alt="Connect with me on LinkedIn" width={25} height={25} />
                  </a>
                </div>
              </div>
              <div
                className={`column is-align-self-center ${styles.heroColumnsItem} animate-on-scroll fade-in-delay-1`}
              >
                <Image
                  className={styles.heroMyMe}
                  src={"/AvatarAndIcons.webp"}
                  width={500}
                  height={500}
                  alt="Avatar and Icons"
                />
              </div>
              <div
                className={`column is-align-self-center ${styles.heroColumnsItem} animate-on-scroll fade-in-delay-2`}
              >
                <div className={styles.heroContactButtons}>
                  <a
                    className={`${styles.hasIcon} ${styles.downloadButton}`}
                    href="https://resume.creddle.io/resume/4n88q8aqyth"
                  >
                    Download CV{" "}
                    <span className="icon">
                      <Image src="/ArrowLineDown.svg" alt="Download CV Icon" width={20} height={20} />
                    </span>
                  </a>
                  <a href="https://wa.me/2348162273445" className={`button ${styles.isOutlined} ${styles.hasIcon}`}>
                    <span className="icon">
                      <Image src="/WhatsappLogo.svg" alt="Chat me up on whatsapp" width={20} height={20} />
                    </span>
                    Ping me on whatsapp
                  </a>
                </div>
              </div>
            </div>
            <div className={`${styles.heroMobile}`}>
              <div className={styles.heroSocial}>
                <a href="https://github.com/Octagon-simon" aria-label="GitHub Profile">
                  <Image src={"/github.svg"} className="svg-white" alt="Check out my Github Profile" width={25} height={25} />
                </a>
                <a href="https://www.linkedin.com/in/simon-ugorji-57a6a41a3/" aria-label="LinkedIn Profile">
                  <Image src={"/linkedin.svg"} alt="Connect with me on LinkedIn" width={25} height={25} />
                </a>
              </div>
              <div className={`has-text-centered`}>
                <Image
                  className={styles.heroMyMe}
                  src={"/AvatarAndIcons.webp"}
                  width={500}
                  height={500}
                  alt="Avatar and Icons"
                />
              </div>
              <div className={`${""}`}>
                <div className={styles.badge}>
                  <p>👋 Greetings!</p>
                </div>
                <div className={styles.heroNameContainer}>
                  <h1>Simon Ugorji ✨</h1>
                </div>
                <p style={{ marginBottom: "20px" }}>Software Developer · Technical Writer · HNG11 Finalist</p>
                <div className={styles.heroContactButtons}>
                  <a className={styles.hasIcon} href="https://resume.creddle.io/resume/4n88q8aqyth">
                    Download CV{" "}
                    <span className="icon">
                      <Image src="/ArrowLineDown.svg" alt="Download CV Icon" width={20} height={20} />
                    </span>
                  </a>
                  <a href="https://wa.me/2348162273445" className={`button ${styles.isOutlined} ${styles.hasIcon}`}>
                    <span className="icon">
                      <Image src="/WhatsappLogo.svg" alt="Chat me up on whatsapp" width={20} height={20} />
                    </span>
                    Ping me on whatsapp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="main-content" className={`${styles.sectionExperience} ${styles.sectionContent}`}>
        <div className="container">
          <div className={styles.experienceInner}>
            <div className={`${styles.experienceCards} animate-on-scroll`}>
              <div className={styles.experienceItem}>
                <div className={styles.experienceIcon}>
                  <Image src="/CodeIcon.svg" alt="Code Icon" width={80} height={80} />
                </div>
                <div className={styles.experienceContent}>
                  <p>{totalExperience.formatted} of</p>
                  <p>Experience</p>
                </div>
              </div>
              <div className={styles.experienceItem}>
                <div className={styles.experienceIcon}>
                  <Image src="/ProjectsIcon.svg" alt="Projects Icon" width={80} height={80} />
                </div>
                <div className={styles.experienceContent}>
                  <p>4 years of</p>
                  <p>Work</p>
                </div>
              </div>
              <div className={styles.experienceItem}>
                <div className={styles.experienceIcon}>
                  <Image src="/DesignIcon.svg" alt="Design Icon" width={80} height={80} />
                </div>
                <div className={styles.experienceContent}>
                  <p>3 years of</p>
                  <p>Technical Writing</p>
                </div>
              </div>
            </div>
            <div className={`${styles.experienceDescription} animate-on-scroll fade-in-delay-1`}>
              <div className={styles.descriptionItem}>
                <p>Fullstack</p>
                <p>Software Developer</p>
              </div>
              <div className={styles.descriptionItem}>
                <p>Dozens of projects and</p>
                <p>Experiences</p>
              </div>
              <div className={styles.descriptionItem}>
                <p>Proficient</p>
                <p>Technical Writer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.sectionAbout} ${styles.sectionContent}`}>
        <div className="container">
          <div className="columns is-align-content-center is-align-items-center">
            <div className="column is-4 is-align-self-center has-text-centered animate-on-scroll">
              <Image src="/simon-ugorji.webp" alt="Simon Ugorji" width={350} height={350} />
            </div>
            <div className="column"></div>
            <div className="column is-6 animate-on-scroll fade-in-delay-1">
              <div className={styles.badge}>
                <p>🧐 About me</p>
              </div>
              <div>
                <h3 className={styles.largeText}>Simon Ugorji (Octagon) ✨ </h3>
              </div>
              <article>
                I&apos;m a <strong>Software Engineer</strong> with over four years (4 years)
                of experience creating software solutions that meet and often surpass client needs. My skill set
                includes various programming languages and frameworks, backed by certifications from Udacity (JavaScript
                Programming Foundations), Coursera (Building Web Applications in PHP), Cisco (JavaScript Essentials and
                Advanced Training), and Udemy (The Complete 2024 Web Development Bootcamp, Understanding TypeScript).
                I&apos;m also a technical writer with a solid following, attracting over 10,000 monthly views on Medium,
                Hashnode, and Dev.to. I enjoy sharing knowledge about programming and new technologies.
                <br /> <br />
                In addition to my skills, I am also a Technical Support Agent. As a Technical Support Agent, I handle
                technical issues, and customer questions, and ensure clear communication. My goal is always to provide
                excellent support and keep customers satisfied - and this has been one of my strengths.
                <br /> <br />I work well in teams, manage my time effectively, and love solving problems with code. New
                challenges motivate me, and I always seek to improve and innovate.
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.sectionContent} ${styles.worksAndProjects}`}>
        <div className="container">
          <div className="columns">
            <div className="column animate-on-scroll">
              <div className={styles.badge}>
                <p>🔗 Portfolio</p>
              </div>
              <h3 className={styles.largeText}>Works &amp; Projects</h3>
            </div>
            <div className="column is-align-self-flex-end animate-on-scroll fade-in-delay-1">
              <div className={`buttons-group ${styles.worksAndProjectsBtnGroup}`}>
                <button
                  onClick={() => setDateRange(null)}
                  className={`button mr-3 ${styles.hasIcon} ${dateRange === null ? styles.isFilled : styles.isOutlined}`}
                >
                  All
                </button>
                <button
                  onClick={() => setDateRange("2021")}
                  className={`button mr-3 ${dateRange === "2021" ? styles.isFilled : styles.isOutlined} ${styles.hasIcon}`}
                >
                  2021
                </button>
                <button
                  onClick={() => setDateRange("2022")}
                  className={`button mr-3 ${styles.hasIcon} ${dateRange === "2022" ? styles.isFilled : styles.isOutlined}`}
                >
                  2022
                </button>
                <button
                  onClick={() => setDateRange("2023")}
                  className={`button mr-3 ${styles.hasIcon} ${dateRange === "2023" ? styles.isFilled : styles.isOutlined}`}
                >
                  2023
                </button>
                <button
                  onClick={() => setDateRange("2024")}
                  className={`button mr-3 ${styles.hasIcon} ${dateRange === "2024" ? styles.isFilled : styles.isOutlined}`}
                >
                  2024
                </button>
                <button
                  onClick={() => setDateRange("2025")}
                  className={`button ${styles.hasIcon} ${dateRange === "2025" ? styles.isFilled : styles.isOutlined}`}
                >
                  2025
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.projectCardsContainer} animate-on-scroll`}>
            <div className={`${styles.projectCard} ${dateRange && dateRange !== "2021" && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>Coding Blocks</h4>
                <div className={`${styles.dateBadge}`}>July 2021</div>
                <p>
                  Using my PHP skills, I created a WordPress plugin that allows for the seamless embedding of styled
                  code snippets within WordPress posts. This enhancement addresses the issue of unstyled default code
                  snippets, providing a more appealing and readable presentation.
                </p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>WordPress</div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="https://github.com/Octagon-simon/coding-blocks" rel="noreferrer noopener" target="_blank">
                    <Image
                      src="/projects/coding-blocks.webp"
                      alt=""
                      className="img is-fullwidth"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${dateRange && dateRange !== "2022" && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>Octavalidate</h4>
                <div className={`${styles.dateBadge}`}>January 2022</div>
                <p>
                  This is a feature-reach form validation library that was built with Javascript and PHP and it helps to
                  validate your client-side and server-side forms using sophisticated regular expressions & validation
                  rules. You will find this project implemented as a form validation for the contact section.
                </p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>Javascript</div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="https://github.com/octagon-simon/octaValidate" rel="noreferrer noopener" target="_blank">
                    <Image
                      src="/projects/octavalidate.webp"
                      alt=""
                      className="img is-fullwidth"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${dateRange && dateRange !== "2022" && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>Word Unscrambler</h4>
                <div className={`${styles.dateBadge}`}>August 2022</div>
                <p>
                  This is a very small project that is built with Javascript that unscrambles any word so long as that
                  word exists in the project's custom dictionary
                </p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>Javascript</div>
                </div>
                <div className={styles.imageContainer}>
                  <a
                    href="https://github.com/Octagon-simon/Octagon-simon.github.io/tree/main/projects/unscrambler"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <Image
                      src="/projects/word-unscrambler.webp"
                      alt=""
                      className="img is-fullwidth"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${dateRange && dateRange !== "2022" && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>PostsAPIWP</h4>
                <div className={`${styles.dateBadge}`}>September 2022</div>
                <p>Leveraging my PHP expertise, I developed a WordPress plugin capable of generating a virtual API.</p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>WordPress</div>
                </div>
                <div className={styles.imageContainer}>
                  <a
                    href="https://octagon-simon.github.io/projects/posts-api-wp/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <Image
                      src="/projects/posts-api-wp.webp"
                      alt=""
                      className="img is-fullwidth"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${dateRange && dateRange !== "2022" && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>NFT Marketplace</h4>
                <div className={`${styles.dateBadge}`}>November 2022</div>
                <p>
                  This project, inspired by a 4-week coding challenge, allowed me to master my API integration skills by
                  creating a simple web app that simulates the purchase of an NFT and specifically focuses on retrieving
                  data from an NFT API endpoint.
                </p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>Javascript</div>
                </div>
                <div className={styles.imageContainer}>
                  <a
                    href="https://github.com/Octagon-simon/Octagon-simon.github.io/tree/main/projects/nft"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <Image
                      src="/projects/nefta-nft.webp"
                      alt=""
                      className="img is-fullwidth"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${dateRange && dateRange !== "2022" && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>SanBlog</h4>
                <div className={`${styles.dateBadge}`}>November 2022</div>
                <p>
                  Using the MERN stack (MongoDB, ReactJS, ExpressJS, NodeJS), I built my very first full-stack
                  application. It's a fully functional blogging website that represents a significant achievement in my
                  development skills.
                </p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>ReactJS</div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="https://github.com/Octagon-simon/san-blog" rel="noreferrer noopener" target="_blank">
                    <Image src="/projects/sanblog.webp" alt="" className="img is-fullwidth" width={500} height={500} />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${dateRange && dateRange !== "2022" && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>Oshare</h4>
                <div className={`${styles.dateBadge}`}>December 2022</div>
                <p>
                  This full-stack web app, built with PHP and ReactJS, that enables people to upload files and share the
                  auto-generated links to these files. These files are deleted after 24 hours and the link revoked as
                  well.
                </p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandRose}`}>Offline</div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>ReactJS</div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="https://github.com/Octagon-simon/oshare" rel="noreferrer noopener" target="_blank">
                    <Image src="/projects/oshare.webp" alt="" className="img is-fullwidth" width={500} height={500} />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${dateRange && dateRange !== "2023" && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>TailorsKit</h4>
                <div className={`${styles.dateBadge}`}>March 2023</div>
                <p>
                  This full-stack web app, built with PHP and ReactJS, empowers tailors to efficiently store and access
                  clients' measurements (male and female) and create orders while showcasing their portfolio. It offers
                  a responsive solution for tailors to manage their business needs.
                </p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>ReactJS</div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="https://github.com/tekprenuers/tailors-kit" rel="noreferrer noopener" target="_blank">
                    <Image
                      src="/projects/tailorskit.webp"
                      alt=""
                      className="img is-fullwidth"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${dateRange && dateRange !== "2023" && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>Home Sparkle</h4>
                <div className={`${styles.dateBadge}`}>October 2023</div>
                <p>
                  I honed my frontend skills through a fully responsive project, which I developed using Next.js and
                  Bulma. This project was crafted from a Figma design, strengthening my proficiency in frontend web
                  development.
                </p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>NextJS</div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="https://github.com/Octagon-simon/home-sparkle" rel="noreferrer noopener" target="_blank">
                    <Image
                      src="/projects/home-sparkle.webp"
                      alt="Home sparkles project"
                      className="img is-fullwidth"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={`${styles.projectCard} ${dateRange && dateRange !== "2024" && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>Furniro | E-commerce React Template</h4>
                <div className={`${styles.dateBadge}`}>December 2024</div>
                <p>
                  Furniro is a fully responsive, feature-rich e-commerce platform built with Next.js and ChakraUI. It
                  offers a clean, intuitive UI and seamless user experience, perfect for businesses looking to sell
                  products online
                </p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>NextJS</div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="https://furniro-0zce.onrender.com/" rel="noreferrer noopener" target="_blank">
                    <Image
                      src="/projects/furniro.webp"
                      alt="Furniro E-commerce Template"
                      className="img is-fullwidth"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${dateRange && dateRange !== "2025" && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>Rivabit</h4>
                <div className={`${styles.dateBadge}`}>January 2025</div>
                <p>
                  Rivabit ensures product authenticity and safeguards your brand. Using QR codes, NFC/RFID tags, and
                  digital watermarks, we offer robust protection against counterfeit threats.
                </p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>Full Stack</div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="https://rivabit.com" rel="noreferrer noopener" target="_blank">
                    <Image
                      src="/projects/rivabit.webp"
                      alt="Rivabit Platform"
                      className="img is-fullwidth"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${dateRange && dateRange !== "2024" && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>Aiforhomework</h4>
                <div className={`${styles.dateBadge}`}>February 2024</div>
                <p>
                  An AI-powered educational platform that helps students with homework by providing step-by-step
                  solutions and explanations. Built with Next.js and integrated with OpenAI's API.
                </p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                <div className={`${styles.badge} ${styles.badgeBrandRose}`}>Offline</div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>NextJS</div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="https://aiforhomework.com" rel="noreferrer noopener" target="_blank">
                    {/* <Image
                      src="/placeholder.svg?height=500&width=500"
                      alt="AI For Homework Platform"
                      className="img is-fullwidth"
                      width={500}
                      height={500}
                    /> */}
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${dateRange && dateRange !== "2024" && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>Lagos Cafe</h4>
                <div className={`${styles.dateBadge}`}>April 2024</div>
                <p>
                  A restaurant management system with online ordering, reservation, and inventory management features.
                  Built with Wix and integrated with payment gateways for seamless transactions.
                </p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>Online</div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>Wix</div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="https://lagoscafe.com" rel="noreferrer noopener" target="_blank">
                    <Image
                      src="/projects/lagos-cafe.webp"
                      alt="Lagos Cafe Management System"
                      className="img is-fullwidth"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.projectCardsContainerMobile}>
            <ProjectsSlider />
          </div>
          <div className={`${styles.seeMore} animate-on-scroll`}>
            <a
              className={`${styles.hasIcon} ${styles.anchorTag}`}
              href="https://simon-ugorji.medium.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Check out my blog on Medium{" "}
              <span className="icon">
                <Image src="/ArrowRight.svg" width={20} height={20} alt="Arrow Right Icon" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.sectionContent} ${styles.skillsSection}`}>
        <div className="container">
          <div className={`${styles.badge} animate-on-scroll`}>
            <p>🧑‍💻 Skills</p>
          </div>
          <h4 className={`${styles.largeText} animate-on-scroll`}>Technologies & Skills</h4>

          <div className={`${styles.techIconsWrapper} animate-on-scroll fade-in-delay-1`}>
            <div className="mb-5">
              <p className="mb-5">Technologies that I use everyday</p>

              <ul className={`hide-on-mobile ${styles.techIcons}`}>
                <li>
                  <Image src="/tech/Javascript.svg" alt="" width={50} height={50} />
                </li>
                <li>
                  <Image src="/tech/TypeScript.svg" alt="" width={50} height={50} />
                </li>
                <li>
                  <Image src="/tech/Nodejs.svg" alt="" width={50} height={50} />
                </li>
                <li>
                  <Image src="/tech/React.svg" alt="" width={50} height={50} />
                </li>
                <li>
                  <Image src="/tech/Nextjs.svg" alt="" width={50} height={50} />
                </li>
                <li>
                  <Image src="/tech/HTML5.svg" alt="" width={50} height={50} />
                </li>
                <li>
                  <Image src="/tech/CSS.svg" alt="" width={50} height={50} />
                </li>
                <li>
                  <Image src="/tech/Github.svg" alt="" width={50} height={50} />
                </li>
                <li>
                  <Image src="/tech/Git.svg" alt="" width={50} height={50} />
                </li>
                <li>
                  <Image src="/tech/Figma.svg" alt="" width={50} height={50} />
                </li>
              </ul>

              <div className={`show-on-mobile`}>
                <TechnologiesSlider />
              </div>
            </div>
            <div>
              <p className="mb-5">Databases that I use everyday</p>
              <ul className={styles.techIcons}>
                <li>
                  <Image src="/tech/MongoDB.svg" alt="" width={25} height={25} />
                </li>
                <li>
                  <Image src="/tech/Sql.svg" alt="" width={50} height={50} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.sectionContent} ${styles.certificatesSection}`}>
        <div className="container">
          <div className={`${styles.badge} animate-on-scroll`}>
            <p>🎓 Certifications</p>
          </div>
          <h4 className={`${styles.largeText} animate-on-scroll`}>Certificates & Licenses</h4>

          <div className={`${styles.certificatesWrapper} animate-on-scroll fade-in-delay-1`}>
            <div className="columns is-multiline">
              <div className="column is-6-tablet is-4-desktop">
                <div className={`${styles.certificateCard} ${styles.hoverLift}`}>
                  <h5>Full Stack Web Development</h5>
                  <p className="mb-3">Certificate</p>
                  <a
                    href="https://drive.google.com/file/d/1DZOTmO7IDND819Ofj2o8LiEbkJaCx2pN/view?usp=drivesdk"
                    className={`${styles.hasIcon} ${styles.anchorTag}`}
                  >
                    View Certificate
                    <span className="icon">
                      <Image src="/ArrowRight.svg" width={20} height={20} alt="View Certificate" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="column is-6-tablet is-4-desktop">
                <div className={styles.certificateCard}>
                  <h5>Building Web Applications in PHP</h5>
                  <p className="mb-3">Coursera</p>
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/VZFVX235P9J6"
                    className={`${styles.hasIcon} ${styles.anchorTag}`}
                  >
                    View Certificate
                    <span className="icon">
                      <Image src="/ArrowRight.svg" width={20} height={20} alt="View Certificate" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="column is-6-tablet is-4-desktop">
                <div className={styles.certificateCard}>
                  <h5>JavaScript Essentials 1</h5>
                  <p className="mb-3">Cisco</p>
                  <a
                    href="https://www.credly.com/badges/d600cd68-9a13-4687-bafc-1af79ebc30d5/linked_in_profile"
                    className={`${styles.hasIcon} ${styles.anchorTag}`}
                  >
                    View Certificate
                    <span className="icon">
                      <Image src="/ArrowRight.svg" width={20} height={20} alt="View Certificate" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="column is-6-tablet is-4-desktop">
                <div className={styles.certificateCard}>
                  <h5>HNG Finalist Certificate</h5>
                  <p className="mb-3">HNG Internship</p>
                  <a href="https://certgo.app/c-45408da3" className={`${styles.hasIcon} ${styles.anchorTag}`}>
                    View Certificate
                    <span className="icon">
                      <Image src="/ArrowRight.svg" width={20} height={20} alt="View Certificate" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="column is-6-tablet is-4-desktop">
                <div className={styles.certificateCard}>
                  <h5>JavaScript Programming Foundations</h5>
                  <p className="mb-3">Udacity</p>
                  <a
                    href="https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/bfdb6937-2cff-4c3a-9098-4bde9e36e214.pdf"
                    className={`${styles.hasIcon} ${styles.anchorTag}`}
                  >
                    View Certificate
                    <span className="icon">
                      <Image src="/ArrowRight.svg" width={20} height={20} alt="View Certificate" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="column is-6-tablet is-4-desktop">
                <div className={styles.certificateCard}>
                  <h5>Control Panel University</h5>
                  <p className="mb-3">Certificate</p>
                  <a href="#" className={`${styles.hasIcon} ${styles.anchorTag}`}>
                    View Certificate
                    <span className="icon">
                      <Image src="/ArrowRight.svg" width={20} height={20} alt="View Certificate" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="column is-6-tablet is-4-desktop">
                <div className={styles.certificateCard}>
                  <h5>Hack 2022 Participation Certificate</h5>
                  <p className="mb-3">Hackathon</p>
                  <a
                    href="https://drive.google.com/file/d/1Cd5u1dM0RI7S2FxKg45ibvpYuaAvKhmM/view"
                    className={`${styles.hasIcon} ${styles.anchorTag}`}
                  >
                    View Certificate
                    <span className="icon">
                      <Image src="/ArrowRight.svg" width={20} height={20} alt="View Certificate" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="column is-6-tablet is-4-desktop">
                <div className={styles.certificateCard}>
                  <h5>ICDL Profile</h5>
                  <p className="mb-3">International Computer Driving License</p>
                  <a
                    href="https://profile.icdlafrica.org/859840e5-bead-4085-945f-4e36bb969174"
                    className={`${styles.hasIcon} ${styles.anchorTag}`}
                  >
                    View Certificate
                    <span className="icon">
                      <Image src="/ArrowRight.svg" width={20} height={20} alt="View Certificate" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.sectionContent} ${styles.journeySection}`}>
        <div className="container">
          <div className={`m-auto ${styles.badge} animate-on-scroll`}>
            <p>💼 Career</p>
          </div>
          <h4 className={`has-text-centered ${styles.largeText} animate-on-scroll`}>Professional Experience</h4>

          <div className={`${styles.experienceTimeline} animate-on-scroll fade-in-delay-1`}>
            {recentExperiences.map((exp, index) => (
              <div key={index} className={`${styles.experienceItem} ${styles.hoverLift}`}>
                <div className={styles.experienceHeader}>
                  <h5>{exp.title}</h5>
                  <div className={styles.companyInfo}>
                    <span className={styles.companyName}>{exp.company}</span>
                    <span className={styles.duration}>
                      {calculateDuration(exp.startDate, exp.endDate)}
                      <span className={styles.dateRange}>
                        {" "}
                        ({exp.startDate} - {exp.endDate})
                      </span>
                    </span>
                  </div>
                  <p className={styles.location}>{exp.location}</p>
                  {exp.jobType && <p className={styles.jobType}>{exp.jobType}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className={`${styles.viewMoreExperience} animate-on-scroll fade-in-delay-2`}>
            <a
              className={`${styles.hasIcon} ${styles.anchorTag} ${styles.viewMoreButton}`}
              href="https://www.linkedin.com/in/simon-ugorji-57a6a41a3/"
              target="_blank"
              rel="noreferrer noopener"
            >
              View more experience on LinkedIn{" "}
              <span className="icon">
                <Image src="/ArrowRight.svg" width={20} height={20} alt="Arrow Right Icon" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.sectionContent} ${styles.contactSection}`}>
        <div className="container">
          <div className={`m-auto ${styles.badge} animate-on-scroll`}>
            <p>📬 Contact</p>
          </div>
          <h4 className={`has-text-centered ${styles.largeText} animate-on-scroll`}>Send me a message!</h4>

          <div className={`${styles.contactForm} animate-on-scroll fade-in-delay-1`}>
            {hasValidated && (
              <div className="notification is-success is-light mb-3">
                Do you like what you see? This form validation was served by my project Octavalidate!
              </div>
            )}

            <form
              noValidate
              method="post"
              action="https://formbold.com/s/35Ey3"
              id="form_contact"
              onSubmit={handleSubmit}
              suppressHydrationWarning
            >
              <div className="field mb-3">
                <label className={`label ${styles.label}`}>Your email (*)</label>
                <input
                  ov-required-msg="Your email address is required"
                  ov-email-msg="Please provide a valid email address"
                  name="email"
                  type="email"
                  octavalidate="R,EMAIL"
                  id="inp_email"
                  className={`input ${styles.input}`}
                  placeholder="me@you.com"
                  suppressHydrationWarning
                />
              </div>
              <div className="field mb-3">
                <label className={`label ${styles.label}`}>Your name (*)</label>
                <input
                  type="text"
                  name="name"
                  ov-required-msg="Your name is required"
                  octavalidate="R,ALPHA_SPACES"
                  id="inp_name"
                  className={`input ${styles.input}`}
                  placeholder="John Doe"
                  suppressHydrationWarning
                />
              </div>
              <div className="field mb-3">
                <label className={`label ${styles.label}`}>Subject (*)</label>
                <input
                  name="subject"
                  type="text"
                  ov-required-msg="Email subject is required"
                  octavalidate="R,TEXT"
                  id="inp_subject"
                  className={`input ${styles.input}`}
                  placeholder="Partnership"
                  suppressHydrationWarning
                />
              </div>
              <div className="field mb-5">
                <label className={`label ${styles.label}`}>Message (*)</label>
                <textarea
                  name="message"
                  style={{ minHeight: "150px" }}
                  id="inp_message"
                  octavalidate="R,TEXT"
                  ov-required-msg="Your message is required"
                  placeholder="Hello, I'm John from"
                  className={`input ${styles.input}`}
                  suppressHydrationWarning
                ></textarea>
              </div>
              <div className="field mb-3">
                <button className={`button ${styles.contactButton}`}>Send message</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className={`${styles.sectionContent} has-text-centered`}>
        <button onClick={() => scrollToTop()} className={`${styles.hasIcon} ${styles.backToTop}`}>
          Back to top{" "}
          <span className="icon">
            <Image src="/ArrowUp.svg" alt="Arrow Up" width={20} height={20} />
          </span>
        </button>
      </section>
    </main>
  )
}
