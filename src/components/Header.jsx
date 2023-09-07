import styles from "../assets/css/Header.module.css";
import NavigationPanel from "../UI/navigation-panel/NavigationPanel";
import LanguagesPanel from "../UI/languages-panel/LanguagesPanel";

export default function Header({checkPage = false}) {
    return (
        <header className = {styles.header}>
            <div>
                <img src="./pics/logo.png" alt="logo" className = {styles.logo}/>
            </div>
            <div>
                <LanguagesPanel />
                <NavigationPanel checkPage = {checkPage} />
            </div>
        </header>
    )
}