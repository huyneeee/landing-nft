import Footer from "@/components/organisms/Footer";
import { ThemeProvider } from "@/contexts/ThemeCTX";
import React, { PropsWithChildren } from "react";
import Header from "@/components/organisms/Header";

const PublicLayout = (props: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default PublicLayout;
