"use client";
import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date);
        }, 1000);

        return () => clearInterval(interval);
    })
    
    return (
        <div> 
            <h2> Current Date: {new Date().toLocaleDateString()} </h2>
            <h2> Current Time: {new Date().toLocaleTimeString()} </h2>
        </div>
    );
}
