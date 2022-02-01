import React, {Fragment, useState} from 'react';
import { calculateTotal } from '../helpers';

const Form = (props) =>{
    const {entry, setEntry, term, setTerm,setTotalPay, } = props;

    const [error, setError] = useState(false);

    const entryChange = (e) =>{
        setEntry(e.target.value)
    }

    const termChange = (e) =>{
        setTerm(e.target.value)
    }

    // Submit de la form 
    const calculateLoan = (e) =>{
        //Evitar que se renderize al submit
        e.preventDefault();
        
        // Validación 
        if(entry === 0 || term === ""){
            setError(true);
            return; 
        }

        // Eliminar error
        setError(false);

        
        // Realizar lógica
        const toPay = calculateTotal(entry, term);
        
        // Mostrar total a pagar
        setTotalPay(toPay);

    }

    return (
    <Fragment>
        <form onSubmit={ calculateLoan }>
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange={ entryChange }
                    />
                </div>
                <div>
                  <label>Plazo para Pagar</label>
                    <select 
                      className="u-full-width"
                      onChange={ termChange }
                    >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                    </select>
                </div>
                <div>
                    <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                    />
                </div>
            </div>
        </form>

        { ( error ) ? <p className='error'>Todos los campos son obligatorios</p> : null  }
        
    </Fragment>
    )
}

export default Form