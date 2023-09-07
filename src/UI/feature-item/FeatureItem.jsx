import { useLanguage } from "../../hooks/LanguageContext.hook";
import styles from "./FeatureItem.module.css";

export default function FeatureItem({item, index}){
    const {language} = useLanguage();
    return(
        <li className = {styles.cont}>
            <div className = {styles.pic}>
                <img src={item.image} alt="icon" />
            </div>
            <div className={styles.desc}>
                <h4>{item.title[language]}</h4>
                <p>{item.description[language]}</p>
            </div>
        </li>
    )
}