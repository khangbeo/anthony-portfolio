export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        console.log("Form Submitted:", { name, email, message });

        return res
            .status(200)
            .json({ success: true, message: "Message received!" });
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong!" });
    }
}
