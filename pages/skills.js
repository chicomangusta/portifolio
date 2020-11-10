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
            <p className={styles.mySkills1}>my skills &rarr;</p>
            <p className={styles.pFront1}>FrontEnd</p>
            <div className={styles.frontEnd}>
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
                <br />
                <li>SASS</li>
                <br />
                <li>JQUERY</li>
                <br />
                <li>BOOTSTRAP</li>
                <br />
                <li>GITHUB</li>
                <br />
                <li>API | AXIOS</li>
                <br />
                <li>RUBY</li>
                <br />
              </ul>
            </div>
          </div>

          <div className={styles.card_eduFront}>
            <p className={styles.mySkills2}>my skills &rarr;</p>
            <p className={styles.pFront2}>BackEnd</p>
            <div className={styles.backEnd}>
              <ul>
                <li>REACT</li>
                <br />
                <li>NODE</li>
                <br />
                <li>EXPRESS</li>
                <br />
                <li>MONGODB</li>
                <br />
                <li>POSTGRESSQL</li>
                <br />
                <li>RUBY on RAILS</li>
                <br />
                <li>FIREBASE</li>
                <br />
                <li>RUBY on RAILS</li>
                <br />
              </ul>
            </div>
          </div>

          <div className={styles.card_eduFront}>
            <p className={styles.mySkills3}>my skills &rarr;</p>
            <p className={styles.pFront3}>Other Technologies</p>
            <div className={styles.otherEnd}>
              <ul>
                <li></li>
                <br />
                <li>Adobe Photoshop</li>
                <br />
                <li>Adobe Illustrator</li>
                <br />
                <li>Adobe After Effects</li>
                <br />
                <li>Adobe Premiere</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


//  <div className={styles.backEnd}>
//             <p>Back</p>
//             <ul>
//               <li></li>
//               <br />
//               <li></li>
//               <br />
//               <li></li>
//               <br />
//               <li></li>
//               <br />
//               <li></li>
//             </ul>
//           </div>


//           <div className={styles.otherEnd}>
//             <p>Other</p>
//             <ul>
//               <li></li>
//               <br />
//               <li></li>
//               <br />
//               <li></li>
//               <br />
//               <li></li>
//               <br />
//               <li></li>
//             </ul>
//           </div>