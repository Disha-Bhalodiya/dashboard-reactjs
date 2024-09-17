import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material"; 
import Dashboard from "./scenes/dashboard/dashboard";
import SidebarCom from "./scenes/global/Sidebar";
import Teams from "./scenes/teams/teams";
import Contacts from "./scenes/contacts/contact";
import Invoices from "./scenes/invoices/invoices";
import Form from "./scenes/form/form";
import CalendarComp from "./scenes/calender/calender";
import FAQ from "./scenes/faq/faq";
import Line from "./scenes/line/line";
import Pie from "./scenes/pie/pie";
import Bar from "./scenes/bar/bar";
import Geography from "./scenes/geography/geography";

  


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);   

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarCom isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Teams />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line/>} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<CalendarComp />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;