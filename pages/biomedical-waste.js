import React from "react";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.scss"

export default function BiomedicalWaste() {
    return (
        <Layout>
            <div className={`${styles.container} ${styles.pages}`}>
                <br/>
                <h1>
                    Biomedical Waste
                </h1>
                <p>
                    Content
                </p>
            </div>
        </Layout>
    )
}