"use client"

import Image from 'next/image'
import styles from './Page.module.css'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {

  const [dateRange, setDateRange] = useState("2022")

  return (
    <main className={styles.main}>
      <section className="hero is-medium">
        <div className={`hero-body is-justify-content-center ${styles.heroBody}`}>
          <div className='container'>
            <div className={`columns ${styles.heroColumns} ${styles.heroDesktop}`}>
              <div className={`column is-align-self-center ${styles.heroColumnsItem}`}>
                <div className={styles.greetingsContainer}>
                  <p>👋 Greetings!</p>
                </div>
                <div className={styles.heroNameContainer}>
                  <h1>Simon Ugorji</h1>
                </div>
                <p style={{ marginBottom: '15px' }}>Software Developer · Technical Writer</p>
                <div className={styles.heroSocial}>
                  <a href="">
                    <Image src={'./github.svg'} alt='Check out my Github Profile' width={25} height={25} />
                  </a>
                  <a href="">
                    <Image src={'./linkedin.svg'} alt='Connect with me on LinkedIn' width={25} height={25} />
                  </a>
                </div>
              </div>
              <div className={`column is-align-self-center ${styles.heroColumnsItem}`}>
                <Image className={styles.heroMyMe} src={'./my-me.svg'} width={500} height={500} alt='Simon Ugorji' />
              </div>
              <div className={`column is-align-self-center ${styles.heroColumnsItem}`}>
                <div className={styles.heroContactButtons}>
                  <a className={styles.hasIcon} href=''>
                    Download CV <span className='icon'>
                      <Image src="./arrowLineDown.svg" alt='Download CV Icon' width={20} height={20} /></span>
                  </a>
                  <button className={`button ${styles.isOutlined} ${styles.hasIcon}`}>
                    <span className='icon'>
                      <Image src="./WhatsappLogo.svg" alt="Chat me up on whatsapp" width={20} height={20} />
                    </span>Ping me on whatsapp
                  </button>
                </div>
              </div>
            </div>
            <div className={`${styles.heroMobile}`}>
              <div className={styles.heroSocial}>
                <a href="">
                  <Image src={'./github.svg'} alt='Check out my Github Profile' width={25} height={25} />
                </a>
                <a href="">
                  <Image src={'./linkedin.svg'} alt='Connect with me on LinkedIn' width={25} height={25} />
                </a>
              </div>
              <div className={`has-text-centered`}>
                <Image className={styles.heroMyMe} src={'./my-me.svg'} width={500} height={500} alt='Simon Ugorji' />
              </div>
              <div className={`${''}`}>
                <div className={styles.greetingsContainer}>
                  <p>👋 Greetings!</p>
                </div>
                <div className={styles.heroNameContainer}>
                  <h1>Simon Ugorji</h1>
                </div>
                <p style={{ marginBottom: '20px' }}>Software Developer · Technical Writer</p>
                <div className={styles.heroContactButtons}>
                  <a className={styles.hasIcon} href=''>
                    Download CV <span className='icon'>
                      <Image src="./arrowLineDown.svg" alt='Download CV Icon' width={20} height={20} /></span>
                  </a>
                  <button className={`button ${styles.isOutlined} ${styles.hasIcon}`}>
                    <span className='icon'>
                      <Image src="./WhatsappLogo.svg" alt="Chat me up on whatsapp" width={20} height={20} />
                    </span>Ping me on whatsapp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section>
      <section className={`${styles.sectionExperience} ${styles.sectionContent}`}>
        <div className='container'>
          <div className={styles.experienceInner}>

            <div className={styles.experienceCards}>
              <div className={styles.experienceItem}>
                <div className={styles.experienceIcon}>
                  <Image src="./CodeIcon.svg" alt="De" width={80} height={80} />
                </div>
                <div className={styles.experienceContent}>
                  <p>3 years as</p>
                  <p>Programmer</p>
                </div>
              </div>
              <div className={styles.experienceItem}>
                <div className={styles.experienceIcon}>
                  <Image src="./ProjectsIcon.svg" alt="De" width={80} height={80} />
                </div>
                <div className={styles.experienceContent}>
                  <p>7 years of</p>
                  <p>Work</p>
                </div>
              </div>
              <div className={styles.experienceItem}>
                <div className={styles.experienceIcon}>
                  <Image src="./DesignIcon.svg" alt="De" width={80} height={80} />
                </div>
                <div className={styles.experienceContent}>
                  <p>4 years of</p>
                  <p>Technical Writing</p>
                </div>
              </div>
            </div>
            <div className={styles.experienceDescription}>
              <div className={styles.descriptionItem}>
                <p>Fullstack</p>
                <p>Web Developer</p>
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
        <div className='container'>
          <div className='columns'>
            <div className='column is-4 is-align-self-center has-text-centered'>
              <Image src="./myMe.svg" alt='Simon Ugorji' width={300} height={300} />
            </div>
            <div className='column'>
              <div className={styles.greetingsContainer}>
                <p>🧐 About me</p>
              </div>
              <h3 className={styles.aboutLargeText}>Simon Ugorji</h3>
              <article>
                👋 Hello, I'm Simon, and I've been deeply involved in web development for over three years. During this time, I've had the privilege of working with various businesses to create software solutions that not only meet but also exceed their expectations. I've earned certifications that reflect my commitment to delivering high-quality work.
                <br /><br />
                ✍️ Besides my development work, I'm also a passionate technical writer. You can find my articles on platforms like Medium, Hashnode, and Dev.to, where I share insights, tips, and expertise on various programming languages and technologies. Through my writing, I've connected with a global audience and my blogs collectively receive at least 10,000 views every month.
                <br /><br />
                💃 Currently, I'm excited to be part of a promising fintech startup. Here, I'm using my expertise in web development and technical writing to contribute to innovation in the field of financial technology. My goal is to assist businesses in thriving in the digital age while sharing my knowledge and insights with the broader tech community.
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.sectionContent} ${styles.worksAndProjects}`}>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <div className={styles.greetingsContainer}>
                <p>🔗 Portfolio</p>
              </div>
              <h3 className={styles.title}>My Works And Projects</h3>
            </div>
            <div className='column is-align-self-flex-end'>
              <div className={`buttons-group ${styles.worksAndProjectsBtnGroup}`}>
                <button onClick={() => setDateRange(null)} className={`button mr-3 ${styles.hasIcon} ${(dateRange === null) ? styles.isFilled : styles.isOutlined}`}>
                  <span className='icon'>
                    <Image src="./PaletteIcon.svg" alt="Technical Articles" width={20} height={20} />
                  </span>
                  All
                </button>
                <button onClick={() => setDateRange("2021")} className={`button mr-3 ${(dateRange === "2021") ? styles.isFilled : styles.isOutlined} ${styles.hasIcon}`}>
                  <span className='icon'>
                    {/* <Image src="./DesignIcon.svg" alt="Web development Projects" width={20} height={20} /> */}
                    <Image src="./PaletteIcon.svg" alt="Technical Articles" width={20} height={20} />
                  </span>
                  2021
                </button>
                <button onClick={() => setDateRange("2022")} className={`button mr-3 ${styles.hasIcon} ${(dateRange === "2022") ? styles.isFilled : styles.isOutlined}`}>
                  <span className='icon'>
                    <Image src="./PaletteIcon.svg" alt="Technical Articles" width={20} height={20} />
                  </span>
                  2022
                </button>
                <button onClick={() => setDateRange("2023")} className={`button ${styles.hasIcon} ${(dateRange === "2023") ? styles.isFilled : styles.isOutlined}`}>
                  <span className='icon'>
                    <Image src="./PaletteIcon.svg" alt="Technical Articles" width={20} height={20} />
                  </span>
                  2023
                </button>
              </div>
            </div>
          </div>
          <div className={styles.projectCardsContainer}>

            <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2021") && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>Coding Blocks</h4>
                <div className={`${styles.dateBadge}`}>
                  July 2021
                </div>
                <p>Using my PHP skills, I created a WordPress plugin that allows for the seamless embedding of styled code snippets within WordPress posts. This enhancement addresses the issue of unstyled default code snippets, providing a more appealing and readable presentation.</p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>
                    Online
                  </div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                    WordPress
                  </div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="" rel="noreferrer noopener" target='_blank'>
                    <Image src="/projects/coding-blocks.jpg" alt='' className='img is-fullwidth' width={500} height={500} />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2022") && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>Octavalidate</h4>
                <div className={`${styles.dateBadge}`}>
                  January 2022
                </div>
                <p>This is a feature-reach form validation library that was built with Javascript and PHP and it helps to validate your client-side and server-side forms using sophisticated regular expressions & validation rules. You will find this project implemented as a form validation for the contact section.</p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>
                    Online
                  </div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                    Javascript
                  </div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="" rel="noreferrer noopener" target='_blank'>
                    <Image src="/projects/octavalidate.jpg" alt='' className='img is-fullwidth' width={500} height={500} />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2022") && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>Word Unscrambler</h4>
                <div className={`${styles.dateBadge}`}>
                  August 2022
                </div>
                <p>This is a very small project that is built with Javascript that unscrambles any word so long as that word exists in the project's custom dictionary</p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>
                    Online
                  </div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                    Javascript
                  </div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="" rel="noreferrer noopener" target='_blank'>
                    <Image src="/projects/word-unscrambler.jpg" alt='' className='img is-fullwidth' width={500} height={500} />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2022") && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>PostsAPIWP</h4>
                <div className={`${styles.dateBadge}`}>
                  September 2022
                </div>
                <p>Leveraging my PHP expertise, I developed a WordPress plugin capable of generating a virtual API. This API enables users to easily share their WordPress posts with other websites, enhancing content distribution and integration capabilities.</p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>
                    Online
                  </div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                    WordPress
                  </div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="" rel="noreferrer noopener" target='_blank'>
                    <Image src="/projects/posts-api-wp.png" alt='' className='img is-fullwidth' width={500} height={500} />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2022") && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>NFT Marketplace</h4>
                <div className={`${styles.dateBadge}`}>
                  November 2022
                </div>
                <p>This project, inspired by a 4-week coding challenge, allowed me to master my API integration skills by creating a simple web app that simulates the purchase of an NFT and specifically focuses on retrieving data from an NFT API endpoint.</p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>
                    Online
                  </div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                    Javascript
                  </div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="" rel="noreferrer noopener" target='_blank'>
                    <Image src="/projects/nefta-nft.jpg" alt='' className='img is-fullwidth' width={500} height={500} />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2022") && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>SanBlog</h4>
                <div className={`${styles.dateBadge}`}>
                  November 2022
                </div>
                <p>Using the MERN stack (MongoDB, ReactJS, ExpressJS, NodeJS), I built my very first full-stack application. It's a fully functional blogging website that represents a significant achievement in my development skills.</p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>
                    Online
                  </div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                    ReactJS
                  </div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="" rel="noreferrer noopener" target='_blank'>
                    <Image src="/projects/sanblog.jpg" alt='' className='img is-fullwidth' width={500} height={500} />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2022") && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>Oshare</h4>
                <div className={`${styles.dateBadge}`}>
                  December 2022
                </div>
                <p>This full-stack web app, built with PHP and ReactJS, that enables people to upload files and share the auto-generated links to these files. These files are deleted after 24 hours and the link revoked as well.</p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandRose}`}>
                    Offline
                  </div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                    ReactJS
                  </div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="" rel="noreferrer noopener" target='_blank'>
                    <Image src="/projects/oshare.jpg" alt='' className='img is-fullwidth' width={500} height={500} />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2023") && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>TailorsKit</h4>
                <div className={`${styles.dateBadge}`}>
                  March 2023
                </div>
                <p>This full-stack web app, built with PHP and ReactJS, empowers tailors to efficiently store and access clients' measurements (male and female) and create orders while showcasing their portfolio. It offers a responsive solution for tailors to manage their business needs.</p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>
                    Online
                  </div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                    ReactJS
                  </div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="" rel="noreferrer noopener" target='_blank'>
                    <Image src="/projects/tailorskit.jpg" alt='' className='img is-fullwidth' width={500} height={500} />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2023") && styles.hideCard}`}>
              <div className={styles.projectCardHead}>
                <h4>Home Sparkle</h4>
                <div className={`${styles.dateBadge}`}>
                  October 2023
                </div>
                <p>I honed my frontend skills through a fully responsive project, which I developed using Next.js and Bulma. This project was crafted from a Figma design, strengthening my proficiency in frontend web development.</p>
              </div>
              <div className={styles.projectCardBody}>
                <div className={styles.badgeContainer}>
                  <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>
                    Online
                  </div>
                  <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                    NextJS
                  </div>
                </div>
                <div className={styles.imageContainer}>
                  <a href="" rel="noreferrer noopener" target='_blank'>
                    <Image src="/projects/home-sparkle.jpg" alt='' className='img is-fullwidth' width={500} height={500} />
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div className={styles.projectCardsContainerMobile}>
            <Carousel showArrows={false} showIndicators={false} showThumbs={false} infiniteLoop={false} autoPlay={true} interval={0}
              swipeable={true}
              stopOnHover={true}>
              <div className='carousel-item'>
                <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2021") && styles.hideCard}`}>
                  <div className={styles.projectCardHead}>
                    <h4>Coding Blocks</h4>
                    <div className={`${styles.dateBadge}`}>
                      July 2021
                    </div>
                    <p>Using my PHP skills, I created a WordPress plugin that allows for the seamless embedding of styled code snippets within WordPress posts. This enhancement addresses the issue of unstyled default code snippets, providing a more appealing and readable presentation.</p>
                  </div>
                  <div className={styles.projectCardBody}>
                    <div className={styles.badgeContainer}>
                      <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>
                        Online
                      </div>
                      <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                        WordPress
                      </div>
                    </div>
                    <div className={styles.imageContainer}>
                      <a href="" rel="noreferrer noopener" target='_blank'>
                        <Image src="/projects/coding-blocks.jpg" alt='' className='img is-fullwidth' width={500} height={500} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2022") && styles.hideCard}`}>
                  <div className={styles.projectCardHead}>
                    <h4>Octavalidate</h4>
                    <div className={`${styles.dateBadge}`}>
                      January 2022
                    </div>
                    <p>This is a feature-reach form validation library that was built with Javascript and PHP and it helps to validate your client-side and server-side forms using sophisticated regular expressions & validation rules. You will find this project implemented as a form validation for the contact section.</p>
                  </div>
                  <div className={styles.projectCardBody}>
                    <div className={styles.badgeContainer}>
                      <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>
                        Online
                      </div>
                      <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                        Javascript
                      </div>
                    </div>
                    <div className={styles.imageContainer}>
                      <a href="" rel="noreferrer noopener" target='_blank'>
                        <Image src="/projects/octavalidate.jpg" alt='' className='img is-fullwidth' width={500} height={500} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2022") && styles.hideCard}`}>
                  <div className={styles.projectCardHead}>
                    <h4>Word Unscrambler</h4>
                    <div className={`${styles.dateBadge}`}>
                      August 2022
                    </div>
                    <p>This is a very small project that is built with Javascript that unscrambles any word so long as that word exists in the project's custom dictionary</p>
                  </div>
                  <div className={styles.projectCardBody}>
                    <div className={styles.badgeContainer}>
                      <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>
                        Online
                      </div>
                      <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                        Javascript
                      </div>
                    </div>
                    <div className={styles.imageContainer}>
                      <a href="" rel="noreferrer noopener" target='_blank'>
                        <Image src="/projects/word-unscrambler.jpg" alt='' className='img is-fullwidth' width={500} height={500} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2022") && styles.hideCard}`}>
                  <div className={styles.projectCardHead}>
                    <h4>PostsAPIWP</h4>
                    <div className={`${styles.dateBadge}`}>
                      September 2022
                    </div>
                    <p>Leveraging my PHP expertise, I developed a WordPress plugin capable of generating a virtual API. This API enables users to easily share their WordPress posts with other websites, enhancing content distribution and integration capabilities.</p>
                  </div>
                  <div className={styles.projectCardBody}>
                    <div className={styles.badgeContainer}>
                      <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>
                        Online
                      </div>
                      <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                        WordPress
                      </div>
                    </div>
                    <div className={styles.imageContainer}>
                      <a href="" rel="noreferrer noopener" target='_blank'>
                        <Image src="/projects/posts-api-wp.png" alt='' className='img is-fullwidth' width={500} height={500} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2022") && styles.hideCard}`}>
                  <div className={styles.projectCardHead}>
                    <h4>NFT Marketplace</h4>
                    <div className={`${styles.dateBadge}`}>
                      November 2022
                    </div>
                    <p>This project, inspired by a 4-week coding challenge, allowed me to master my API integration skills by creating a simple web app that simulates the purchase of an NFT and specifically focuses on retrieving data from an NFT API endpoint.</p>
                  </div>
                  <div className={styles.projectCardBody}>
                    <div className={styles.badgeContainer}>
                      <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>
                        Online
                      </div>
                      <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                        Javascript
                      </div>
                    </div>
                    <div className={styles.imageContainer}>
                      <a href="" rel="noreferrer noopener" target='_blank'>
                        <Image src="/projects/nefta-nft.jpg" alt='' className='img is-fullwidth' width={500} height={500} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2022") && styles.hideCard}`}>
                  <div className={styles.projectCardHead}>
                    <h4>SanBlog</h4>
                    <div className={`${styles.dateBadge}`}>
                      November 2022
                    </div>
                    <p>Using the MERN stack (MongoDB, ReactJS, ExpressJS, NodeJS), I built my very first full-stack application. It's a fully functional blogging website that represents a significant achievement in my development skills.</p>
                  </div>
                  <div className={styles.projectCardBody}>
                    <div className={styles.badgeContainer}>
                      <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>
                        Online
                      </div>
                      <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                        ReactJS
                      </div>
                    </div>
                    <div className={styles.imageContainer}>
                      <a href="" rel="noreferrer noopener" target='_blank'>
                        <Image src="/projects/sanblog.jpg" alt='' className='img is-fullwidth' width={500} height={500} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2022") && styles.hideCard}`}>
                  <div className={styles.projectCardHead}>
                    <h4>Oshare</h4>
                    <div className={`${styles.dateBadge}`}>
                      December 2022
                    </div>
                    <p>This full-stack web app, built with PHP and ReactJS, that enables people to upload files and share the auto-generated links to these files. These files are deleted after 24 hours and the link revoked as well.</p>
                  </div>
                  <div className={styles.projectCardBody}>
                    <div className={styles.badgeContainer}>
                      <div className={`${styles.badge} ${styles.badgeBrandRose}`}>
                        Offline
                      </div>
                      <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                        ReactJS
                      </div>
                    </div>
                    <div className={styles.imageContainer}>
                      <a href="" rel="noreferrer noopener" target='_blank'>
                        <Image src="/projects/oshare.jpg" alt='' className='img is-fullwidth' width={500} height={500} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2023") && styles.hideCard}`}>
                  <div className={styles.projectCardHead}>
                    <h4>TailorsKit</h4>
                    <div className={`${styles.dateBadge}`}>
                      March 2023
                    </div>
                    <p>This full-stack web app, built with PHP and ReactJS, empowers tailors to efficiently store and access clients' measurements (male and female) and create orders while showcasing their portfolio. It offers a responsive solution for tailors to manage their business needs.</p>
                  </div>
                  <div className={styles.projectCardBody}>
                    <div className={styles.badgeContainer}>
                      <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>
                        Online
                      </div>
                      <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                        ReactJS
                      </div>
                    </div>
                    <div className={styles.imageContainer}>
                      <a href="" rel="noreferrer noopener" target='_blank'>
                        <Image src="/projects/tailorskit.jpg" alt='' className='img is-fullwidth' width={500} height={500} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className={`${styles.projectCard} ${(dateRange && dateRange !== "2023") && styles.hideCard}`}>
                  <div className={styles.projectCardHead}>
                    <h4>Home Sparkle</h4>
                    <div className={`${styles.dateBadge}`}>
                      October 2023
                    </div>
                    <p>I honed my frontend skills through a fully responsive project, which I developed using Next.js and Bulma. This project was crafted from a Figma design, strengthening my proficiency in frontend web development.</p>
                  </div>
                  <div className={styles.projectCardBody}>
                    <div className={styles.badgeContainer}>
                      <div className={`${styles.badge} ${styles.badgeBrandGreen}`}>
                        Online
                      </div>
                      <div className={`${styles.badge} ${styles.badgeBrandPurple}`}>
                        NextJS
                      </div>
                    </div>
                    <div className={styles.imageContainer}>
                      <a href="" rel="noreferrer noopener" target='_blank'>
                        <Image src="/projects/home-sparkle.jpg" alt='' className='img is-fullwidth' width={500} height={500} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          <div className={styles.seeMore}>
            <a className={styles.hasIcon} href='https://simon-ugorji.medium.com' target='_blank' rel='noreferrer noopener'>
              Check out my blog on Medium <span className='icon'><Image src="/ArrowRight.svg" width={20} height={20} alt='Arrow Right Icon' /></span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
