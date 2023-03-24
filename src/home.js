import React from "react";
import Form from "./form";
import "./scss/home.scss";

const Home = () => {
    return (
        <div>
            <div>
                <h1>
                    Using AJV with react-hook-form
                </h1>
                <div>
                    Using a simple custom adapter and pre-loading
                    schemas when a React app starts, AJV can be
                    used to quickly and efficiently validate any
                    type of data.
                </div>
            </div>
            <div>
                <Form />
            </div>
            <div>
                <a href="https://vincentjenks.com">
                    2023 Vincent Jenks
                </a>
            </div>
        </div>
    );
};

export default Home;