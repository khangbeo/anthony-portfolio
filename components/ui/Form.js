import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("");

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "⚠️ Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "⚠️ Email is required.";
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            newErrors.email = "⚠️ Invalid email format.";
        }
        if (!formData.message.trim())
            newErrors.message = "⚠️ Message is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        if (!validateForm()) {
            e.preventDefault();
            setStatus("❌ Please fix the errors before submitting.");
        } else {
            setStatus("⏳ Sending...");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto mt-12 space-y-8"
        >
            <div className="space-y-2">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 outline-none"
                    placeholder="John Doe"
                />
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 outline-none"
                    placeholder="john@example.com"
                />
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 outline-none resize-none"
                    placeholder="Your message here..."
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
                Send Message
            </button>

            {/* Success message */}
            {status === "⏳" && (
                <p className="text-yellow-600 dark:text-yellow-400 text-center mt-4">
                    {status}
                </p>
            )}

            {/* Error message */}
            {status === "❌" && (
                <p className="text-red-600 dark:text-red-400 text-center mt-4">
                    {status}
                </p>
            )}
        </form>
    );
}
