import { useLanguage } from "../hooks/LanguageContext.hook";
import styles from "../assets/css/OrderPart.module.css";
import OrderItem from "../UI/order-item/OrderItem";
import OrderButtons from "../UI/order-item/order-buttons/OrderButtons";

export default function OrderPart() {
    const {language, data} = useLanguage();
    return(
        <section id="pricing_part" className={styles.container}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th></th>
                        <th>
                            <h4>{data.order.types.primary[language]}</h4>
                            <p className={styles.little}>{data.order.types.primary.desc[language]}</p>
                        </th>
                        <th>
                            <h4>{data.order.types.standard[language]}</h4>
                            <p className={styles.little}>{data.order.types.primary.desc[language]}</p>
                        </th>
                        <th>
                            <h4>{data.order.types.standard[language]}</h4>
                            <p className={styles.little}>{data.order.types.primary.desc[language]}</p>
                        </th>
                        <th>
                            <h4>{data.order.types.pro[language]}</h4>
                            <p className={styles.little}>{data.order.types.pro.desc[language]}</p>
                        </th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    <tr className={styles.grey}>
                        <td></td>
                        <td>
                            <p className={styles.price}>{data.order.types.primary.price}</p>
                            <small className={styles.payment}>{data.order.types.oneTimePayment[language]}</small>
                        </td>
                        <td>
                            <p className={styles.price}>{data.order.types.standard.price}</p>
                            <small className={styles.payment}>{data.order.types.oneTimePayment[language]}</small>
                        </td>
                        <td>
                            <p className={styles.price}>{data.order.types.premium.price}</p>
                            <small className={styles.payment}>{data.order.types.oneTimePayment[language]}</small>
                        </td>
                        <td>
                            <p className={styles.price}>{data.order.types.pro.price}</p>
                            <small className={styles.payment}>{data.order.types.oneTimePayment[language]}</small>
                        </td>
                    </tr>
                    <OrderButtons />
                    {
                        data.order.features.map((item,index) => {
                            return <OrderItem item = {item} key = {index} notAllowed={item.notAllowed} sale = {item.isSale}/>
                        })
                    }
                </tbody>
                <tfoot className={styles.tfoot}>
                    <OrderButtons />
                </tfoot>
            </table>
            <div className={styles.purchase}>
                <div className={styles.btn}>
                    <img src="./pics/plus.png" alt="plus" />
                    <span className={styles.a}>{data.order.purchaseExtras[language]}</span>
                </div>        
            </div>
        </section>
        
    )
}