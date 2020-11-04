import Link from "next/link";
import styles from "../styles/Card.module.css";

export default function Skills() {
  return (
    <>
      <div className={styles.container}>
        <h1>SKILLS</h1>
        <h3>
          <Link href="/">
            <a>&larr;Back to home</a>
          </Link>
        </h3>

        <div className={styles.card_edu}>
          <p>skills</p>
        </div>
      </div>
    </>
  );
}
