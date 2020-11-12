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

        <div className={styles.contSkills}>
          
          <div className={styles.card_eduFront}>

            <div className={styles.nameLogo}>
              <p>Front End</p>
              <img className={styles.frontLogo} src="/frontEndLogo.png"></img>
            </div>

            <div className={styles.frontEnd}> 
              <br />
              
              <ul>                
                <li>&rarr; NEXT.JS</li>
                <br />
                <li>&rarr; REACT</li>
                <br />
                <li>&rarr; JAVASCRIPT</li>
                <br />
                <li>&rarr; HTML</li>
                <br />
                <li>&rarr; CSS</li>
                <br />
                <li>&rarr; SASS</li>
                <br />
                <li>&rarr; JQUERY</li>
                <br />
                <li>&rarr; BOOTSTRAP</li>
                <br />
                <li>&rarr; GITHUB</li>
                <br />
                <li>&rarr; API | AXIOS</li>
                <br />
                <li>&rarr; RUBY</li>
                <br />
              </ul>
            </div>
          </div>

          <div className={styles.card_eduFront}>

            <div className={styles.nameLogoBack}>
              <p>Back End</p>
              <img className={styles.backLogo} src="/backEndLogo.png"></img>
            </div>

            <div className={styles.backEnd}>
              
              <ul>
                <li>&rarr; REACT</li>
                <br />
                <li>&rarr; NODE</li>
                <br />
                <li>&rarr; EXPRESS</li>
                <br />
                <li>&rarr; MONGODB</li>
                <br />
                <li>&rarr; POSTGRESSQL</li>
                <br />
                <li>&rarr; RUBY on RAILS</li>
                <br />
                <li>&rarr; FIREBASE</li>
                <br />
                <li>&rarr; RUBY on RAILS</li>
                <br />
              </ul>
            </div>
          </div>




          <div className={styles.card_eduFront}>

            <div className={styles.nameLogOther}>
              <p>Other Tech</p>
              <img className={styles.otherLogo} src="/tech2.png"></img>
            </div>

            <div className={styles.otherEnd}>
              
              <ul>
                <li>&rarr; COLOR CORRECTION</li>
                <br />
                <li>&rarr; ADOBE PHOTOSHOP</li>
                <br />
                <li>&rarr; ADOBE ILUSTRATOR</li>
                <br />
                <li>&rarr; ADOBE AFTER EFFECTS</li>
                <br />
                <li>&rarr; ADOBE PREMIERE</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


