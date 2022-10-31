import {Buffer} from "buffer";
import {Header} from "./Components/Header";
import {Page} from "./Components/Page";
import {Footer} from "./Components/Footer";

if (!window.Buffer) window.Buffer = Buffer;

export const App = () => {
    return (
        <section className="bg-black/20 flex flex-col justify-start items-center h-[100vh] overflow-y-scroll">
            <Header/>
            <Page />
            <div className="flex-grow"></div>
            <Footer/>
        </section>
    );
};
