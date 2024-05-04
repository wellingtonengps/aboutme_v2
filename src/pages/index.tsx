import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Head>
                <title>Wellington P. Silva</title>
                <meta name="description" content="About Wellington P. Silva"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="favicon.ico"/>
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <div className={styles.header}>
                    <div className={styles.wrapperHeader}>
                        <div className={styles.wrapperProfileLinks}>
                            <Image
                                src="profile.svg"
                                alt="Profile"
                                width={245}
                                height={245}
                                priority
                            />
                            <div className={styles.links}>
                                <a
                                    href="https://github.com/wellingtonengps"
                                    className={styles.iconButtom}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Image className={styles.iconLink} src="github.svg" alt="Github link" width={32}
                                           height={32} priority/>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/wellingtonengps/"
                                    className={styles.iconButtom}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Image className={styles.iconLink} src="linkedin.svg" alt="Github link" width={33}
                                           height={33} priority/>
                                </a>

                            </div>
                        </div>
                        <div className={styles.description}>
                            <h1 className={styles.title}>Wellington Pereira Silva</h1>
                            <div className={styles.about}>
                                <p>Olá, sou Wellington estudante de Ciência da Computação, estagiário em suporte de TI
                                    no
                                    Hospital Unimed Juiz de Fora, com experiência em desenvolvimento Web e mobile, com
                                    aptidão também em UX/UI, buscando uma oportunidade como desenvolver.</p>
                            </div>

                            <div className={styles.githubStats}>
                                <img
                                    src="https://github-readme-stats.vercel.app/api?username=wellingtonengps&theme=dracula"
                                    alt="GitHub Stats"
                                />
                                <img
                                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=wellingtonengps&hide=html&layout=compact&theme=dracula"
                                    alt="GitHub Stats"/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.hardSkillsWrapper}>
                    <h1 className={styles.subtitle}>Hard-Skills</h1>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h4>Liguagens de programação</h4>
                            <div>
                                <Image className={styles.iconLink} src="c.svg" alt="Github link" width={32}
                                       height={32} priority/>
                                <Image className={styles.iconLink} src="java.svg" alt="Github link" width={32}
                                       height={32} priority/>
                                <Image className={styles.iconLink} src="javascript.svg" alt="Github link" width={32}
                                       height={32} priority/>
                                <Image className={styles.iconLink} src="kotlin.svg" alt="Github link" width={32}
                                       height={32} priority/>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <h4>Frameworks</h4>
                            <div>
                                <Image className={styles.iconLink} src="react.svg" alt="Github link" width={32}
                                       height={32} priority/>
                                <Image className={styles.iconLink} src="spring.svg" alt="Github link" width={32}
                                       height={32} priority/>
                                <Image className={styles.iconLink} src="next.svg" alt="Github link" width={32}
                                       height={32} priority/>
                                <Image className={styles.iconLink} src="nest.svg" alt="Github link" width={32}
                                       height={32} priority/>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <h4>Banco de dados</h4>
                            <div>
                                <Image className={styles.iconLink} src="mysql.svg" alt="Github link" width={32}
                                       height={32} priority/>
                                <Image className={styles.iconLink} src="postgresql.svg" alt="Github link" width={32}
                                       height={32} priority/>
                                <Image className={styles.iconLink} src="mongodb.svg" alt="Github link" width={32}
                                       height={32} priority/>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <h4>Ferramentas</h4>
                            <div>
                                <Image className={styles.iconLink} src="git.svg" alt="Github link" width={32}
                                       height={32} priority/>
                                <Image className={styles.iconLink} src="docker.svg" alt="Github link" width={32}
                                       height={32} priority/>
                                <Image className={styles.iconLink} src="figma.svg" alt="Github link" width={32}
                                       height={32} priority/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
