import Link from "next/link";
import styles from "../styles/Card.module.css";

export default function Projects() {
  return (
    <>
      <div className={styles.container}>
        <h1>PROJECTS</h1>
        <h3>
          <Link href="/">
            <a>&larr;Back to home</a>
          </Link>
        </h3>

        <div className={styles.card_edu}>
          <div className={styles.todoList}>
            < a href="https://andre-todolist.web.app/"> <img src="/todo2.png" className={styles.snap} /></a>

            <div className={styles.todoDesc}>
              <div className={styles.todoTtitle}>
                ANDRE TORRES - TODO LIST &rarr;
              </div>
              <p>
                FINAL PROJECT - General Assembly
                <br />
                <br />
                This project is a web application, that is fully functional,
                responsive and functional. The App is a To Do List, web based
                application, that helps users organize their projects and tasks
                in an environment easy to use, where the user can use either
                normal or dark modes. The user can create a new project and add
                tasks to it, and after the tasks are completed they can check
                them out of the project. In the future the APP will include a
                calendar and a alert system that will send a message to the
                users email, like an reminder.
              </p>
              <br />
              LINK &rarr;{" "}
              <a href="https://andre-todolist.web.app/">Todo List</a>
            </div>
          </div>
        </div>

        <div className={styles.card_edu}>
          <div className={styles.todoList}>
            <a href=""> <img src="/noDigNoRide.png" className={styles.snap} /></a>

            <div className={styles.todoDesc}>
              <div className={styles.todoTtitle}>NO DIG NO RIDE &rarr;</div>
              <p>
                PROJECT 4 - General Assembly
                <br />
                <br />
                This is an app created using ruby rails in the back-end and
                react on the front-end. The app is a bike shop called no dig no
                ride, where the user can customize his bike build with the given
                options, fully intuitive and interative application.
              </p>
              <br />
              LINK &rarr; <a href="">No Dig No Ride</a>
            </div>
          </div>
        </div>

        <div className={styles.card_edu}>
          <div className={styles.todoList}>
            <a href="https://chicomangusta.github.io/DUCK_HUNT/"> <img src="/duck-hunt.jpg" className={styles.snap} /></a>

            <div className={styles.todoDesc}>
              <div className={styles.todoTtitle}>DUCK HUNT &rarr;</div>
              <p>
                PROJECT 1 - General Assembly
                <br />
                <br />
                This is an game app, fully intuitive and interactive
                application, created using JavaScript, HTML and CSS as their
                technologies. This app is the classic game from the late 80's
                from Nintendo, called Duck Hunt. The user have the option to
                restart and their are multiple levels that increases its
                difficulty.
              </p>
              <br />
              <br />
              LINK &rarr;{" "}
              <a href="https://chicomangusta.github.io/DUCK_HUNT/">Duck Hunt</a>
            </div>
          </div>
        </div>

        <div className={styles.card_edu}>
          <div className={styles.todoList}>
            <a href="https://codepen.io/chicomangusta/full/vYYJzVx"> <img src="/StarWars.png" className={styles.snap} /></a>

            <div className={styles.todoDesc}>
              <div className={styles.todoTtitle}>STAR WARS - API &rarr;</div>
              <p>
                PROJECT JSD - General Assembly
                <br />
                <br />
                This is an app fully intuitive and interactive application, that
                retrives Star Wars data from an API called SWAPI. Created using
                JavaScript, HTML, CSS and AXIOS as its API technologies. Simple
                UI/UX design, their are 4 buttons for 4 different category,
                Character, Planets, Films and Starships.
                <br />
                <br />
                LINK &rarr;{" "}
                <a href="https://codepen.io/chicomangusta/full/vYYJzVx">
                  Star Wars API
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
