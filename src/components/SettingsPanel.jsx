import { useSettings } from "../context/SettingsContext";

function SettingsPanel() {
    const {
        theme,
        language,
        setTheme,
        setLanguage,
        resetSettings,
    } = useSettings();

    return (
        <div className="card">
            <h2>
                {language === "en" ? "Settings" : "การตั้งค่า"}
            </h2>

            <div className="setting-group">
                <h3>{language === "en" ? "Theme" : "ธีม"}</h3>

                <div className="button-group">
                    <button
                        className={theme === "light" ? "active" : ""}
                        onClick={() => setTheme("light")}
                    >
                        ☀️ {language === "en" ? "Light" : "สว่าง"}
                    </button>

                    <button
                        className={theme === "dark" ? "active" : ""}
                        onClick={() => setTheme("dark")}
                    >
                        🌙 {language === "en" ? "Dark" : "มืด"}
                    </button>
                </div>
            </div>

            <div className="setting-group">
                <h3>{language === "en" ? "Language" : "ภาษา"}</h3>

                <div className="button-group">
                    <button
                        className={language === "en" ? "active" : ""}
                        onClick={() => setLanguage("en")}
                    >
                        EN
                    </button>

                    <button
                        className={language === "th" ? "active" : ""}
                        onClick={() => setLanguage("th")}
                    >
                        TH
                    </button>
                </div>
            </div>

            <button className="reset-button" onClick={resetSettings}>
                {language === "en" ? "Reset Settings" : "รีเซ็ตการตั้งค่า"}
            </button>
        </div>
    );
}

export default SettingsPanel;