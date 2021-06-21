import React from "react";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.scss";
import { Accordion, AccordionItem } from "carbon-components-react";
import Image from "next/dist/client/image";
import hazardous from "../public/hazardous.png"
export default function BiomedicalWaste() {
  return (
    <Layout>
      <div className={styles.container1}>
        <Image height='400px' width='1000px' alt='food-waste' src={hazardous} />
      </div>
      <div className={`${styles.container} ${styles.pages}`}>
        {/*<br />*/}
        {/*<h1>Hazardous Waste</h1>*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*<p>*/}
        {/*    /!*Any waste which is generated during the diagnosis, treatment or*!/*/}
        {/*    /!*immunization of human beings or animals or in research activities*!/*/}
        {/*    /!*pertaining there to or in the production or testing of biological.*!/*/}
        {/*</p>*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*<h3>Disposal</h3>*/}
        {/*<br />*/}
        {/*<p>*/}
        {/*    <b>*/}
        {/*        Step1:*/}
        {/*    </b>*/}
        {/*    You must detail the content of any waste your business produces before you send it for recycling and disposal. The description must include*/}
        {/*    <br/>*/}
        {/*    <ul>*/}
        {/*        <li>The waste classification code </li><br/>*/}
        {/*        <li>Whether it's hazardous</li><br/>*/}
        {/*        <li>The type of premises or business where the waste was produced</li><br/>*/}
        {/*        <li>The name of the substance or substances</li><br/>*/}
        {/*        <li>The process that produced the waste</li><br/>*/}
        {/*        <li>A chemical and physical analysis</li><br/>*/}
        {/*        <li>Any special problems, requirements or knowledge related to the waste</li><br/>*/}
        {/*    </ul>*/}
        {/*</p>*/}
        {/*<br />*/}
        {/*<p>*/}
        {/*    <b>*/}
        {/*        Step2:*/}
        {/*    </b>*/}
        {/*    You must store waste safely and securely as follows*/}
        {/*    <br/>*/}
        {/*    <ul>*/}
        {/*        <li>Store waste in a secure place</li><br/>*/}
        {/*        <li>Use suitable containers that will stop waste escaping</li><br/>*/}
        {/*        <li>Label containers clearly with the type of waste they contain</li><br/>*/}
        {/*        <li>Use covers to stop waste blowing away</li><br/>*/}
        {/*        <li>Use waterproof covers if rain could cause contaminated run-off or prevent the waste from being reused</li><br/>*/}
        {/*    </ul>*/}
        {/*    <br/>*/}
        {/*    <b>*/}
        {/*        Remember - It’s illegal to mix hazardous waste with either non-hazardous or another hazardous waste*/}
        {/*    </b>*/}
        {/*</p>*/}
        {/*<br />*/}
        {/*<p>*/}
        {/*    <b>*/}
        {/*    Step 3: Use an authorised waste carrier to collect, recycle or dispose of your hazardous waste*/}
        {/*    </b><br/>*/}
        {/*    Ensure that your selected waste carrier is registered and their waste sites have environmental permits. Your business is still responsible for the disposal of waste even after it has left the premises.*/}
        {/*</p>*/}
        {/*<br />*/}
        {/*<p>*/}
        {/*    <b>*/}
        {/*        Step 4: Fill in the parts of the consignment note that apply to you*/}
        {/*    </b><br/>*/}
        {/*    You must use consignment notes to move hazardous waste and it must stay with hazardous waste until it reaches its final destination. For more information on filling out consignment notes visit gov.uk*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*    <b>*/}
        {/*        Step 4: Fill in the parts of the consignment note that apply to you*/}
        {/*    </b><br/>*/}
        {/*    You must use consignment notes to move hazardous waste and it must stay with hazardous waste until it reaches its final destination. For more information on filling out consignment notes visit gov.uk*/}
        {/*</p>*/}
        {/*<br />*/}
        {/*<table>*/}
        {/*    <thead>*/}
        {/*    <tr>*/}
        {/*        <th>Zone</th>*/}
        {/*        <th>Vendor</th>*/}
        {/*        <th>Contact</th>*/}
        {/*    </tr>*/}
        {/*    </thead>*/}
        {/*    <tbody>*/}
        {/*    <tr>*/}
        {/*        <td>Mahadevapura and East</td>*/}
        {/*        <td>Anu Autoclave</td>*/}
        {/*        <td>9008684839</td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td>South and Bomanahalli</td>*/}
        {/*        <td>Maridi Eco Industries</td>*/}
        {/*        <td>9845162041</td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td>West and RR Nagar</td>*/}
        {/*        <td>Medicare/Sembramky</td>*/}
        {/*        <td>7760978790</td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td>Dasarahalli and Yelahanka</td>*/}
        {/*        <td>Prajwal Management Systems</td>*/}
        {/*        <td>9901773131</td>*/}
        {/*    </tr>*/}
        {/*    </tbody>*/}
        {/*</table>*/}
        <br />
        <br />
        <br />
        <br />
        <Accordion>
          <AccordionItem title="What is Hazardous waste">
            <p>
              Hazardous waste is waste with properties that make it dangerous or capable of having a harmful effect on human health or the environment.
            </p>
          </AccordionItem>
          <AccordionItem title="How to dispose">
            <p>
              Hazardous waste can be treated by chemical, thermal, biological, and physical methods. Chemical methods include ion exchange, precipitation, oxidation and reduction, and neutralization. Among thermal methods is high-temperature incineration, which not only can detoxify certain organic wastes but also can destroy them.
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
    </Layout>
  );
}
