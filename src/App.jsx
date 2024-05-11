
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Amplify} from 'aws-amplify';
import { Authenticator, withAuthenticator, View, Image, useTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import DropdownMenu from './Components/DropdownMenu'
import logoImage from './Images/pryzim_logo.jpg'

import LandingPage from './Pages/Landing_page';
import FinancialPerformanceePage from './Pages/Financial_Metrics_page'
import CompliancePage from './Pages/Compliance_page'
import AdminPage from './Pages/Admin_page'
import SettingPage from './Pages/Settings_page'
Amplify.configure(awsExports);

const components = {
  Header() {
    const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
        <Image
              alt="Pryzim logo"
              src={logoImage}
          />
      </View>
  );
},

};
function App() {
  return (
    <div className="App">
      <Authenticator loginMechanism={['email']} components={components}>
        {({ signOut }) => (
             <Router>
              <DropdownMenu signOut={signOut}/>
              <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/compliance" element={<CompliancePage />} />
              <Route path="/financialperfornmance" element={<FinancialPerformanceePage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/settings" element={<SettingPage />} />
              </Routes>
            </Router>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);
