import { useLanguage } from "../../hooks/LanguageContext.hook";
import styles from "./FeaturesPanel.module.css";

export default function FeaturesPanel() {
    const {language, data} = useLanguage();
    return (
        <ul className = {styles.ul}>
            {data.services.map((item,index) => {
                return (
                    <li key = {index}>
                        <div className={styles.img}>
                            <img src={item.pic} alt="" />
                        </div>
                        <p>
                            <b>{item.title[language]}</b>
                        </p>
                        <small className={styles.small}>{item.description[language]}</small>
                    </li>
                )
                }
            )}
        </ul>
    );
}