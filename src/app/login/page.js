import Image from "next/image";
import styles from "../page.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
         
         <div id= "name_input_container" className="form_input">
             <label htmlFor="Name_input">Enter your name</label>
             <input name="username" type="text" id="Name_input" placeholder="Name"></input>
         </div>
         <div id= "pass_input_container" className="form_input">
             <label htmlFor="Password_input">Enter your password</label>
             <input name="password" type="password" id="Password_input" placeholder="Password"></input>
         </div>
         <button id="Submit_input" type="submit">Login</button>
      </main>
      <Script src="/login.js" />
    </div>
  );
}
