// CONTATO
import Link from "next/link";
import styles from "../styles/Card.module.css";

export default function Contato() {
  return (
    <>
      <div className={styles.container}>
        <h1>CONTACT ME</h1>
        <h3>
          <Link href="/">
            <a>&larr;Back to home</a>
          </Link>
        </h3>

        <div className={styles.card_edu}>
          <div className={styles.form}>
            <h2 className={styles.newSection}>SEND ME A MESSAGE</h2>
            <form method="POST" className="contact-form">
              <input type="text" placeholder="Name" id="name" />
              <input type="text" placeholder="Email" id="email" />
              <input type="text" placeholder="Subject" id="subject" />
              <textarea rows="8" placeholder="Message" id="message"></textarea>
            </form>
            <button>SEND</button>
          </div>
        <div className={styles.emailink}>
          <h5>andreptorres@gmail.com</h5>
          <h5>andreptorres@me.com</h5>
        </div>

        </div>
      </div>
    </>
  );
}





