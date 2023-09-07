import FeatureItem from "../UI/feature-item/FeatureItem";
import { useLanguage } from "../hooks/LanguageContext.hook";
import styles from "../assets/css/FeaturesList.module.css";

export default function FeaturesList(){
    const {data, language} = useLanguage();
    return (
        <section className = {styles.container}>
            <h2 className={styles.title}>{data.menu.features[language]}</h2>
            <ul className={styles.ul}>
                {data.features.map((item,index) => {
                    return <FeatureItem item = {item} key = {index} />
                })}
            </ul>
        </section>
    );
}