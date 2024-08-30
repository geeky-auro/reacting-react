// Import necessary modules from React
import { createContext, useContext } from "react";

// Create a context named ThemeContext with a default value
// This context will hold information about the current theme and methods to switch themes
export const ThemeContext = createContext({
    themeMode: "light", // The default theme mode is set to "light"
    darkTheme: () => {}, // Placeholder function for switching to dark theme
    lightTheme: () => {} // Placeholder function for switching to light theme
});

// Create a provider component for ThemeContext
// This will be used to wrap parts of your application that need access to the theme context
export const ThemeProvider = ThemeContext.Provider;

// Create a custom hook named useTheme to easily access ThemeContext
// This hook can be used in any functional component to access the context values
export default function useTheme() {
    return useContext(ThemeContext);
}
