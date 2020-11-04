import Link from "next/link";
import styles from "../styles/Card.module.css";

export default function Education() {
  return (
    <>
      <div className={styles.container}>
        <h1>ABOUT</h1>
        <h3>
          <Link href="/">
            <a>&larr;Back to home</a>
          </Link>
        </h3>

        <div className={styles.card_edu}>
          <h4>BACKGROUND &rarr;</h4>
          <p className={styles.about_me}>
            A SOFTWARE ENGINEER WITH A CREATIVE MIND, DEVELOPING FRONT-END AND
            BACK-END APPLICATIONS. WITH MY BACK BACKGROUND SKILLS IN
            CINEMATOGRAPHY MAKES ME CREATE SOLUTIONS TO CREATE A BETTER DESIGN
            AND CODE CLEAN APPLICATIONS. ABLE TO PERFORM COLLABORATIVELY WITH
            TEAMWORK AND IN REMOTE, WITH A KEEN VISION FOR DETAILS AND HELP
            SOLVE PROBLEMS, TRYING TO MAKE A BETTER WORLD FOR EVERYONE.
          </p>
        </div>
      </div>
    </>
  );
}
