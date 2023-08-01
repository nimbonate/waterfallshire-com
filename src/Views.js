import React from 'react'
import { Routes, Route } from "react-router-dom";
// Pages //
// Misc
import Home from './components/pages/misc/Home';
import About from './components/pages/misc/About';
import Credits from './components/pages/misc/Credits';
import PrivacyPolicy from './components/pages/misc/PrivacyPolicy';
import TermsConditions from './components/pages/misc/TermsConditions';
import ErrorBoundary from './components/pages/misc/ErrorBoundary';
import Page404 from './components/pages/misc/Page404';

function Views(props) {
    return (
        <Routes>
            <Route 
                index
                path="/"
                element={
                    <ErrorBoundary><Home site={props.site} /></ErrorBoundary>
                }
            />

            <Route 
                path="/about" 
                element={<ErrorBoundary><About site={props.site} /></ErrorBoundary>}
            />

            <Route 
                path="/credits" 
                element={<ErrorBoundary><Credits site={props.site} /></ErrorBoundary>}
            />

            <Route 
                path="/privacy-policy" 
                element={<ErrorBoundary><PrivacyPolicy site={props.site} /></ErrorBoundary>}
            />

            <Route 
                path="/terms-conditions" 
                element={<ErrorBoundary><TermsConditions site={props.site} /></ErrorBoundary>}
            />


            <Route path="*" element={<Page404 site={props.site} />} />
        </Routes>
    )
}

export default Views;