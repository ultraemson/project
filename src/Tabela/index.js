import React from "react";

const Tabela = ({dados}) => {
    const keys = Object.keys(dados[0])
    return (
        <table>
            <thead>
                <tr>
                    {
                        keys.map(key => <th key={key} > {key} </th> )
                    }
                    
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>
                        Dados 1
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
export default Tabela