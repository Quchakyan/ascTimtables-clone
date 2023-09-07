import styles from "./NavigationPanel.module.css";
import { useLanguage } from "../../hooks/LanguageContext.hook";
import { useNavigate } from "react-router-dom";

export default function NavigationPanel({checkPage = false}) {
    const {language, data} = useLanguage();
    const navigate = useNavigate();
    const navigateToTestimonials = () => {
        navigate("/testimonials")
    }
    const navigateToHome = () => {
        navigate("/")
    }
    return (
        <div>
            <nav>
                <ul className={styles.ul}>
                    {checkPage ? 
                        <li onClick={navigateToHome}>{data.menu.home[language]}</li>
                        :
                        <>
                            <li>{data.menu.info[language]}</li>
                            <li><a href = "#features_part">{data.menu.features[language]}</a></li>
                            <li><a href = "#download_part">{data.menu.download[language]}</a></li>
                            <li><a href = "pricing_part">{data.menu.pricing[language]}</a></li>
                            <li><a href = "#contact_part">{data.menu.contact[language]}</a></li>
                            <li onClick={navigateToTestimonials}>{data.menu.testimonials[language]}</li>
                        </>
                    }
                </ul>
            </nav>
        </div>
    )
}