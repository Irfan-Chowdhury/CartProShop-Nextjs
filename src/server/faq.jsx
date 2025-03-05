"use server";

export const getFaqData = async () => {
    const API_URL = process.env.NEXT_PUBLIC_APP_URL; // Use NEXT_PUBLIC_ prefix

    try {
        const response = await fetch(`${API_URL}/faq`);

        if (!response.ok) {
            return null;
        }
        const result = await response.json();
        console.log("📦 JSON Footer result:", result.data);

        return result.data;
    } catch (error) {
        return null;
    }
}