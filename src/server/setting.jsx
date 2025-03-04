"use server";

export const getCommonHeaderData = async () => {
    const API_URL = process.env.NEXT_PUBLIC_APP_URL; // Use NEXT_PUBLIC_ prefix

    try {
        const response = await fetch(`${API_URL}/storefront-header-data`);

        if (!response.ok) {
            return null;
        }
        const result = await response.json();
        console.log("📦 JSON result:", result.data);

        return result.data;
    } catch (error) {
        return null;
    }
}

// export const getCommonHeaderData = async () => {
//     const API_URL = process.env.NEXT_PUBLIC_APP_URL; // Use NEXT_PUBLIC_ prefix
//     console.log("API URL:", API_URL); // Debugging

//     try {
//         const response = await fetch(`${API_URL}/storefront-social-media-link`);
//         console.log("✅ Response received:", response);

//         if (!response.ok) {
//             console.error("❌ API Error:", response.status, response.statusText);
//             return null;
//         }

//         const result = await response.json();
//         console.log("📦 JSON result:", result);
//         return result.data;
//     } catch (error) {
//         console.error("🚨 Fetch error:", error);
//         return null;
//     }
// }