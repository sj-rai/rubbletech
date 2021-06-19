import React from 'react'
import {
    ClickableTile, Tile
} from 'carbon-components-react'
import styles from './tile.module.scss'
import Image from "next/image";

export default function TileComponent(props) {
    return (
        <div className = {styles.tiles}>
                <div className="bx--grid bx--grid--condensed">
                        <div className="bx--row">
                                <div className="bx--col">
                                        <ClickableTile
                                            href="#"
                                        ><h1>
                                                HAZARDOUS WASTE
                                        </h1>
                                                {/*Content about this here*/}
                                        </ClickableTile>
                                </div>
                                <div className="bx--col">
                                        <ClickableTile
                                            href="#"
                                        ><h1>
                                                RECYCLABLE WASTE
                                        </h1>
                                                {/*Content about this here*/}
                                        </ClickableTile>
                                </div>
                                <div className="bx--col">
                                        <ClickableTile
                                            href="#"
                                        ><h1>
                                                LIQUID OR SOLID HOUSEHOLD WASTE
                                        </h1>
                                                {/*Content about this here*/}
                                        </ClickableTile>
                                </div>
                        </div>
                        <div className="bx--row">
                                <div className="bx--col">
                                        <ClickableTile
                                            href="#"
                                        ><h1>
                                                GREEN WASTE
                                        </h1>
                                                {/*Content about this here*/}
                                        </ClickableTile>
                                </div>
                                <div className="bx--col">
                                        <ClickableTile
                                            href="/biomedical-waste"
                                        ><h1>
                                                BIOMEDICAL WASTE
                                        </h1>
                                                {/*Content about this here*/}
                                        </ClickableTile>
                                </div>
                                <div className="bx--col">
                                        <ClickableTile
                                            href="#"
                                        ><h1>
                                                E-WASTE
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
    )
}

