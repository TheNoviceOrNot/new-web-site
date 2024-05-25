"use client";
import React, { useState } from "react";
import styles from "./contact-me.module.css"

export default function ContactMe() {
    return (
        <div className={styles["contact-me-container"]} id="#contact">
            <h1 className={styles["contact-me-title"]}>Contact Me</h1>
            <h2 className={styles["contact-me-text"]}>
                If you're interested in learinging about what I do, use the following links to check out my content
            </h2>
            <div className={styles["links-container"]}>
                <a className={styles["link"]} href="http://www.youtube.com/@TheGameNovice">
                    <img src="youtube.png" alt="Youtube" />
                </a>
                <a className={styles["link"]} href="https://www.reddit.com/user/TheGameNovice/">
                    <img src="reddit.png" alt="Reddit" />
                </a>
            </div>
        </div>
    )
}
