import React from 'react';
import MediaQuery from "react-responsive";
import PcWelcome from "./pc/PcWelcome";
import MobileWelcome from "./mobile/MobileWelcome";

export default function WelcomeContainer (props) {

    return (
        <MediaQuery
            minWidth={600}
        >
            {
                (match) => match ?
                    <PcWelcome/>
                    :
                    <MobileWelcome/>
            }
        </MediaQuery>
    )
}