import { useLanguage } from "../../hooks/LanguageContext.hook"
import styles from "./OrderItem.module.css";

export default function OrderItem({item, notAllowed = [], sale = false}) {
    const {language, data} = useLanguage();
    return (
        <tr>
            <td>
                <p className={styles.name}>{item[language]}</p>
                <p className={styles.desc}>{item.description && item.description[language]}</p>
            </td>
            <td>
                {notAllowed.find(el => el === 1) ? "" : <div><img src = "./pics/check.png"/></div>}
                <span className={styles.desc}>{sale && data.order.sale[language]}</span>
            </td>
            <td>
                {notAllowed.find(el => el === 2) ? "" : <div><img src = "./pics/check.png"/></div>}
                <span className={styles.desc}>{sale && data.order.sale[language]}</span>
            </td>
            <td>
                {notAllowed.find(el => el === 3) ? "" : <div><img src = "./pics/check.png"/></div>}
                <span className={styles.desc}>{sale && data.order.sale[language]}</span>
            </td>
            <td>
                {notAllowed.find(el => el === 4) ? "" : <div><img src = "./pics/check.png"/></div>}
                <span className={styles.desc}>{sale && data.order.sale[language]}</span>
            </td>
        </tr>
    )
}