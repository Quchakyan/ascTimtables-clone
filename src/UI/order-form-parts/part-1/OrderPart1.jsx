import styles from "./OrderPart1.module.css"
import { useLanguage } from "../../../hooks/LanguageContext.hook"
import { useNavigate } from "react-router-dom";

export default function OrderPart1({change}) {
    const {data, language} = useLanguage();
    const myData = data.form;
    const navigate = useNavigate();
    const navigateHome = () => navigate("/");
    return(
        <div className={styles.form}>
            <div className={styles.header}>
                <img src="./pics/glob.png" alt="globus" />
                <span>{data.order.billingInfo[language]}</span>
            </div>
            <form>
                <div className={styles.two}>
                    <div>
                        <label>
                            <p>{myData.schoolName[language]}</p>
                            <input type="text" name="school"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>{myData.address[language]}</p>
                            <input type="text" name = "address"/>
                        </label>
                    </div>
                </div>
                <div className={styles.four}>
                    <div>
                        <label>
                            <p>{myData.city[language]}</p>
                            <input type="text" name="city"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>Zip</p>
                            <input type="text" name="zip"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>{myData.country[language]}</p>
                            <select name="country">
                                {myData.countryList.map((item,index) => <option key={index}>{item[language]}</option>)}
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>State</p>
                            <select name="country">
                                {myData.countryList.map((item,index) => <option key={index}>{item[language]}</option>)}
                            </select>
                        </label>
                    </div>
                </div>
                <div className={styles.two}>
                    <div className={styles.two}>
                        <div>
                            <div>
                                <label>
                                    <p>{myData.contactPerson[language]}</p>
                                    <input type="text" name="conntact_person"/>   
                                </label>
                            </div>
                            <div>
                                <label>
                                    <p>{myData.phoneNumber[language]}</p>
                                    <input type="text" name="phone_number"/>   
                                </label>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>
                                    <p>{myData.email[language]}</p>
                                    <input type="text" name="email"/>   
                                </label>
                            </div>
                            <div>
                                <label>
                                    <p>{myData.confirmEmail[language]}</p>
                                    <input type="text" name="confirm_email"/>   
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textarea}>
                        <div>
                            <p>{myData.comment[language]}</p>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div> 
                    </div>
                </div>
            </form>
            <div className={styles.nav_btns}>
                <div>
                    <button onClick={navigateHome}>
                        <i className="fa fa-caret-left"></i> {data.order.btnPackage[language]}
                    </button>
                </div>
                <div>
                    <button onClick={() => change(2)}>
                        {data.order.nextStep[language]} <i className="fa fa-caret-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}