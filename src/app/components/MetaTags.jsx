const MetaTags = ({ meta }) => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Default Title & Description */}
            <title>{meta?.title || "Default Website Title"}</title>
            <meta name="description" content={meta?.description || "Default description of the website."} />

            {/* Open Graph (OG) Meta Tags */}
            <meta property="og:site_name" content="CartPro" />
            <meta property="og:title" content={meta?.ogTitle || meta?.title || "Default Website Title"} />
            <meta property="og:description" content={meta?.ogDescription || meta?.description || "Default description."} />
            <meta property="og:url" content={meta?.url || "https://yourwebsite.com"} />
            <meta property="og:type" content={meta?.type || "website"} />
            {meta?.image && <meta property="og:image" content={meta.image} />}

            {/* Twitter Meta Tags */}
            {/* <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={meta?.ogTitle || meta?.title || "Default Website Title"} />
            <meta name="twitter:description" content={meta?.ogDescription || meta?.description || "Default description."} />
            {meta?.image && <meta name="twitter:image" content={meta.image} />} */}
        </>
    );
};

export default MetaTags;
