import { useSettings } from "../context/SettingsContext";

function Header() {
    const { language } = useSettings();

    return (
        <header className="header">
            <h1>
                {language === "en" ? "Welcome" : "ยินดีต้อนรับ"}
            </h1>

            <p>
                {language === "en"
                    ? "Customize your preferences"
                    : "ปรับแต่งการตั้งค่าของคุณ"}
            </p>
        </header>
    );
}

export default Header;