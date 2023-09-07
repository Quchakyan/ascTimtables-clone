import { useLanguage } from "../hooks/LanguageContext.hook";
import styles from "../assets/css/Footer.module.css"

export default function Footer() {
    const {language,data} = useLanguage();
    const year = new Date().getFullYear();
    return(
        <footer className={styles.cont}>
            <div className={styles.ft}>
                <div>
                    <img src="./pics/asc.png" alt="asc" />
                </div>
                <div>
                    <p className={styles.p}>&copy; {year} {data.footer.paragraph[language]}</p>
                    <small className={styles.sub}>{data.footer.subParagraph[language]}</small>
                </div>
            </div>
        </footer>
    )
}