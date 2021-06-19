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
                <br/><br/>
                <p>
                    Any waste which is generated during the diagnosis, treatment or immunization of human beings or animals or in research activities pertaining there to or in the production or testing of biological.
                </p>
                <br /><br />
                <h3>
                    Disposal
                </h3>
                <br />
                <p>
                    If you are in home isolation, club the dry waste and sanitary waste together and keep them in yellow (non-chlorinated) bags. These bags would be collected by regular waste collectors/pourakarmikas, who would then hand it over to an authorised vendor who runs a CBWTF (Common Bio-medical Waste Treatment and Disposal Facility).
                </p>
            </div>
        </Layout>
    )
}