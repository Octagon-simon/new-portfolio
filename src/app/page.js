import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className="hero is-medium">
        <div className="hero-body is-justify-content-center">
          <div className='container'>
            <div className='columns'>
              <div className='column is-align-self-center'>
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
              <div className='column'>
                <Image className={styles.heroMyMe} src={'./my-me.svg'} width={500} height={500} alt='Simon Ugorji' />
              </div>
              <div className='column is-align-self-center has-text-right'>
                <div className={styles.heroContactButtons}>
                  <a className={styles.hasIcon} href=''>
                    Download CV <span className='icon'>
                      <Image src="./arrowLineDown.svg" alt='Download CV Icon' width={20} height={20} /></span>
                  </a>
                  <button className={`button is-brand-outline ${styles.hasIcon}`}>
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
    </main>
  )
}
