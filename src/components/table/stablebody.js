import React from "react";
import { useState } from "react";

import ViewMore from '../viewmore/viewmore.jsx';
import './stablebody.css'

function STableBody (props) {



    return(
        <div>
            <div className="tablebody">
                <div className="intable">{props.f_type}</div>
                <div className="intable">{props.f_name}</div>
                <div className="intable">{props.yangjae}</div>
                <div className="intable">{props.gyungbu}</div>
                <div className="intable">{props.avg_price}</div>
            </div>
        </div>
    )

}

export default STableBody