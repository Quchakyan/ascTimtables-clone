import style from "./OrderPart3.module.css"
import { useLanguage } from "../../../hooks/LanguageContext.hook"


export default function OrderPart3({change}) {
    const {language, data} = useLanguage();
    const paymentMethods = data.order.paymentMethods;
    return(
        <div className={style.payment_cont}>
            <div className={style.paymentMethod}>
                <img className={style.creditCard} src="./pics/credit-card.png" alt="credit-card" />
                {data.order.paymentMethod[language]}
            </div>
            <div className={style.intoPaymentMethod}>
                <div className={style.intoPaymentMethodDiv}>
                    <div className={style.title}>{paymentMethods.card[language]}</div>
                    <div className={style.cards}>
                    <img src="./pics/mastercard.png" alt="" />
                    <img src="./pics/visa.png" alt="" />
                    <img src="./pics/maestro.png" alt="" />
                    <img src="./pics/american_express.png" alt="" />
                    </div>
                    <div className={style.btns}>
                        <a href="" className={style.payNow_btn}>{data.order.payNow[language]}</a>
                    </div>
                </div>
                <div className={style.intoPaymentMethodDiv}>
                    <div className={style.title}>{paymentMethods.payPal[language]}</div>
                    <div className={style.cards}>
                        <img src="./pics/mastercard.png" alt="" />
                        <img src="./pics/visa.png" alt="" />
                        <img src="./pics/maestro.png" alt="" />
                        <img src="./pics/american_express.png" alt="" />
                        <img src="./pics/cirrus.png" alt="" />
                    <img src="./pics/paypal.png" alt="" />
                    </div>
                    <div className={style.btns}>
                        <a href="" className={style.payNow_btn}>{data.order.payNow[language]}</a>
                    </div>

                </div>
                <div className={style.intoPaymentMethodDiv}>
                    <div className={style.title}>{paymentMethods.bankTransfer[language]}</div>
                    <div className={style.cards}>
                        <img src="./pics/cash.png" alt="" />
                    </div>
                    <div className={style.btns}>
                        <button className={style.placeOrder_btn}>{data.order.placeOrder[language]}</button>
                    </div>
                </div>
                <div className={style.intoPaymentMethodDiv}>
                    <div className={style.title}>{paymentMethods.cheque[language]}</div>
                    <div className={style.cards}>
                        <img src="./pics/cheque.png" alt="" />
                    </div>
                    <div className={style.btns}>
                        <button className={style.placeOrder_btn}>{data.order.placeOrder[language]}</button>
                    </div>
                </div>
            <div>
                <button className={style.placeOrder_btn} onClick={() => change(2)}>
                    <i className="fa fa-caret-left"></i> {data.order.extras[language]}
                </button>
            </div>
            </div>
        </div>
    )
}