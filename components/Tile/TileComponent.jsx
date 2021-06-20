import React from "react";
import { ClickableTile, Tile } from "carbon-components-react";
import styles from "./tile.module.scss";
import Image from "next/image";
import { ReactComponent as BIOSVG } from "../../public/biohazard.svg";

export default function TileComponent(props) {
  return (
    <div className={styles.tiles}>
      <div className="bx--grid bx--grid--condensed">
        <div className="bx--row">
          <div className="bx--col">
            <ClickableTile href="#">
              {/*<BIOSVG width={50} height={100} fill='#fff'/>*/}
              <div className={styles.icons}>
                <Image src="/biohazard.svg" alt="E-Waste" layout={"fill"} />
              </div>
              <h1>
                <div className={styles.text}>HAZARDOUS WASTE</div>
              </h1>
              {/*Content about this here*/}
            </ClickableTile>
          </div>
          <div className="bx--col">
            <ClickableTile href="#">
              <h1>
                <div className={styles.text}>RECYCLABLE WASTE</div>
              </h1>
              {/*Content about this here*/}
            </ClickableTile>
          </div>
          <div className="bx--col">
            <ClickableTile href="#">
              <h1>
                <div className={styles.text}>
                  LIQUID OR SOLID HOUSEHOLD WASTE
                </div>
              </h1>
              {/*Content about this here*/}
            </ClickableTile>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col">
            <ClickableTile href="#">
              <h1>
                <div className={styles.text}>GREEN WASTE</div>
              </h1>
              {/*Content about this here*/}
            </ClickableTile>
          </div>
          <div className="bx--col">
            <ClickableTile href="/biomedical-waste">
              <h1>
                <div className={styles.text}>BIOMEDICAL WASTE</div>
              </h1>
              {/*Content about this here*/}
            </ClickableTile>
          </div>
          <div className="bx--col">
            <ClickableTile href="#">
              {/*<Image src="/ewaste.png" alt="E-Waste" width={"200px"} height={"200px"} />*/}
              <h1>
                <div className={styles.text}>E-WASTE</div>
              </h1>
              {/*<Image src="/e-waste.jpg" alt="E-Waste" width={"200px"} height={"200px"} />*/}
              {/*Content about this here*/}
            </ClickableTile>
          </div>
        </div>
      </div>
      {/*<ClickableTile*/}
      {/*    href="#"*/}
      {/*><h1>*/}
      {/*    {props.content}*/}
      {/*</h1>*/}
      {/*    /!*Content about this here*!/*/}
      {/*</ClickableTile>*/}
      {/*<ClickableTile*/}
      {/*    href="#"*/}
      {/*><h1>*/}
      {/*    {props.content}*/}
      {/*</h1>*/}
      {/*    /!*Content about this here*!/*/}
      {/*</ClickableTile>*/}
      {/*<ClickableTile*/}
      {/*    href="#"*/}
      {/*><h1>*/}
      {/*    {props.content}*/}
      {/*</h1>*/}
      {/*    /!*Content about this here*!/*/}
      {/*</ClickableTile>*/}
      {/*<ClickableTile*/}
      {/*    href="#"*/}
      {/*><h1>*/}
      {/*    {props.content}*/}
      {/*</h1>*/}
      {/*    /!*Content about this here*!/*/}
      {/*</ClickableTile>*/}
      {/*<ClickableTile*/}
      {/*    href="#"*/}
      {/*><h1>*/}
      {/*    {props.content}*/}
      {/*</h1>*/}
      {/*    /!*Content about this here*!/*/}
      {/*</ClickableTile>*/}
      {/*<ClickableTile*/}
      {/*    href="#"*/}
      {/*><h1>*/}
      {/*    {props.content}*/}
      {/*</h1>*/}
      {/*    /!*Content about this here*!/*/}
      {/*</ClickableTile>*/}
      {/*<ClickableTile*/}
      {/*    href="#"*/}
      {/*>*/}
      {/*    Chemical waste*/}
      {/*</ClickableTile>*/}
    </div>
  );
}
