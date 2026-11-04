import Form from "../ui/Form";

export default function Contact() {
    return (
        <section>
            <div className="mx-auto max-w-4xl px-4">
                <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Let's chat
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                    Message me and I'll get back to you as soon as I can.
                </p>
                <Form />
            </div>
        </section>
    );
}
