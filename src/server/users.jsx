"use server";

export const get = async () => {
    // const data = await fetch(`${process.env.APP_URL}/users`);
    // const result = await data.json();
    // console.log(result);

    const API_URL = process.env.NEXT_PUBLIC_APP_URL; // Use NEXT_PUBLIC_ prefix
    console.log("API URL:", API_URL); // Debugging

    try {
        const response = await fetch(`${API_URL}/users`);
        console.log("✅ Response received:", response);

        if (!response.ok) {
            console.error("❌ API Error:", response.status, response.statusText);
            return null;
        }

        const result = await response.json();
        console.log("📦 JSON result:", result);
        return result.data;
    } catch (error) {
        console.error("🚨 Fetch error:", error);
        return null;
    }

}