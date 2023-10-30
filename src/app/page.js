import Image from 'next/image'
import styles from './Page.module.css'

export default function Home() {
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
                  <button className={`button ${styles.isHeroOutline} ${styles.hasIcon}`}>
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
                  <button className={`button ${styles.isHeroOutline} ${styles.hasIcon}`}>
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
      </section>
      <section className={`${styles.sectionAbout} ${styles.sectionContent}`}>
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
              Hello, I'm Simon, and I've been deeply involved in web development for over three years. During this time, I've had the privilege of working with various businesses to create software solutions that not only meet but also exceed their expectations. I've earned certifications that reflect my commitment to delivering high-quality work.
              <br /><br />
              Besides my development work, I'm also a passionate technical writer. You can find my articles on platforms like Medium, Hashnode, and Dev.to, where I share insights, tips, and expertise on various programming languages and technologies. Through my writing, I've connected with a global audience and my blogs collectively receive at least 10,000 views every month.
              <br /><br />
              Currently, I'm excited to be part of a promising fintech startup. Here, I'm using my expertise in web development and technical writing to contribute to innovation in the field of financial technology. My goal is to assist businesses in thriving in the digital age while sharing my knowledge and insights with the broader tech community.
            </article>
          </div>
        </div>
      </section>
      <section className={`${styles.sectionContent} ${styles.worksAndProjects}`}>
        {/* web development technical writing */}
        <div className='columns'>
          <div className='column'>
            <div className={styles.greetingsContainer}>
              <p>🔗 Portfolio</p>
            </div>
          <h3 className={styles.title}>My Works And Projects</h3>
          </div>
          <div className='column is-align-self-flex-end'>
            <div className={`buttons-group ${styles.worksAndProjectsBtnGroup}`}>
              <button className={`button mr-3 ${styles.isHeroOutline} ${styles.hasIcon}`}>
                <span className='icon'>
                  <Image src="./DesignIcon.svg" alt="Web development Projects" width={20} height={20} />
                </span>
                Websites
              </button>
              <button className={`button ${styles.hasIcon} ${styles.isFilled}`}>
                <span className='icon'>
                  <Image src="./PaletteIcon.svg" alt="Technical Articles" width={20} height={20} />
                </span>
                Articles
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
