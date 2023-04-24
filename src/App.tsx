import React from "react";

import Router from "src/pages/Router";
import ThemeProvider from "src/context/Books/Provider";




const App = () => {
  return (
      <ThemeProvider >
        <Router />
      </ThemeProvider>
  );
};
export default App;
