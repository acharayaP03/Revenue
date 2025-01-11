import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appbar from "./scenes/global/Appbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";

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
                {/* <Route path="/team" element={<Team />} /> */}
                {/* <Route path="/contacts" element={<Contacts />} /> */}
                {/* <Route path="/invoices" element={<Invoices />} /> */}
                {/* <Route path="/form" element={<Form />} /> */}
                {/* <Route path="/bar" element={<Bar />} /> */}
                {/* <Route path="/pie" element={<Pie />} /> */}
                {/* <Route path="/line" element={<Line />} /> */}
                {/* <Route path="/faq" element={<FAQ />} /> */}
                {/* <Route path="/geography" element={<Geography />} /> */}
                {/* <Route path="/calendar" element={<Calendar />} /> */}
              </Routes>
            </main>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
