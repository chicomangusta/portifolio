import Link from "next/link";
import styles from "../styles/Card.module.css";




export default function Education() {
  return (
    <>
      <div className={styles.container}>
        <h1>EDUCATION</h1>
        <h3>
          <Link href="/">
            <a>&larr;Back to home</a>
          </Link>
        </h3>

        <div className={styles.card_edu}>
          <div className={styles.edu}>
            <img src="/gaLogo.png" className={styles.gaLogo}></img>
            <p> Software Engineer</p> <h5>- General Assembly - 2020 |</h5>
            <div className={styles.desc}>
              ● 500+ hours dedicated to an immersive and Full-Stack Web
              Development boot camp.
              <br />● Engineered 10+ applications with clear and detailed code
              on both a collaborative and individual basis within 12 weeks.
            </div>
          </div>
        </div>

        <div className={styles.card_edu}>
          <div className={styles.edu}>
            <img src="/gaLogo.png" className={styles.gaLogo}></img>
            <p> JavaScript Developer</p> <h6>- General Assembly - 2019 |</h6>
            <div className={styles.desc}>
              ● 150 hours dedicated to an immersive JavaScript Development
              course. <br />● Engineered 1 final project Java Script
              application.
            </div>
          </div>
        </div>

        <div className={styles.card_edu}>
          <div className={styles.edu}>
            <img src="/gaLogo.png" className={styles.gaLogo}></img>
            <p> Front-End Web Developer</p> <h4>- General Assembly - 2019 |</h4>
            <div className={styles.desc}>
              ● 150 hours dedicated to an immersive Front End Web Development
              course. <br />● Engineered 1 final project Front End application.
            </div>
          </div>
        </div>

        <div className={styles.card_edu}>
          <div className={styles.edu}>
            <img src="/barco.png" className={styles.gaLogo}></img>
            <p> Direction of Photography</p>{" "}
            <h3>- B'Arco Institute - 2016 |</h3>
            <div className={styles.desc}>
              <br />
              ● 500+ hours dedicated to an immersive hands-on course, with
              professionals of the area. <br />● Engineered 1 final project of a
              short movie production.
            </div>
          </div>
        </div>

        <div className={styles.card_edu}>
          <div className={styles.edu}>
            <img src="/baLogo.png" className={styles.gaLogo}></img>
            <p> Bachelor in Fine Arts in Photography</p>{" "}
            <h2>- Faculdade Belas Artes - 2015 |</h2>
            <div className={styles.desc}>
              <br />
              ● 2 years of a hands-on complete studies of the art of Photography.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


