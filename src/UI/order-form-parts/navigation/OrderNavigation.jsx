import styles from "./OrderNavigation.module.css";
import { useLanguage } from "../../../hooks/LanguageContext.hook";
import { useOrder } from "../../../hooks/OrderContext.hook";


export default function OrderNavigation ({step}) {
    const {language, data} = useLanguage();
    const {price, type, yearlyMaintenance, macLicense, texts, total} = useOrder();
    const billing = data.order.billingInfo[language];
    const extras = data.order.extras[language];
    const payment = data.order.paymentMethod[language]; 
    return (
        <div className={styles.div}>
            <span style={step === 1 ? {color: "rgb(39, 128, 175)"} : {}}>{billing}</span>
            <img src="./pics/divider.png" alt="divider" />
            <span style={step === 2 ? {color: "rgb(39, 128, 175)"} : {}}>{extras}</span>
            <img src="./pics/divider.png" alt="divider" />
            <span style={step === 3 ? {color: "rgb(39, 128, 175)"} : {}}>{payment}</span>
            <div className={styles.orderDiv}>
                {!!type && <p>{type} : $ {price}</p> }
                {!!macLicense && <p>{data.order.extraFeatures.mac.title[language]} : $ {data.order.extraFeatures.mac.price}</p> }
                {!!yearlyMaintenance && <p>{data.order.extraFeatures.yearly.title[language]} : $ {data.order.extraFeatures.yearly.price}</p> }
                {!!texts && <p>{data.order.extraFeatures.texts.title[language]} : $ {data.order.extraFeatures.texts.price}</p> }
                <div className={styles.total}>
                    Total: $ {total}
                </div>
            </div>
        </div>
    )
}