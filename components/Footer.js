import Socials from "./Socials";

export default function Footer() {
    return (
        <div
            className="
      mt-20 max-w-6xl mx-auto px-4 py-10 md:py-10 
      "
        >
            <div className="flex flex-col space-y-4 md:space-y-0 items-center mt-8">
                <Socials />
                <div className="m-8 text-center">
                    <p>
                        {new Date().getFullYear()} &copy; Anthony Duong. All
                        Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
