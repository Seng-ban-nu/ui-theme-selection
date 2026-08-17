import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

const defaultSettings = {
    theme: "light",
    language: "en",
};

export function SettingsProvider({ children }) {
    const [settings, setSettings] = useState(() => {
        const savedSettings = localStorage.getItem("app-settings");

        if (savedSettings) {
            try {
                return JSON.parse(savedSettings);
            } catch {
                return defaultSettings;
            }
        }

        return defaultSettings;
    });

    useEffect(() => {
        localStorage.setItem("app-settings", JSON.stringify(settings));
    }, [settings]);

    const setTheme = (theme) => {
        setSettings((previousSettings) => ({
            ...previousSettings,
            theme,
        }));
    };

    const setLanguage = (language) => {
        setSettings((previousSettings) => ({
            ...previousSettings,
            language,
        }));
    };

    const resetSettings = () => {
        setSettings(defaultSettings);
    };

    return (
        <SettingsContext.Provider
            value={{
                theme: settings.theme,
                language: settings.language,
                setTheme,
                setLanguage,
                resetSettings,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    return useContext(SettingsContext);
}