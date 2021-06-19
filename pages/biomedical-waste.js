import React from "react";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.scss";

export default function BiomedicalWaste() {
  return (
    <Layout>
      <div className={`${styles.container} ${styles.pages}`}>
        <br />
        <h1>Biomedical Waste</h1>
        <br />
        <br />
        <p>
          Any waste which is generated during the diagnosis, treatment or
          immunization of human beings or animals or in research activities
          pertaining there to or in the production or testing of biological.
        </p>
        <br />
        <br />
        <h3>Disposal</h3>
        <br />
        <p>
          If you are in home isolation, club the dry waste and sanitary waste
          together and keep them in yellow (non-chlorinated) bags. These bags
          would be collected by regular waste collectors/pourakarmikas, who
          would then hand it over to an authorised vendor who runs a CBWTF
          (Common Bio-medical Waste Treatment and Disposal Facility).
        </p>
        <br />
        <p>
          Wet waste should be stored separately and handed over to waste
          collectors/ pourakarmikas as usual. Alternately, you can compost the
          wet waste at home itself.
        </p>
        <br />
        <p>
          The yellow non-chlorinated bags for storing dry and sanitary waste are
          to be provided by the BBMP. In 2018, the Biomedical Waste Management
          Rules 2016 were amended to phase out the use of chlorinated bags in
          medical establishments, since these bags can release carcinogenic
          dioxins when incinerated. Non-chlorinated bags are available for
          purchase online.
        </p>
        <br />
        <p>
          BBMP has currently authorised at least four vendors for biomedical
          waste processing.
        </p>
        <br />
        <table>
          <thead>
            <tr>
              <th>Zone</th>
              <th>Vendor</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mahadevapura and East</td>
              <td>Anu Autoclave</td>
              <td>9008684839</td>
            </tr>
            <tr>
              <td>South and Bomanahalli</td>
              <td>Maridi Eco Industries</td>
              <td>9845162041</td>
            </tr>
            <tr>
              <td>West and RR Nagar</td>
              <td>Medicare/Sembramky</td>
              <td>7760978790</td>
            </tr>
            <tr>
              <td>Dasarahalli and Yelahanka</td>
              <td>Prajwal Management Systems</td>
              <td>9901773131</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
