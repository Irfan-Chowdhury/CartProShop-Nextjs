import Script from "next/script";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="LionCoders" />
        <title>CartPro</title>
        <link rel="icon" type="image/png" href="/assets/favicon.png" />

        {/* Stylesheets */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/cartpro-style.css" />
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap" 
          rel="stylesheet" 
        />
      </head>
      
      <body>
        {/* Header */}
        <Header />

        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* Load Scripts */}
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" strategy="beforeInteractive" />
        <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.6.2/js/bootstrap.min.js" strategy="beforeInteractive" />

        <Script src="/assets/js/plugin.js" strategy="lazyOnload" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/sweetalert2@11.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
        <Script src="/assets/js/share.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
