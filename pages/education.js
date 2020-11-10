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
          <ul className={styles.edu}>
            <p>&rarr; Software Engineer</p> <h5>- General Assembly - 2020 |</h5>
            
            <p>&rarr; JavaScript Developer</p> <h6>- General Assembly - 2019 |</h6>
            
            <p>&rarr; Front-End Web Developer</p> <h4>- General Assembly - 2019 |</h4>
            
            <p>&rarr; Direction of Photography</p> <h3>- B'Arco Institute - 2016 |</h3>
            
            <p>
              &rarr; Bachelor in Fine Arts in Photography</p> <h2>- Faculdade Belas Artes
              - 2015 |</h2>
            
          </ul>
        </div>
      </div>
    </>
  );
}
