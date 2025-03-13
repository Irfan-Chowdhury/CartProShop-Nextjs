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

            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossOrigin="anonymous"></script>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
            {/* jQuery Zoom CDN */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-zoom/1.7.21/jquery.zoom.min.js"></script>


            {/* Load mCustomScrollbar JS */}
            <Script 
                src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js" 
                strategy="lazyOnload" 
            />
                        
            {/* 4️⃣ Load Other Scripts */}
            <Script src="/assets/js/plugin.js" strategy="lazyOnload" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/sweetalert2@11.js" strategy="lazyOnload" />
            <Script src="/assets/js/main.js" strategy="lazyOnload" />
            <Script src="/assets/js/share.js" strategy="lazyOnload" />
        </>
    );
}
