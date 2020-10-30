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
        <a href="" className={styles.contato}>
          <img src="email.png" className={styles.contato} />
        </a>
        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>SKILLS &rarr;</h3>
            <p>NEXT.JS</p> <br />
            <p>REACT</p>
          </a>

          {/* ------------------------------------------------------------------------------------------------ */}
          {/* CARDS */}
          {/* ------------------------------------------------------------------------------------------------ */}

          {/* ABOUT ME */}
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>ABOUT ME &rarr;</h3>
            <p>
              A little bit of my background
              {/* HI, IA AM ANDRE TORRES AN SOFTWARE ENGINEER WITH A CREATIVE MIND,
              DEVELOPING FRONT-END AND BACK-END APPLICATIONS. WITH MY BACK
              BACKGROUND SKILLS IN CINEMATOGRAPHY MAKES ME CREATE SOLUTIONS TO
              CREATE A BETTER DESIGN AND CODE CLEAN APPLICATIONS. ABLE TO
              PERFORM COLLABORATIVELY WITH TEAMWORK AND IN REMOTE, WITH A KEEN
              VISION FOR DETAILS AND HELP SOLVE PROBLEMS, TRYING TO MAKE A
              BETTER WORLD FOR EVERYONE. */}
            </p>
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>EDUCATION &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>PROJECTS &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
          crossOrigin="anonymous"
        ></script>
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
