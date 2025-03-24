import Form from "../ui/Form";

export default function Contact() {
    return (
        <section>
            <div className="max-w-6xl mx-auto h-20">
                <h1 className="font-title text-4xl font-bold text-center">
                    Let's chat
                </h1>
            </div>
            <div className="relative z-10 p-2 md:p-8 max-w-6xl mx-auto">
                <hr />
                <p className="font-light text-center text-xl">
                    Message me and I'll get back to you as soon as I can.
                </p>
                <Form />
            </div>
        </section>
    );
}
