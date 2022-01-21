import React from "react";
import userData from "@constants/data";

function Form() {
  return (
    <form
      name="contact-form"
      method="POST"
      action="contact/?success=true"
      data-netlify="true"
      className="form rounded-lg text-xl p-4 flex flex-col md:w-6/12 mx-auto">
      <input
        type='hidden'
        name='form-name'
        value='contact-form'
      />
      <label
        htmlFor="name"
        className="mx-4"
      >
        {" "}
        Name *
      </label>
      <input
        type="text"
        className="font-light text-white bg-gray-500 dark:bg-gray-800 rounded-md focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
        name="name"
        required
      />
      <label
        htmlFor="email"
        className="mx-4 mt-4"
      >
        Email *
      </label>
      <input
        type="text"
        className="font-light text-white bg-gray-500 dark:bg-gray-800 rounded-md focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
        name="email"
        required
      />
      <label
        htmlFor="message"
        className="mx-4 mt-4"
      >
        Message *
      </label>
      <textarea
        rows="4"
        type="text"
        className="font-light text-white bg-gray-500 dark:bg-gray-800 rounded-md focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
        name="message"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-gray-900 hover:bg-gray-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 font-bold"
      >
        Send Message
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-20 ">
        <h1 className="font-title text-5xl md:text-7xl font-bold py-8 text-center">
          Contact
        </h1>

      </div><hr />
      <div className="relative z-10 p-8 lg:p-8 max-w-6xl mx-auto">
        <header className="text-center">
          <h1 className="font-semibold text-2xl">
            Let's chat.
          </h1>
          <p className="font-light text-base mt-2">
            Shoot me a message and I'll get back to you as soon as I can.
          </p>
        </header>
        <Form />
      </div>
    </section>
  );
}
