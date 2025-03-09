import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await res.json();
        if (res.ok) {
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setStatus(
                result.error || "Failed to send message. Please try again."
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="form rounded-lg text-xl p-4 flex flex-col md:w-6/12 mx-auto mt-10"
        >
            <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleChange}
                className="placeholder-shown:text-white placeholder-shown:italic font-light text-white bg-gray-500 dark:bg-gray-800 rounded-md focus:outline-none py-2 mt-2 px-5 mx-4 my-2 focus:ring-2 focus:border-none ring-blue-500"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="placeholder-shown:text-white placeholder-shown:italic font-light text-white bg-gray-500 dark:bg-gray-800 rounded-md focus:outline-none py-2 mt-2 px-5 mx-4 my-2 focus:ring-2 focus:border-none ring-blue-500"
            />
            <textarea
                rows="4"
                name="message"
                placeholder="Your message"
                required
                value={formData.message}
                onChange={handleChange}
                className="placeholder-shown:text-white placeholder-shown:italic font-light text-white bg-gray-500 dark:bg-gray-800 rounded-md focus:outline-none py-2 mt-2 px-5 mx-4 my-2 focus:ring-2 focus:border-none ring-blue-500"
            ></textarea>
            <button
                type="submit"
                className="bg-gray-900 dark:bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-500 rounded-md md:w-1/2 mx-4 mt-8 py-2 text-gray-50 font-bold"
            >
                Send Message
            </button>
            {status && <p className="text-white text-center mt-4">{status}</p>}
        </form>
    );
}
