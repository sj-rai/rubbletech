import React from "react";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.scss";
import {Accordion, AccordionItem} from "carbon-components-react";

export default function BiomedicalWaste() {
  return (
    <Layout>
      <div className={`${styles.container} ${styles.pages}`}>
        <br />
        <br />
        <br />
        <br />
        {/*<h1>Food Waste</h1>*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*<p>*/}
        {/*  /!*Any waste which is generated during the diagnosis, treatment or*!/*/}
        {/*  /!*immunization of human beings or animals or in research activities*!/*/}
        {/*  /!*pertaining there to or in the production or testing of biological.*!/*/}
        {/*</p>*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*<h3>*/}
        {/*  Effective ways to reduce or manage food waste levels in your business*/}
        {/*</h3>*/}
        {/*<br />*/}
        {/*<ol>*/}
        {/*  <li>*/}
        {/*    <b className="term">Recycle by Composting</b>: Food producers can*/}
        {/*    solve 100% of their food waste problems by simply organizing an*/}
        {/*    effective composting strategy. And doing so not only eliminates*/}
        {/*    waste, it also saves you money because you don’t need to “outsource”*/}
        {/*    your compost production*/}
        {/*  </li>*/}
        {/*  <br />*/}
        {/*  <li>*/}
        {/*    <b className="term">Turn Wasted Food into Animal Feed</b>:*/}
        {/*    Cultivating compost is one way to recycle food, but it can also be*/}
        {/*    done in the bellies of cattle, sheep, pigs, and other livestock*/}
        {/*    (themselves destined to become food).*/}
        {/*  </li>*/}
        {/*  <br />*/}
        {/*  <li>*/}
        {/*    <b className="term">Use Waste Food to Produce Products</b>: From*/}
        {/*    bio-fuels to liquid fertilizer, there are many useful products that*/}
        {/*    can be manufactured from certain kinds of waste foods. And often*/}
        {/*    “left overs” of one company could be useful in another industry for*/}
        {/*    the food scrap*/}
        {/*  </li>*/}
        {/*  <br />*/}
        {/*  <li>*/}
        {/*    <b className="term">Source Reduction</b>:The simplest way to curtail*/}
        {/*    food waste is to simply produce less whenever overproduction is*/}
        {/*    clearly leading to waste.*/}
        {/*  </li>*/}
        {/*  <br />*/}
        {/*  <li>*/}
        {/*    <b className="term">Food Donation</b>: When excess foodstuffs are*/}
        {/*    still safe to eat, they can be given to the hungry and the poor who*/}
        {/*    find it difficult to afford sufficient food in today’s high-priced*/}
        {/*    economy*/}
        {/*  </li>*/}
        {/*  <br />*/}
        {/*</ol>*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*<br />*/}
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

            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  );
}
