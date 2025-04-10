import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider defaultTheme="light" attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
