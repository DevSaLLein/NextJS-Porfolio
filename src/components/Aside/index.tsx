import styles from './style.module.scss';
import Image from 'next/image';
import Perfil from '../../../public/eu.jpg';
import LogoMarca from '../../../public/logoMarca_cortado.jpg';
import Link from 'next/link';

import GitHubIcon from '../../../public/Icons/GitHubIcon.svg';
import LinkedInIcon from '../../../public/Icons/LinkedInIcon.svg';
import InstagramIcon from '../../../public/Icons/InstagramIcon.svg';

import EmailIcon from '../../../public/Icons/EmailIcon.svg';
import LocationIcon from '../../../public/Icons/LocationIcon.svg';
import BirthdayIcon from '../../../public/Icons/Birthday.svg';

const Aside = () => {
    return (
        <aside className={styles.aside}>

            <div className={styles.div}>
                <header className={styles.header}>
                    <section className={styles.sectionContainer}>
                        <Image 
                            alt={"me image"} 
                            src={Perfil} 
                            width={100} 
                            height={100} 
                            className={styles.image}
                        ></Image>

                        <section>
                            <h1 className={styles.title}>@DevSaLLein<span>.</span></h1>
                            <h2 className={styles.subtitle}>Full Stack Developer & UI/UX Designer</h2>
                        </section>

                        <section className={styles.socialMediasContainer}>
                            <Link href={'https://github.com/DevSaLLein'} target='__blank'><GitHubIcon /></Link>
                            <Link href={'https://www.linkedin.com/in/devsallein'} target='__blank'><LinkedInIcon/></Link>
                            <Link href={'https://www.instagram.com/http.zaclimaaxs'} target='__blank'><InstagramIcon/></Link>
                        </section>
                    </section>
                </header>

                <main className={styles.main}>
                    <p><EmailIcon/> devzac.andrade@gmail.com</p>
                    <p><LocationIcon/> Fortaleza, CE - Brasil</p>
                    <p><BirthdayIcon/> 29/04/2006</p>
                </main>

                <footer className={styles.footer}>
                    <button> Contate-me </button>
                    <button> Meu currículo </button>
                </footer>

            </div>
        </aside>
    )
}

export default Aside;