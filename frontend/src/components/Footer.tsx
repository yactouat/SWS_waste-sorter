import React, { useState } from "react";
import Contributors from "./Contributors";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        // Footer Design
        <div className="relative mt-16 bg-green-700">
            <svg
                className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-green-700"
                preserveAspectRatio="none"
                viewBox="0 0 1440 54"
            >
                <path
                    fill="currentColor"
                    d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                />
                <div className="text-white">{t("footer.contribute")}</div>
            </svg>

            {/* Hidden Text */}
            <div className="text-green-700">Hidden</div>

            {/* Footer Text */}
            <div className="text-white text-center text-xl font-bold">{t("footer.contribute-text")} <a
                href="https://github.com/yactouat/SWS_waste-sorter/issues"
                className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                target="_blank"
            >
                <span className="text-blue-900 underline underline-offset-2">{t("footer.repo-issues")}</span>
            </a>
            </div >
            <br />
            <div className="text-white text-center text-xl font-bold p-4"><a
                href="https://github.com/yactouat/SWS_waste-sorter/blob/master/ai/waste-sorter.ipynb"
                className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                target="_blank"
            >
                <span className="text-blue-900 underline underline-offset-2">{t("footer.notebook")}</span>
            </a> {t("footer.model")}</div>
            <div className="text-blue-900 text-center text-xl font-bold py-4">
                <button onClick={toggleVisibility} className="underline underline-offset-2">{t("footer.contributors")}</button>
                <br />
                {isVisible && <Contributors />}
            </div>
        </div>

    );
};