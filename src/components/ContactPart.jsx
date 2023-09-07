import styles from "../assets/css/ContactPart.module.css";
import {useLanguage} from "../hooks/LanguageContext.hook";

export default function ContactPart(){
    const {language, data} = useLanguage();
    return(
        <section id="contact_part" className={styles.bg}>
            <h2 className={styles.h2}>{data.contactForm.title[language]}</h2>
            <p>{data.contactForm.paragraph[language]}</p>
            <form className={styles.form} action="#">
                <label  className={styles.label} htmlFor="nameSchool">
                    {data.form.schoolName[language]}
                    <input name="school" className={styles.input} type="text" id="nameSchool" />
                </label>
                <label className={styles.label} htmlFor="email">
                    {data.form.email[language]}
                    <input name="email" className={styles.input} type="text" id="email" />
                </label>
                <label className={styles.label} htmlFor="textar">
                    {data.contactForm.comment[language]}
                    <textarea name="comment" id="textar" className={styles.textarea} ></textarea>
                </label>
                <div>
                    <button className={styles.btn}>{data.form.send[language]} <img className={styles.img} src="./pics/mail.png" alt="mail" /> </button>
                </div>
            </form>
        </section>
    )
}