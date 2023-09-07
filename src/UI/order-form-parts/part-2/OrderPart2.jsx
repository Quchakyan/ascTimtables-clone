import styles from "../part-1/OrderPart1.module.css"
import { useLanguage } from "../../../hooks/LanguageContext.hook"
import { useOrder } from "../../../hooks/OrderContext.hook";

export default function OrderPart2({change}) {
    const {macLicense, texts, yearlyMaintenance,changeYearlyMaintenance, changeMacLicense, changeTexts, changeTotal} = useOrder();
    const {data, language} = useLanguage();
    return(
        <div className={styles.form}>
            <div className={styles.header}>
                <img src="./pics/plus.png" alt="globus" />
                <span>{data.order.extras[language]}</span>
            </div>
            <div className={styles.extras_cont}>
                <div style={macLicense ? {background: "#DCEDD9"} : {}} key={data.order.extraFeatures.mac.price} className={styles.extras}>
                    <div className={styles.price}>$ {data.order.extraFeatures.mac.price}</div>
                    <div className={styles.name}>
                        <h4>{data.order.extraFeatures.mac.title[language]}</h4>
                        <p>{data.order.extraFeatures.mac.paragraph[language]}</p>
                    </div>
                    <div className={styles.add}>
                        <button onClick={() => changeMacLicense(prev => !prev)} className={styles.addingBtn}>
                            {macLicense?data.order.remove[language]:data.order.add[language]}
                        </button>
                    </div>
                </div>
                <div style={yearlyMaintenance ? {background: "#DCEDD9"} : {}} key={data.order.extraFeatures.yearly.price} className={styles.extras}>
                    <div className={styles.price}>$ {data.order.extraFeatures.yearly.price}</div>
                    <div className={styles.name}>
                        <h4>{data.order.extraFeatures.yearly.title[language]}</h4>
                        <p>{data.order.extraFeatures.yearly.paragraph[language]}</p>
                    </div>
                    <div className={styles.add}>
                        <button onClick={()=>changeYearlyMaintenance(prev => !prev)} className={styles.addingBtn}>
                            {yearlyMaintenance?data.order.remove[language]:data.order.add[language]}
                        </button>
                    </div>
                </div>
                <div style={texts ? {background: "#DCEDD9"} : {}} key={data.order.extraFeatures.texts.price} className={styles.extras}>
                    <div className={styles.price}>$ {data.order.extraFeatures.texts.price}</div>
                    <div className={styles.name}>
                        <h4>{data.order.extraFeatures.texts.title[language]}</h4>
                        <p>{data.order.extraFeatures.texts.paragraph[language]}</p>
                    </div>
                    <div className={styles.add}>
                        <button onClick={() => {
                            changeTexts(prev=> !prev)
                        }} className={styles.addingBtn}>
                            {texts?data.order.remove[language]:data.order.add[language]}
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.nav_btns}>
                <div>
                    <button onClick={() => change(1)}>
                        <i className="fa fa-caret-left"></i> Billing Info
                    </button>
                </div>
                <div>
                    <button onClick={() => change(3)}>
                        NEXT STEP <i className="fa fa-caret-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}