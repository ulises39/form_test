import { useState } from "react";
import { Message, MessageContent, ProfilePicture } from "../../styles/FormContentStyle"
import { TbUser } from "react-icons/tb";
import { IconContext } from "react-icons";
const Nombre = ({setDatoNombreTerminado, setNombreFinal}) => {

    const [nombreCompleto, setNombreCompleto] = useState({
        nombre: '',
        segundoNombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
    });
    const {nombre, segundoNombre, apellidoPaterno, apellidoMaterno} = nombreCompleto;

    // const nombreFin = `${nombre} ${segundoNombre} ${apellidoPaterno} ${apellidoMaterno}`;
    const nombreFin = {
        nombre: nombre,
        segundoNombre: segundoNombre,
        apellidoPaterno: apellidoPaterno,
        apellidoMaterno: apellidoMaterno
    };

    const handleInputChange = ({target}) => {
        setNombreCompleto({
            ...nombreCompleto,
            [ target.name] : target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Se disparó el submit");
        (nombre.trim().length > 1) && 
            (apellidoPaterno.trim().length > 3) && 
                (apellidoMaterno.trim().length > 3) &&                    
                    formTerminado();     
    }

    const formTerminado = ( ) => {
        setDatoNombreTerminado(true);
        setNombreFinal(nombreFin);
    }

    return (
        <MessageContent>
            <IconContext.Provider value={{size: "2.5rem"}}>
                <ProfilePicture>
                    <TbUser />
                </ProfilePicture>
                <Message onSubmit={handleSubmit}>
                    <span>¿Cuál es tu nombre?</span>
                    <input
                        type='text'
                        name='nombre'
                        placeholder={"Nombre"}
                        // autoComplete="off"
                        value={nombre}
                        onChange={handleInputChange} 
                        // required
                    />
                    <input
                        type='text'
                        name='segundoNombre'
                        placeholder={"Segundo Nombre"}
                        autoComplete="off"
                        value={segundoNombre}
                        onChange={handleInputChange} 
                    />
                    <input
                        type='text'
                        name='apellidoPaterno'
                        placeholder={"Apellido Paterno"}
                        autoComplete="off"
                        value={apellidoPaterno}
                        onChange={handleInputChange} 
                    />
                    <input
                        type='text'
                        name='apellidoMaterno'
                        placeholder={"Apellido Materno"}
                        autoComplete="off"
                        value={apellidoMaterno}
                        onChange={handleInputChange} 
                    />
                    <button type="submit">Siguiente</button>                    
                </Message>
            </IconContext.Provider>    
        </MessageContent>
    )
}

export default Nombre
