import { useLanguage } from "../hooks/LanguageContext.hook"
import TestimonialItem from "../UI/testimonial-item/TestimonialItem";
import styles from "../assets/css/TestimonialsShortPart.module.css";
import { useNavigate } from "react-router-dom";

export default function TestimonialsShortPart() {
    const {data, language} = useLanguage();
    const getTwo = data.testimonials.splice(0,2);
    const navigate = useNavigate();
    const navigateToTestimonials = () => {
        navigate("/testimonials")
    };
    return(
        <section className={styles.container}>
            <div>
                {
                    getTwo.map((item, index) => {
                        return(<TestimonialItem item = {item} key = {index}/>);
                    })
                }
            <div className={styles.more}>
                <div className={styles.btn} onClick={navigateToTestimonials}>
                    <img src="./pics/msgIcon.png" alt="msgIcon" />
                    <span className={styles.navigate}>{data.seeMoreTestimonials[language]}</span>
                </div>
            </div>
            </div>
           
        </section>
    )
}