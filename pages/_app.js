import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps, router }) {
    return (
        <ThemeProvider defaultTheme="dark" attribute="class">
            <AnimatePresence
                mode="wait"
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <motion.div
                    key={router.asPath}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </ThemeProvider>
    );
}

export default MyApp;
