import "./App.css";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "./Game/Build/test1.loader.js",
        dataUrl: "./Game/Build/test1.data.unityweb",
        frameworkUrl: "./Game/Build/test1.framework.js.unityweb",
        codeUrl: "./Game/Build/test1.wasm.unityweb",
    });

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>Sky Eye</h1>
                </header>
            </div>
            <Unity unityProvider={unityProvider} />
        </>
    );
}

export default App;
