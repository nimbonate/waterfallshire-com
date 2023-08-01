import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { IconContext } from 'react-icons';
import { ScreenClassProvider, setConfiguration } from 'react-grid-system';

// CSS
import "./assets/css/App.css";
import 'react-toastify/dist/ReactToastify.css';

// Components
import Footer from './components/misc/Footer';
import Header from './components/misc/Header';
import Views from "./Views";
import { FirebaseAnalytics, StartAtTop } from './components/misc/Misc';
import { BodyWrapper, DevAlert, GlobalStyle } from './utils/styles/misc';

setConfiguration({ 
    // sm, md, lg, xl, xxl, xxxl
    breakpoints: [576, 768, 992, 1200, 1600, 1920],
    containerWidths: [540, 740, 960, 1140, 1540, 1810],
    defaultScreenClass: 'sm', 
    gutterWidth: 10,
});

function App() {
    const defaultSiteData = { // This object is just nicely converted to lowercase values fore Firestore version of values
        name: "Fire React House",
        description: "Fire React House is a template for creating web apps with Firebase and React.js.",
        projectId: "fire-react-house",
        customUrl: "fire-react-house.web.app",
        logo: {
            width: 100,
            height: 100,
            url: "https://firebasestorage.googleapis.com/v0/b/fire-react-house.appspot.com/o/public%2Flogos%2Flogo512.png?alt=media&token=0b4d4257-5449-4882-bacf-356272994c17",
            showTitle: "true",
        },
        emails: {
            support: "help@minute.tech",
            noreply: "noreply@minute.tech",
        },
        theme: {
            fonts: {
                heading: {
                    name: "Roboto Bold",
                    light: "black",
                    dark: "white",
                },
                body: {
                    name: "Roboto Regular",
                    light: "black",
                    dark: "white",
                },
                link: {
                    light: "navyblue",
                    dark: "lightblue",
                },
            },
            colors: {
                primary: "dodgerblue",
                secondary: "hotpink",
                tertiary: "tomato",
                red: "firebrick",
                green: "green",
                yellow: "gold",
                blue: "navy",
                grey: "grey",
                lightGrey: "lightgrey",
                background: {
                    light: "white",
                    dark: "black",
                },
            },
        },
    };

    // Theme object needs to be different than site object... or does it??
    const theme = {
        colors: {
            primary: defaultSiteData.theme.colors.primary,
            secondary: defaultSiteData.theme.colors.secondary,
            tertiary: defaultSiteData.theme.colors.tertiary,
            red: defaultSiteData.theme.colors.red,
            green: defaultSiteData.theme.colors.green,
            yellow: defaultSiteData.theme.colors.yellow,
            blue: defaultSiteData.theme.colors.blue,
            grey: defaultSiteData.theme.colors.grey,
            lightGrey: defaultSiteData.theme.colors.lightGrey,
            background: defaultSiteData.theme.colors.background.dark,
            // background: defaultSiteData.theme.colors.background.light, 
        },
        fonts: {
            heading: {
                name: defaultSiteData.theme.fonts.heading.name,
                color: defaultSiteData.theme.fonts.heading.dark, 
                // color: defaultSiteData.theme.fonts.heading.light,
            },
            body: {
                name: defaultSiteData.theme.fonts.body.name,
                color: defaultSiteData.theme.fonts.body.dark, 
                // color: defaultSiteData.theme.fonts.body.light, 
            },
            link: {
                color: defaultSiteData.theme.fonts.link.dark,
                // color: defaultSiteData.theme.fonts.link.light,
            },
        },
    }
    
    return (
        <>
        <HelmetProvider>
            <ScreenClassProvider>
                {/* ** Adjust this paddingBottom if icon is unaligned with font, applied to ALL fonts. Override with inline style for 1 icon! */}
                <IconContext.Provider value={{ style: { verticalAlign: "middle", display: "inline", paddingBottom: "1%"} }}>
                    <ThemeProvider theme={theme}>
                        <BodyWrapper>
                            <BrowserRouter>
                                <GlobalStyle /> 
                                <FirebaseAnalytics />
                                <StartAtTop />
                                {process.env.NODE_ENV === 'development' && (
                                    <DevAlert> LOCAL SERVER </DevAlert>
                                )}      
                                <Header site={defaultSiteData} />
                                <ToastContainer
                                    position="top-center"
                                    autoClose={4000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    theme={"light"}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    pauseOnHover
                                />
                                <Views site={defaultSiteData} />
                                <Footer site={defaultSiteData} />
                            </BrowserRouter>
                        </BodyWrapper>
                    </ThemeProvider>
                </IconContext.Provider>
            </ScreenClassProvider>
            
        </HelmetProvider>
        </>
    );
}

export default App;
