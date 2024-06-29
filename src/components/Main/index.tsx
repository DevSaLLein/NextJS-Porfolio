/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import styles from './style.module.scss';

import WhoAmIPhoto from '../../../public/aboutMe-photo.jpg';

const Main = () => {

    return (
        <main className={styles.main}>

            <div className={styles.container}>
                <section className={styles.section}>
                    <div>
                        <h1>Quem sou eu?</h1>

                        <p>
                            Cursando Engenharia de Software e formado em Informática, sou apaixonado pelo desenvolvimento full-stack. 
                            Busco constantemente desafios para expandir minhas habilidades e colaboro efetivamente em equipe.
                        </p>
                        <p>
                            "A programação é uma forma de arte, onde o código é a sua tela e a lógica é a sua tinta." 
                        </p>
                        <p> - ChatGPT, 2024</p>
                    </div>
                    <figure className={styles.figure}>
                        <Image src={WhoAmIPhoto} alt={"minha foto"} className={styles.image}/>
                    </figure>
                </section>

                <section className={styles.section}>
                    <div>

                        <h1>Tecnologias.</h1>

                        <div>
                            <p>NextJS</p>
                            <p>Scss</p>
                            <p>TypeScript</p>
                            <p>PostgreSQL</p>
                            <p>MySQL</p>
                            <p>Docker</p>
                            <p>.NET</p>
                            <p>Spring Boot</p>
                            <p>AWS</p>
                            <p>Figma</p>
                            <p>Git</p>
                            <p>Postman</p>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <div>
                        <h1>Projetos.</h1>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Main;