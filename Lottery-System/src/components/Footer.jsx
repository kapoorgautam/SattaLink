import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray text-white footer ">
            <div className="container flex flex-col items-center">
                <div className="text-center mb-0">
                    <h1 className="text-2xl font-bold">Satta Link</h1>
                    <p className="">© {new Date().getFullYear()} sattalink. All rights reserved.</p>
                </div>
               
            </div>
        </footer>
    );
};

export default Footer;
