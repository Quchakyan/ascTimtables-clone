import FeaturesPanel from "../UI/features-panel/FeaturesPanel";
import styles from "../assets/css/AboutPart.module.css";
import { useLanguage } from "../hooks/LanguageContext.hook";

export default function AboutPart(){
    const {language, data} = useLanguage();
    return(
        <section className={styles.container}>
            <div className={styles.flex}>
                <div className={styles.first}>
                    <img src="./pics/mainmock.png" alt="mainmock" />
                </div>
                <div className={styles.second}>
                    <p className={styles.xxl}>20 {data.statistics.years[language]}</p>
                    <p className={styles.xl}>173 {data.statistics.countries[language]}</p>
                    <p className={styles.l}>150,000 {data.statistics.schools[language]}</p>
                    <p className={styles.m}>7,300,000+ {data.statistics.timetables[language]}</p>
                </div>
            </div>
            <FeaturesPanel />
            
        </section>
    )
}