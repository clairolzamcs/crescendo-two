import React from "react";
import { HeadProvider } from "react-head";
import { Footer } from "./components/Footer";
import { AcmeInsights } from "./components/AcmeInsights";
import { UpcomingInsights } from "./components/UpcomingInsights";
import { NavBar } from "./components/NavBar";
import { Commitment } from "./components/Commitment";
import { Banner } from "./components/Banner";

const App: React.FC = () => {
  return (
    <>
      <HeadProvider>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        ></meta>
      </HeadProvider>

      <NavBar />

      <Banner />

      <AcmeInsights />

      <Commitment />

      <UpcomingInsights />

      <Footer />
    </>
  );
};

export default App;
