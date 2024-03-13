// Import necessary libraries
"use client";
import { Inter } from "next/font/google";
import { useEffect, useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import Header from "@/Components/layouts/Header";
import Footer from "@/Components/layouts/Footer";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Provider } from "react-redux";
import store from "@/redux/store";

// Define the Inter font
const inter = Inter({ subsets: ["latin"] });

// No changes needed here (metadata is optional)

export default function RootLayout({ children }) {
  // **Conditional Bootstrap import (useLayoutEffect for client-side execution):**
  useLayoutEffect(() => {
    if (typeof document !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  // **Remove unnecessary jQuery import:**
  // useEffect(() => {
  //   import("jquery/dist/jquery.min.js");
  // }, []);  // Removed

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* No changes needed here (BrowserRouter can be added if needed) */}
        <Provider store={store}>
          <Header />
          {children}
          <ToastContainer />
          <Footer />
        </Provider>
        {/* No changes needed here */}
      </body>
    </html>
  );
}
