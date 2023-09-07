import styles from "./LanguagesPanel.module.css";
import { useState } from "react";
import { useLanguage } from '../../hooks/LanguageContext.hook';

export default function NavigationPanel() {
    const {language, changeLanguage } = useLanguage();
    const handleChangeLanguage = (newLang) => {
        changeLanguage(newLang);
    };
    return (
        <div className={styles.container}>
            <div className={styles.flags}>
                <img src="./pics/am_flag.png" alt="am-flag" onClick={() => handleChangeLanguage("am")}/>
                <img src="./pics/ru_flag.png" alt="ru-flag" onClick={() => handleChangeLanguage("ru")}/>
                <img src="./pics/en_flag.png" alt="en-flag" onClick={() => handleChangeLanguage("en")}/>
            </div>
            <select value={language} className = {styles.select} onChange = {(e) => handleChangeLanguage(e.target.value)}>
                <option value="am">Հայերեն</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
            </select>
        </div>
    )
}