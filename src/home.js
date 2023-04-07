import Form from "./form";
import "./scss/home.scss";

const Home = () => {
    return (
        <div className="home-layout">
            <header>
                <h1>
                    Custom AJV resolver with react-hook-form
                </h1>
                <div>
                    AJV can be used to quickly and efficiently validate your data.
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