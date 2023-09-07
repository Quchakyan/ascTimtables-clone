import { useLanguage } from "../hooks/LanguageContext.hook";
import styles from "../assets/css/DownloadPart.module.css";


export default function DownloadPart(){
    const {language, data} = useLanguage();
    return (
        <section id="download_part" className={styles.container}>
            <div className={styles.item}>
                <h4 className={styles.title}>{data.download.title[language]}</h4>
                <p>{data.download.paragraph_1[language]}</p>
                <p>{data.download.paragraph_2[language]}</p>
            </div>
            <div className={styles.item}>
                <div className={styles.button}>
                    <div className={styles.fl_c}>
                        <div>
                            <img src="./pics/arrow.png" alt="arrows" />
                        </div>
                        <p className={styles.xl}>{data.download.button.title[language]}</p>
                        <p className={styles.xs}>{data.download.button.name}</p>
                        <small className={styles.xxs}>{data.download.button.version[language]} 2024- 18.2MB - 2023-08-25</small>
                    </div>
                    <div className={styles.os}>
                        WIN
                    </div>
                </div>  
                <div className={styles.link}>
                    <a href="#">{data.download.freeTrial[language]}</a>
                <img src="./pics/dude.png" alt="dude" className={styles.dude}/>
                </div>
            </div>
        </section>
    )
}