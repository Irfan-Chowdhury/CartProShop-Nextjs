import Head from "next/head";
import Script from "next/script";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <>
          

            <Header />

            <div className="center loader"></div>


            <main>{children}</main>

            <div className="shop__filters">
            </div>

            <Footer />

            {/* 4️⃣ Load Other Scripts */}
            <Script src="/assets/js/plugin.js" strategy="lazyOnload" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/sweetalert2@11.js" strategy="lazyOnload" />
            <Script src="/assets/js/main.js" strategy="lazyOnload" />
            <Script src="/assets/js/share.js" strategy="lazyOnload" />
        </>
    );
}
