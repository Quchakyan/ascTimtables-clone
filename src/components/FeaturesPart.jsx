import { useLanguage } from "../hooks/LanguageContext.hook";
import styles from "../assets/css/FeaturesPart.module.css";

export default function FeaturesPart() {
    const {language, data} = useLanguage();
    return (
        <section id="features_part">
            <div className = {styles.flex}>
                <div>
                    <img src="./pics/something.png" alt="pic" />
                </div>
                <div>
                    <h3>{data.scheduling.title[language]}</h3>
                    <p>{data.scheduling.description[language]}</p>
                </div>
            </div>
            <div className = {styles.flex}>
                <div>
                    <img className={styles.bigmac} src="./pics/bigmac.png" alt="pic" />
                </div>
                <div>
                        <h3>{data.quickEasy.title[language]}</h3>
                        <p>{data.quickEasy.description[language]}</p>
                </div>
            </div>
            <div className = {styles.flex}>
                <div>
                    <img className={styles.coffee} src="./pics/coffee.png" alt="pic" />
                </div>
                <div>
                    <h3>{data.oneMore.title[language]}</h3>
                    <p>{data.oneMore.description[language]}</p>
                </div>
            </div>
            <div className = {styles.flex}>
                <div>
                    <img className={styles.paper} src="./pics/paper2.png" alt="pic" />
                </div>
                <div>
                    <h3>{data.printing.title[language]}</h3>
                    <p>{data.printing.description[language]}</p>
                </div>
            </div>
            <div className = {styles.flex}>
                <div>
                    <img className={styles.complex} src="./pics/complex.png" alt="pic" />
                </div>
                <div>
                    <h3>{data.advanced.title[language]}</h3>
                    <p>{data.advanced.description[language]}</p>
                </div>
            </div>
        </section>
    )
}