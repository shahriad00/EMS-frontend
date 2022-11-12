import React, { useState } from "react";
import AppLayout from "./Layout/Layout";

const App = () => {
    const [token, setToken] = useState(false);
    return (
        <>
            <AppLayout />
        </>
    );
};
export default App;
