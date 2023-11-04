import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">

                <div className={styles.footerSocial}>
                    <a href="">
                        <Image src={'./github.svg'} alt='Check out my Github Profile' width={25} height={25} />
                    </a>
                    <a href="">
                        <Image src={'./linkedin.svg'} alt='Connect with me on LinkedIn' width={25} height={25} />
                    </a>
                </div>
            </div>
        </footer>
    )
}