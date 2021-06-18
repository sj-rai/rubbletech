import React from 'react'
import {
    ClickableTile, Tile
} from 'carbon-components-react'

export default function TileComponent(props) {
    return (
        <div>
            <Tile
                href="#"
            ><h1>
                {props.content}
            </h1>
                <br/>
                Content about this here
            </Tile>
            {/*<ClickableTile*/}
            {/*    href="#"*/}
            {/*>*/}
            {/*    Chemical waste*/}
            {/*</ClickableTile>*/}
        </div>
    )
}

