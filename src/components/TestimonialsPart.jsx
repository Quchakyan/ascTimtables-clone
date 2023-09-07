import { useLanguage } from "../hooks/LanguageContext.hook"
import TestimoniialItem from "../UI/testimonial-item/TestimonialItem";

export default function TestimonialsPart() {
    const { data } = useLanguage();
    // console.log(data); 
    const testimonials = data.testimonials;
    console.log(testimonials);
    return(
        <section style={{marginTop: "20px"}}>
            <div>
                <img src="./pics/testimonials.jpg" alt="julia" />
            </div>
            <div>
                {
                    testimonials.map((item, index) => {
                        return(<TestimoniialItem item = {item} key = {index}/>)
                    })
                }
            </div>
        </section>
    )
}