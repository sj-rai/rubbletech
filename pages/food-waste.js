import React from "react";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.scss";
import { Accordion, AccordionItem } from "carbon-components-react";
import Image from "next/image"
import foodWaste from "../public/food-waste.jpeg"

export default function BiomedicalWaste() {
  return (
    <Layout>
      <div className={styles.container1}>
        <Image height='400px' width='1000px' alt='food-waste' src={foodWaste} />
      </div>
      <div className={`${styles.container} ${styles.pages}`}>
        <br />
        <br />
        <br />
        <br />
        <Accordion>
          <AccordionItem title="What is Food waste">
            <p>
              Food loss and waste is food that is not eaten. The causes of food waste or loss are numerous and occur throughout the food system, during production, processing, distribution, retail and consumption.
            </p>
          </AccordionItem>
          <AccordionItem title="How to dispose">
            <p>
              <ol>
                <li>
                  <b className="term">Recycle by Composting</b>: Food producers can
                  solve 100% of their food waste problems by simply organizing an
                  effective composting strategy. And doing so not only eliminates
                  waste, it also saves you money because you don’t need to “outsource”
                  your compost production
                </li>
                <br />
                <li>
                  <b className="term">Turn Wasted Food into Animal Feed</b>:
                  Cultivating compost is one way to recycle food, but it can also be
                  done in the bellies of cattle, sheep, pigs, and other livestock
                  (themselves destined to become food).
                </li>
                <br />
                <li>
                  <b className="term">Use Waste Food to Produce Products</b>: From
                  bio-fuels to liquid fertilizer, there are many useful products that
                  can be manufactured from certain kinds of waste foods. And often
                  “left overs” of one company could be useful in another industry for
                  the food scrap
                </li>
                <br />
                <li>
                  <b className="term">Source Reduction</b>:The simplest way to curtail
                  food waste is to simply produce less whenever overproduction is
                  clearly leading to waste.
                </li>
                <br />
                <li>
                  <b className="term">Food Donation</b>: When excess foodstuffs are
                  still safe to eat, they can be given to the hungry and the poor who
                  find it difficult to afford sufficient food in today’s high-priced
                  economy
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
              </p>
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout >
  );
}
