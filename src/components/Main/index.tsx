/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import styles from './style.module.scss';

import WhoAmIPhoto from '../../../public/aboutMe-photo.jpg';

import NextJsIcon from '../../../public/Icons/next-js.svg'
import SassIcon from '../../../public/Icons/sass.svg'
import TypeScriptIcon from '../../../public/Icons/typescript.svg'

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
                            <p>
                                <NextJsIcon></NextJsIcon>
                                <span>NextJS</span>
                                
                            </p>

                            <p>
                                <span>Sass</span>
                            </p>

                            <p>
                                <span>TypeScript</span>
                            </p>

                            <p>
                                <span>PostgreSQL</span>
                            </p>

                            <p>
                                <span>MySQL</span>
                            </p>

                            <p>
                                <span>Docker</span>
                            </p>

                            <p>
                                <span>.NET</span>
                            </p>

                            <p>
                                <span>Spring Boot</span>
                            </p>

                            <p>
                                <span>Figma</span>
                            </p>

                            <p>
                                <span>Git</span>
                            </p>
                            
                            <p>
                                <span>Postman</span>
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <div>
                        <h1>Projetos.</h1>
                    </div>

                    <div>
                        <section>
                            <p>
                                LandingPage
                            </p>
                        </section>
                        <section>
                            <Image src={WhoAmIPhoto} width={10000} height={100} alt=''/>
                            <p>LadinngPage</p>
                        </section>
                        <section>
                            <Image src={WhoAmIPhoto} width={10000} height={100} alt=''/>
                        </section>
                        <section>
                            <Image src={WhoAmIPhoto} width={10000} height={100} alt=''/>
                        </section>
                        <section>
                            <Image src={WhoAmIPhoto} width={10000} height={100} alt=''/>
                        </section>
                        <section>
                            <Image src={WhoAmIPhoto} width={10000} height={100} alt=''/>
                        </section>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Main;