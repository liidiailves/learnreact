// import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
    const [text, setText] = useState("");

    // happens when component is mounted only once
    // useEffect(() => {
    //     console.log("Component mounted");
    // }, []);

    // happens when component is mounted and updating
    useEffect(() => {
        console.log("Component mounted");
    }, [text]);

    useEffect(() => {
        // you can put logic for http request here
        console.log("Component mounted");

        // happens when component is unmounted
        return () => {
            // you can put logic for http request here
            console.log("Component unmounted");
        }
    }, []);

    return (
        <div>
            <input onChange={(event) => {
                setText(event.target.value);
            }} />
            <h1>{text}</h1>
        </div>
    );
};