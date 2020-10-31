import Head   from 'next/head'
import styles from '../styles/Home.module.css'
// import logoImage from '../LOGO/logo_size.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { config, library } from "@fortawesome/fontawesome-svg-core";
// import { faGithub }        from '@fortawesome/free-solid-svg-icons';
// import { fab }             from '@fortawesome/free-brands-svg-icons';
// import { far }             from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-regular-svg-icons';

// config.autoAddCss = false;
// library.add( fab, far );



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          <img src="/logo_aba.jpg" />
          Andre Torres Developer
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ------------------------------------------------------------------------------------------------ */}

      {/* LOGO */}
      <a href="">
        <img src="/logo_size_laranja.jpg" className={styles.logo} />
      </a>

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
        <a href="https://github.com/ChicoMangusta" className={styles.git}>
          <img src="github_logo.svg" className={styles.git} />
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/andre-torres-dev//"
          className={styles.linkedin}
        >
          <img src="linkedin.svg" className={styles.linkedin} />
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/ndreptorres/"
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
              Hi, I'm Andre Torres an Software Engineer with a creative mind,
              developing front-end and back-end applications. I have a back
              background skills in cinematography that makes me create solutions
              to make a better design and a better, clean code applications,
              creating solutions for a better world for everyone.
            </p>
            <br />
            <p>MORE&rarr;</p>
          </a>

          {/* SKILLS */}
          <a href="/skills" className={styles.card}>
            <h3>SKILLS &rarr;</h3>
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
            <p>MORE&rarr;</p>
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

        {/* <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
          crossOrigin="anonymous"
        ></script> */}
      </main>

      {/* ------------------------------------------------------------------------------------------------ */}
      {/* FOOTER */}
      {/* ------------------------------------------------------------------------------------------------ */}

      <footer className={styles.footer}>
        <a>
          Created by &copy; Andre Torres 2020
          <img
            src="logo_size_laranja.jpg"
            alt="Logo"
            className={styles.footerLogo}
          />
        </a>
      </footer>
    </div>
  );


}
