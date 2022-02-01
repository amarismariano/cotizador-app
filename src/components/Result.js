import React from 'react';

const Result = ({entry, term, totalPay}) =>{
    return (
        <div className='u-full-width resultado'>
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: ${entry}</p>
            <p>El plazo a pagar en: {term} meses</p>
            <p>Su pago mensual es de: ${(totalPay / term).toFixed(2)}</p>
            <p>El total a pagar es: ${totalPay}</p>
        </div>
    )
}

export default Result;