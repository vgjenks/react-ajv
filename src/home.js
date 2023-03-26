import React, { useEffect, useState } from "react";
import Form from "./form";
import { initValidationCache } from "./lib/validator";
import "./scss/home.scss";

const Home = () => {
    const [isPreloaded, setIsPreloaded] = useState(false);

    useEffect(() => {
        initValidationCache().then(() => {
            setIsPreloaded(true);
        }).catch(e => {
            console.log(`AJV preload failed! ${e.message}`);
        });
    }, []);

    return isPreloaded && (
        <div className="home-layout">
            <header>
                <h1>
                    Using AJV with react-hook-form
                </h1>
                <div>
                    Using a simple custom adapter and pre-loading
                    schemas when a React app starts, AJV can be
                    used to quickly and efficiently validate any
                    type of data.
                </div>
            </header>
            <main>
                <Form />
            </main>
            <footer>
                <a href="https://vincentjenks.com" target="_blank" rel="noreferrer">
                    2023 Vincent Jenks
                </a>
            </footer>
        </div>
    );
};

export default Home;