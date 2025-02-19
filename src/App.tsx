import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appbar from "./scenes/global/Appbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Teams from "./scenes/teams";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/Invoices";
import Form from "./scenes/form";
import Bar from "./scenes/Bar";
import Calendar from "./scenes/Calendar";
import Faq from "./scenes/faq";
import Pie from "./scenes/Pie";
import Line from "./scenes/Line";

export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <BrowserRouter future={{ v7_startTransition: true }}>
            <Sidebar />
            <main className="content">
              <Appbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Teams />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                {/* <Route path="/geography" element={<Geography />} /> */}
              </Routes>
            </main>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
