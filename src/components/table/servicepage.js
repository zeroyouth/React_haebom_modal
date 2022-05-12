import React, { useState } from "react";
import RsearchBar from "../searchbar/rsearchbar.js";
import './servicepage.css';
import OpenModal from "../openModal/openModal.js";

function ServicePage() {
    const [openModal, setOpenModal] = useState(false);
    const modalClose = () => {
        setOpenModal(!openModal);
    }

    return (
        <div className="top1">
            <div>서비스창</div>
            <RsearchBar />
            <button onClick={modalClose}>modal</button>
            {openModal && <OpenModal modalClose={modalClose}></OpenModal>}
        </div>
    )

}

export default ServicePage