import {Buffer} from "buffer";
import {UpBar} from "./Components/UpBar";
import {PageCenter} from "./Components/PageCenter";
import {DownThings} from "./Components/DownThings";
import {isMobile, BrowserView, MobileView} from "react-device-detect";

if (!window.Buffer) window.Buffer = Buffer;

export const App = () => {
    let classeReact = isMobile ? "Mobile" : "Browser";
    return (
        <div className={classeReact}>
            <UpBar/>
            <PageCenter portable={isMobile}/>
            <DownThings/>
        </div>
    );
};
