import Head   from 'next/head'
import styles from '../styles/Home.module.css'





export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Andre Torres Developer</title>

        <link rel="icon" href="/favicon.ico" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link> */}
      </Head>

      {/* ------------------------------------------------------------------------------------------------ */}

      {/* LOGO */}
      <a href="https://andreptorres.com/">
        <img src="/logo_size_laranja.jpg" className={styles.logo} />
      </a>
      {/* ------------------------------------------------------------------------------------------------ */}
     
      <div className={styles.xmas}>
        <img src="https://res.cloudinary.com/dqiighjqq/image/upload/v1607745853/christmas-feature_759_lzzkc7.jpg" className={styles.xmas1} />
      </div>

      {/* ------------------------------------------------------------------------------------------------ */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          ANDRE TORRES <a href="">DEVELOPER</a>
        </h1>

        <p className={styles.description}>
          SOFTWARE ENGINEER || FRONT-END|| FULLSTACK
        </p>


        

        {/* ------------------------------------------------------------------------------------------------ */}

        {/* GITHUB */}
        <a
          href="https://github.com/ChicoMangusta"
          target="_blank"
          className={styles.git}
        >
          <img src="github_logo.svg" className={styles.git} />
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/andre-torres-dev//"
          target="_blank"
          className={styles.linkedin}
        >
          <img src="linkedin.svg" className={styles.linkedin} />
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/ndreptorres/"
          target="_blank"
          className={styles.instagram}
        >
          <img src="instagram.png" className={styles.instagram} />
        </a>

        {/* CONTATO */}
        <a href="/contato" className={styles.contato}>
          <img src="email.png" className={styles.contato} />
        </a>

        {/* ------------------------------------------------------------------------------------------------ */}
        {/* CARDS */}
        {/* ------------------------------------------------------------------------------------------------ */}

        <div className={styles.grid}>
          {/* ABOUT ME */}
          <a href="/about" className={styles.card}>
            <h3>ABOUT ME &rarr;</h3>
            <p>
              Hi, I'm Andre Torres a Software Engineer with a creative mind,
              developing front-end and back-end applications.
            </p>
            <br />
            <p>
              I am a constant learner and this has helped me to keep myself
              productive and motivated.
            </p>
            <br />
            <br />
            <p>MORE&rarr;</p>
          </a>

          {/* SKILLS */}
          <a href="/skills" className={styles.card}>
            <h3>SKILLS &rarr;</h3>
            <div className={styles.cardSkill}>
              <ul>
                <li>NEXT.JS</li>
                <br />
                <li>REACT</li>
                <br />
                <li>JAVASCRIPT</li>
                <br />
                <li>HTML</li>
                <br />
                <li>CSS</li>
              </ul>
            </div>
            <p className={styles.moreP}>MORE&rarr;</p>
          </a>

          {/* EDUCATION */}
          <a href="/education" className={styles.card}>
            <h3>EDUCATION &rarr;</h3>
            <ul>
              <li>Software Engineer - General Assembly</li>
              <br />
              <li>JavaScript Developer - General Assembly</li>
              <br />
              <li>Front-End Web Developer - General Assembly</li> <br />
            </ul>
            <p>MORE&rarr;</p>
          </a>

          {/* PROJECTS */}
          <a href="/projects" className={styles.card}>
            <h3>PROJECTS &rarr;</h3>
            <ul>
              <li>To do List - Final Project - GA</li>
              <br />
              <li>Duck Hunt - First Project - GA</li>
              <br />
              <li>Codesk - Third Project - GA</li>
              <br />
              <li>No Dig No Ride - Fourth Project - GA </li> <br />
            </ul>
            <p>MORE&rarr;</p>
          </a>
        </div>
      </main>

      {/* ------------------------------------------------------------------------------------------------ */}
      {/* FOOTER */}
      {/* ------------------------------------------------------------------------------------------------ */}

      <footer className={styles.footer}>
        <a>
          Created by &copy; Andre Torres 2020
          <img
            src="/logo_size_laranja.jpg"
            alt="Logo"
            className={styles.footerLogo}
          />
        </a>
      </footer>
    </div>
  );


}
