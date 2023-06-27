import React, { useState } from "react";
import ReadmeComponent from './Contribut';

export const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

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
                <div className="text-white"> Wanna contribute?</div>
            </svg>

            {/* Hidden Text */}
            <div className="text-green-700">Hidden</div>

            {/* Footer Text */}
            <div className="text-white text-center text-xl font-bold">Wanna Contribute? Check out <a
                href="https://github.com/yactouat/waste_sorter_demo/issues"
                className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                target="_blank"
            >
                <span className="text-blue-900 underline underline-offset-2">the Repo Issues</span>
            </a>
            </div >
            <br/>
            <div className="text-blue-900 text-center  text-xl font-bold">
                
            <button onClick={toggleVisibility}>Our Contributers</button>
            <br/>
      {isVisible &&  <ReadmeComponent className="text-black text-center  text-xl font-bold"/>}
           
            </div>

            <div className="text-white text-center text-xl font-bold p-4"><a
                href="https://github.com/yactouat/learning_AI/blob/master/notebooks/waste-sorter/waste-sorter.ipynb"
                className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                target="_blank"
            >
                <span className="text-blue-900 underline underline-offset-2">link to the notebook</span>
            </a> from which the model is exported</div>
        </div>

    );
};