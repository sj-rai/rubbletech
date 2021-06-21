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
            <ClickableTile href="/hazardous-waste">
              {/*<BIOSVG width={50} height={100} fill='#fff'/>*/}
              <div className={styles.icons}>
                <Image src="/biohazard.svg" alt="biohazard" layout={"fill"} />
              </div>
              <h2>
                <div className={styles.text}>HAZARDOUS WASTE</div>
              </h2>
              {/*Content about this here*/}
            </ClickableTile>
          </div>
          <div className="bx--col">
            <ClickableTile href="/recyclable-waste">
              <div className={styles.icons}>
                <Image src="/trash.png" alt="trash" layout={"fill"} />
              </div>
              <h2>
                <div className={styles.text}>RECYCLABLE WASTE</div>
              </h2>
              {/*Content about this here*/}
            </ClickableTile>
          </div>
          <div className="bx--col">
            <ClickableTile href="/paper-plastic">
              <div className={styles.icons}>
                <Image
                  src="/recycle-bin.png"
                  alt="recycle-bin"
                  layout={"fill"}
                />
              </div>
              <h2>
                <div className={styles.text}>PLASTIC & PACKAGING</div>
              </h2>
              {/*Content about this here*/}
            </ClickableTile>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col">
            <ClickableTile href="/food-waste">
              <div className={styles.icons}>
                <Image src="/waste.png" alt="waste" layout={"fill"} />
              </div>
              <h2>
                <div className={styles.text}>FOOD WASTE</div>
              </h2>
              {/*Content about this here*/}
            </ClickableTile>
          </div>
          <div className="bx--col">
            <ClickableTile href="/biomedical-waste">
              <div className={styles.icons}>
                <Image
                  src="/biomedical-waste.png"
                  alt="biomedical-waste"
                  layout={"fill"}
                />
              </div>
              <h2>
                <div className={styles.text}>BIOMEDICAL WASTE</div>
              </h2>
              {/*Content about this here*/}
            </ClickableTile>
          </div>
          <div className="bx--col">
            <ClickableTile href="/e-waste">
              {/*<Image src="/ewaste.png" alt="E-Waste" width={"200px"} height={"200px"} />*/}
              <div className={styles.icons}>
                <Image src="/ewaste.png" alt="ewaste" layout={"fill"} />
              </div>
              <h2>
                <div className={styles.text}>E-WASTE</div>
              </h2>
              {/*<Image src="/e-waste.jpg" alt="E-Waste" width={"200px"} height={"200px"} />*/}
              {/*Content about this here*/}
            </ClickableTile>
          </div>
        </div>
      </div>
    </div>
  );
}
