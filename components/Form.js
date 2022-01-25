export default function Form() {
    return (
        <form
            name="contact-form"
            method="POST"
            action="contact/?success=true"
            data-netlify="true"
            className="form rounded-lg text-xl p-4 flex flex-col md:w-6/12 mx-auto mt-10">
            <input
                type='hidden'
                name='form-name'
                value='contact-form'
            />
            <input
                type="text"
                className="placeholder-shown:text-white placeholder-shown:italic font-light text-white bg-gray-500 dark:bg-gray-800 rounded-md focus:outline-none py-2 mt-2 px-5 mx-4 my-2 focus:ring-2 focus:border-none ring-blue-500"
                name="name"
                placeholder="Your name"
                required
            />
            <input
                type="text"
                className="placeholder-shown:text-white placeholder-shown:italic font-light text-white bg-gray-500 dark:bg-gray-800 rounded-md focus:outline-none py-2 mt-2 px-5 mx-4 my-2 focus:ring-2 focus:border-none ring-blue-500"
                name="email"
                placeholder="Email"
                required
            />
            <textarea
                rows="4"
                type="text"
                className="placeholder-shown:text-white placeholder-shown:italic font-light text-white bg-gray-500 dark:bg-gray-800 rounded-md focus:outline-none py-2 mt-2 px-5 mx-4 my-2 focus:ring-2 focus:border-none ring-blue-500"
                name="message"
                placeholder="Your message"
                required
            ></textarea>
            <button
                type="submit"
                className="bg-gray-900 dark:bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-500 rounded-md md:w-1/2 mx-4 mt-8 py-2 text-gray-50 font-bold"
            >
                Send Message
            </button>
        </form>
    )
}