import styles from "./OrderButtons.module.css"
import { useLanguage } from "../../../hooks/LanguageContext.hook"
import { useOrder } from "../../../hooks/OrderContext.hook";
import { useNavigate } from "react-router-dom";

export default function OrderButtons() {
    const {changeType, changePrice} = useOrder();
    const {data, language} = useLanguage();
    const navigate = useNavigate();
    const selectOrder = (price,type) => {
        changeType(type);
        changePrice(price);
        navigate("/order");
    }
    return (
        <tr className={styles.grey}>
            <td></td>
            <td>
                <button className={styles.btn} onClick={() => selectOrder(399, "ascTimetables Primary schools")} >{data.order.wordOrder[language]}</button>
            </td>
            <td>
                <button className={styles.btn} onClick={()=> selectOrder(499, "ascTimetables Standard")}>{data.order.wordOrder[language]}</button>
            </td>
            <td>
                <button className={styles.btn} onClick={()=> selectOrder(995, "ascTimetables Premium")}>{data.order.wordOrder[language]}</button>
            </td>
            <td>
                <button className={styles.btn} onClick={()=> selectOrder(3995, "ascTimetables PRO")}>{data.order.wordOrder[language]}</button>
            </td>
        </tr>
    )
}