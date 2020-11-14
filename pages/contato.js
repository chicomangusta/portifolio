// CONTATO
import Link from "next/link";
import styles from "../styles/Card.module.css";

export default function Contato() {
  return (
    <>
      <div className={styles.container}>
        
        <h3>
          <Link href="/">
            <a>&larr;Back to home</a>
          </Link>
        </h3>

        <div className={styles.card_eduContact}>
          <div className={styles.form}>
            <h2 className={styles.newSection}>CONTACT ME</h2>
            {/* <form method="POST" className="contact-form">
              <input type="text" placeholder="Name" id="name" />
              <input type="text" placeholder="Email" id="email" />
              <input type="text" placeholder="Subject" id="subject" />
              <textarea rows="6" placeholder="Message" id="message"></textarea>
            </form>
            <button>SEND</button> */}
          </div>
         

{/* EMAIL LINK */}
        <div className={styles.emailLink}>
          
          <div className={styles.mailMe}>
            <img src="/email.png"></img>
          </div>
            <h5 className={styles.me}>&rarr; andreptorres@me.com</h5>



            <div className={styles.gmail}>
              <img src="/email.png"></img>
            </div>

            <h5 className={styles.gmailLink} href="andreptorres@gmail.com">&rarr; andreptorres@gmail.com</h5>


<br />
          <div className={styles.phoneLogo}>
            <img src="/phone.png"></img>
          </div>
            <h5 className={styles.phone}>&rarr; (929)288-9744</h5>




        
        
        </div>

        </div>
      </div>
    </>
  );
}





