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

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setStatus("Sending...");
    //     const res = await fetch("/api/contact", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(formData),
    //     });

    //     const result = await res.json();
    //     if (res.ok) {
    //         setStatus("Message sent successfully!");
    //         setFormData({ name: "", email: "", message: "" });
    //     } else {
    //         setStatus(
    //             result.error || "Failed to send message. Please try again."
    //         );
    //     }
    // };

    return (
        <form
            action="https://formsubmit.co/khangbeo2012@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="form rounded-lg text-xl p-4 flex flex-col md:w-6/12 mx-auto mt-10"
        >
            {status && (
                <p
                    className={`mb-4 p-3 text-center font-semibold rounded-lg ${
                        status.includes("❌")
                            ? "bg-red-500 text-white"
                            : status.includes("⏳")
                            ? "bg-yellow-500 text-gray-900"
                            : "bg-green-500 text-white"
                    }`}
                >
                    {status}
                </p>
            )}

            <div className="relative mx-4 my-2">
                <label htmlFor="name" className="text-white font-light">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`placeholder-shown:text-white placeholder-shown:italic font-light text-white bg-gray-500 dark:bg-gray-800 rounded-md focus:outline-none mt-2 py-2 px-5 w-full focus:ring-2 ring-blue-500 ${
                        errors.name ? "border-red-500 border-2" : ""
                    }`}
                />
                {errors.name && (
                    <span className="absolute right-3 top-3 text-red-400 text-sm">
                        {errors.name}
                    </span>
                )}
            </div>

            <div className="relative mx-4 my-2">
                <label htmlFor="email" className="text-white font-light">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`placeholder-shown:text-white placeholder-shown:italic font-light text-white bg-gray-500 dark:bg-gray-800 rounded-md focus:outline-none mt-2 py-2 px-5 w-full focus:ring-2 ring-blue-500 ${
                        errors.email ? "border-red-500 border-2" : ""
                    }`}
                />
                {errors.email && (
                    <span className="absolute right-3 top-3 text-red-400 text-sm">
                        {errors.email}
                    </span>
                )}
            </div>

            <div className="relative mx-4 my-2">
                <label htmlFor="message" className="text-white font-light3">
                    Message
                </label>
                <textarea
                    rows="4"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`placeholder-shown:text-white placeholder-shown:italic font-light text-white bg-gray-500 dark:bg-gray-800 rounded-md focus:outline-none mt-2 py-2 px-5 w-full focus:ring-2 ring-blue-500 ${
                        errors.message ? "border-red-500 border-2" : ""
                    }`}
                ></textarea>
                {errors.message && (
                    <span className="absolute right-3 top-3 text-red-400 text-sm">
                        {errors.message}
                    </span>
                )}
            </div>

            <button
                type="submit"
                className="bg-gray-900 dark:bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-500 rounded-md md:w-1/2 mx-4 mt-8 py-2 text-gray-50 font-bold"
            >
                Send Message
            </button>
        </form>
    );
}
