"use client";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./ContactMe.module.css";
import { link } from "fs";

export default function ContactMe() {
    const [show, setShow] = useState(false);

    const links = [
        {
            href: "https://github.com/CooperW824",
            label: "GitHub",
        },
        {
            href: "https://www.linkedin.com/in/cooperwerner/",
            label: "LinkedIn",
        },
        {
            href: "mailto:cooperwerner824@gmail.com",
            label: "Email",
        },
    ];

    let LinkList = links.map((link) => {
        return (
            <a className={styles.link} href= "link.href" key={link.label}>
                {link.label}
            </a>
        );
    });
    return (
        <div>
            <button onClick={() => setShow(true)}>ContactMe</button>
            <Modal visable={show} onExit={() => setShow(false)}>
                <h1>ContactMe</h1>
                <div className={styles["link-list"]}>{LinkList}</div>
            </Modal>
        </div>
    )
}
