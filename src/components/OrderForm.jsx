import { useState } from "react";
import OrderNavigation from "../UI/order-form-parts/navigation/OrderNavigation";
import styles from "../assets/css/OrderForm.module.css";
import OrderPart1 from "../UI/order-form-parts/part-1/OrderPart1";
import OrderPart2 from "../UI/order-form-parts/part-2/OrderPart2";
import OrderPart3 from "../UI/order-form-parts/part-3/OrderPart3";


export default function OrderForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const changeStep = (step) => {
        setCurrentStep(step);
    }
    return(
        <section className={styles.main}>
                <OrderNavigation step = {currentStep}/>
                {currentStep === 1 && <OrderPart1 change = {changeStep}/>}
                {currentStep === 2 && <OrderPart2 change = {changeStep}/>}
                {currentStep === 3 && <OrderPart3 change = {changeStep}/>}
        </section>
    )
}