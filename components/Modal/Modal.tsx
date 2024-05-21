"use client";
import React, {useEffect } from "react";
import styles from "./modal.module.css";

export default function Modal({
    visable, // should the box be visible or not?
    onExit, // a function that tells the parent component to update the state if the user closes the box
    children, // what the box should display
}: {
    visable: boolean;
    onExit: () => void; // this is the type definition for a function with no parameters that returns void
    children: React.ReactNode;
}) {
    if (!visable) return null; // Another form of conditional rendering, having a component return null
    // if a certain parameter or value is false.
    
    useEffect(() => {
        const keyListener = (e: KeyboardEvent) => { // event listener checks if user has pushed escape key
            if (e.key === "Escape") onExit();
        }

        window.addEventListener("keydown", keyListener);
        return () => window.removeEventListener("keydown", keyListener);
    }, [onExit]);

    return (
        <div className={styles["modal-background"]} onClick={onExit}>
            <div className={styles["modal-content"]}>
                <div className={styles["modal-header"]}>
                    <button onClick={onExit}>Close</button> {/* calling the on exit function will update the state to close the modal*/}
                </div>
                {children} {/*render the passed in components*/}
            </div>
        </div>
    )
}
