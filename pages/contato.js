// CONTATO
import Link   from 'next/link'




import styles from "../styles/Home.module.css";



export default function Contato() {
    return (
      <>
        <h2></h2>
        <h1>CONTATOS</h1>
        <h3>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h3>

        <div className="click-animations">
          <h2 className="new-section">SEND ME A MESSAGE</h2>
          <form>
            <input type="text" placeholder="Name" id="name" />
            <input type="text" placeholder="Email" id="email" />
            <textarea rows="7" placeholder="Message" id="message"></textarea>
          </form>
          <button>Send</button>
        </div>
      </>
    );



    

}