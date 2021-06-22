import React, { useState } from "react";
import {
    Button
} from "carbon-components-react";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout/Layout";


export default function Subscribe() {
    let [subscribed, setSubscribed] = useState(false)

    return (
        <Layout>
            <div className={`${styles.container} ${styles.pages}`}>
                <div className={styles.container1} >
                    <br />
                    <br />
                    <br />
                    Subscribe to recieve latest updates about donation drives     </div>
                <div>
                    <br />
                    <br />
                    <br />
                    { console.log("[subscribed]", subscribed)}
                    { subscribed === false &&
                        <Button
                            kind="primary"
                            tabIndex={0}
                            onClick={() => {isUserSubscribed(subscribed, setSubscribed)}}
                        >
                            Subscribe
                        </Button>
                    }
                    { subscribed === true &&
                        <div className={styles.container1} >
                            Welcome to the RubbleTech Family! You are now subscribed!
                        </div>
                    }
                </div>
            </div>
        </Layout>
    );
}


function isUserSubscribed(subscribed, setSubscribed) {
    setSubscribed(true)
}
