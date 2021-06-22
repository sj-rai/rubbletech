import React from "react";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.scss";
import { Accordion, AccordionItem } from "carbon-components-react";
import Image from "next/image"
import ewaste from "../public/e-waste.jpg"

export default function BiomedicalWaste() {
  return (
    <Layout>
      <div className={styles.container1}>
        <Image height='400px' width='1000px' alt='food-waste' src={ewaste} />
      </div>
      <div className={`${styles.container} ${styles.pages}`}>
        <br />
        <br />
        <br />
        <br />
        <Accordion>
          <AccordionItem title="What is E-waste">
            <p>
              Used electronics which are destined for refurbishment, reuse, resale, salvage recycling through material recovery, or disposal are also considered e-waste.
            </p>
          </AccordionItem>
          <AccordionItem title="How to dispose">
            <p>
              <ol>
                <li>
                  <b className="term">Donate to NGOs</b>: A number of NGOs in the education space have a need for electronics. NGOs often teach basic computer skills to young children and women from underprivileged backgrounds. To impart computer skills, such NGOs do not need the newest machines; even decades old computers that use GUI are useful to them. When a computer is donated to an NGO, not only does it not turn into hazardous e-waste, but it is used to teach and open vistas of new opportunities to many.
                </li>
                <br />
                <li>
                  <b className="term">Give Electronics to Certified E-Waste Recycler</b>:
                  The hazards posed by e-waste are real and the unorganised sector which often strips e-waste of its most useful parts compounds the problems posed by it. Workers in the informal sector who remove precious base metals from e-waste work in hazardous conditions. While working they are surrounded by toxic fumes against which they have not been provided adequate protection.
                </li>
                <br />
                <li>
                  <b className="term">Sell Your Electronics</b>: While in the west households regularly dispose of electronic items because they are obsolete to most living in such countries, in India due to relatively low levels of income, many old electronics can be precious to millions. Even though India is the fifth largest producer of e-waste, including computers, millions in India to whom a computer can be of great value have never owned or used one.
                </li>
                <br />
              </ol>
            </p>
          </AccordionItem>
          <AccordionItem title="Contacts">
            <p>
              <p>
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
                      <td>E-NGO</td>
                      <td>9008684839</td>
                    </tr>
                    <tr>
                      <td>South and Bomanahalli</td>
                      <td>Maruti Refurbishers</td>
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
              </p>
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout >
  );
}
