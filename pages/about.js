import Link from "next/link";
import styles from "../styles/Card.module.css";

export default function Education() {
  return (
    <>
      <div className={styles.container}>
        <h1>ABOUT ME</h1>
        <h3>
          <Link href="/">
            <a>&larr;Back to home</a>
          </Link>
        </h3>

        <div className={styles.card_edu}>
          <h4>My Background &rarr;</h4>
          <p className={styles.about_me}>
            Hi, my name is Andre Torres, I'm a Developer.<br /> I'm an American/Brazilian. I've lived
            almost half of my life in Brazil and the other half in the USA.
            Currently I live in New York - USA. I graduated in Photography in
            Brazil and specialized in Director of photography, doing a lot of
            post production work, like color correction, color grading, 2D and
            3D animation, VFX and video editing. I've worked with short movies,
            documentaries, some corporation videos and political campaigns. I
            always wanted to learn how to code, so I could build amazing Apps
            and create new solutions for problems in our lives. When I moved
            back to USA I pursue my dream and started a Front-End-Web-Developer
            boot camp at General Assembly. After that I've done the Software
            Engineer boot camp at GA as well. Now with my Software Engineer
            degree unified with my background in arts can help me achieving my
            goals.
          </p>
        </div>
      </div>
    </>
  );
}
