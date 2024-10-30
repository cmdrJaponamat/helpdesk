import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";
import pool from "@/db";

async function getData() {
  var res;
  try {
    res = await pool.query('SELECT * FROM users ');
    console.log('Query result: ', res.rows);
  } catch (error) {
    console.error('Query error: ', error);
  } finally {
    // await pool.end();
  }
  return res.rows[1].email;
}

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
         <div id= "email_input_container" className="form_input">
             <label htmlFor="Email_input">Enter your email</label>
             <input name="email" type="text" id="Email_input" placeholder="Email"></input>
         </div>
         <div id= "pass_input_container" className="form_input">
             <label htmlFor="Password_input">Enter your password</label>
             <input name="password" type="password" id="Password_input" placeholder="Password"></input>
         </div>
         <div className="form_input">
             <label htmlFor="Select_input">Choose usertype</label>
             <select name="Usertype" id="Select_input">
                 <option value="admin">Admin</option>
                 <option value="user">User</option>
             </select>
         </div>
         <button id="Submit_input" type="submit">Submit form</button>
      </main>
      <Script src="/registration.js" />
    </div>
  );
}
