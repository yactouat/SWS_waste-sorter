import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";

export const Navbar = () => {

    const { t, i18n } = useTranslation();

    const changeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.currentTarget.value);
        localStorage.setItem('language', e.currentTarget.value);
    }

    // Shows correct language in the select component. If users change the language, the next time they go on the website
    // they will still have the correct language and the select will display the correct value
    useEffect(() => {
        const languageValue: string | null = localStorage.getItem("language") || "en";
        (document.querySelector("select[name='select-language']") as HTMLSelectElement).value = languageValue;
    })

    return (
        // Stciky Navbar
        <nav className='sticky top-0 z-30 w-full'>
            <div className="bg-green-700">
                <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                                {t("navbar.title")}
                            </span>
                        </a>
                        <select onChange={(e) => changeLang(e)} name="select-language">
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                    </select>
                    </div>
                </div>
            </div>
        </nav>

    )
}

