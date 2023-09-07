import { useLanguage } from "../../hooks/LanguageContext.hook";
import styles from "./TestimonialItem.module.css";

export default function TestimonialItem({item}) {
    const {language} = useLanguage();
    return (
        <div className={styles.cont}>
            <div className={styles.msg}>
                <div className={styles.msg_c}>
                    <img className={styles.ltick} src="./pics/leftticks.png" alt="left-ticks" />
                    <i className={styles.comment}>{item.message[language]}</i>
                    <img className={styles.rtick} src="./pics/rightticks.png" alt="right-ticks" />
                </div>
                
            </div>
            <div className={styles.prsn}>
                    <div>
                        <img src={item.pic} alt="Client" />
                    </div>
                    <div>
                        <p className={styles.name}>{item.name[language]}</p>
                        <p className={styles.school}>{item.school[language]}</p>
                        <p className={styles.country}>{item.country[language]}</p>
                    </div>
            </div>
        </div>
    )
}