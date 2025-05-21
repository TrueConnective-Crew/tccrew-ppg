import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "@/components/ui/provider";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "@/pages/App";
import NotFound from "@/pages/NotFound";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
