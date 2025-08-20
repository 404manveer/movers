"use client";
import "@/../node_modules/react-modal-video/scss/modal-video.scss";
import ScrollProgressButton from "@/components/shared/scroll-top/ScrollProgressButton";
import "@/styles/globals.css";
import { kanit } from "@/utils/fonts";

import { Provider } from 'react-redux';
import { store } from './store/store';

// import type { Metadata } from "next";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NavbarContainerTwo from "@/components/navbar/NavbarContainerTwo";
import Footer from "@/components/footer/Footer";

// export const metadata: Metadata = {
//   title: "Babuz - Banking Solutions for Businesses NextJs Template",
//   description: "Banking Solutions for Businesses NextJs Template",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"
/>
      <body className={`font-kanit ${kanit.variable} relative text-black-4`}>
  <Provider store={store}>
        <main>
          
          
             <NavbarContainerTwo />
          <div className="relative">{children}</div>
           <Footer />
           
          <ScrollProgressButton />

        </main>
  </Provider>
      </body>
    </html>
  );
}
