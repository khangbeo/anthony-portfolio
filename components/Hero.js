import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import Link from "next/dist/client/link";

export default function Hero() {
    const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6", "#bfa16d"];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Hi, I'm <span className="text-[#bfa16d]">Anthony</span>
                    </h1>

                    <div className="mb-8">
                        <RoughNotationGroup show={true}>
                            <RainbowHighlight color={colors[4]}>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 py-3">
                                    Support Engineer
                                </h2>
                            </RainbowHighlight>
                        </RoughNotationGroup>
                    </div>

                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                        I help businesses thrive by providing exceptional
                        technical support and solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/projects"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#bfa16d] hover:bg-[#a88b5c] transition-colors duration-200"
                        >
                            View My Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 border-2 border-[#bfa16d] text-base font-medium rounded-md text-[#bfa16d] hover:bg-[#bfa16d] hover:text-white transition-colors duration-200"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
