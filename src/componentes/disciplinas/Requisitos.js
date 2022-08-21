import React, { useState } from "react";
import PropTypes from "prop-types"
import "./Requisitos.css"

export default function DisciplinaItem(
    {
        cod,
        title,
        discState,
        onDiscUpdate,
        onDeleteDisc
    }
) {
    const [isEditing, setIsEditing] = useState(false)
    return (
        <div className="Requisitos.css" >
            <div onClick={(e) => setIsEditing(true) } > {} </div>
        </div>
    )
}



DisciplinaItem.protoType = {
    cod: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    discState: PropTypes.string.isRequired,
    onDiscUpdate: PropTypes.func.isRequired,
    onDeleteDisc: PropTypes.func.isRequired
}