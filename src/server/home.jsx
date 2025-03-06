"use server";

export const getHomeData = async () => {
    const API_URL = process.env.NEXT_PUBLIC_APP_URL; // Use NEXT_PUBLIC_ prefix

    try {
        const response = await fetch(`${API_URL}/home`);

        if (!response.ok) {
            return null;
        }
        const result = await response.json();
        console.log("📦 JSON Home result:", result.data);

        return result.data;
    } catch (error) {
        return null;
    }
}