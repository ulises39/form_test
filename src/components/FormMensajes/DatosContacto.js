import { useState } from "react";
import { Message, MessageContent, ProfilePicture } from "../../styles/FormContentStyle"
import { TbUser } from "react-icons/tb";
import { IconContext } from "react-icons";
const Contacto = ({setDatosContactoTerminado, setCorreoFinal, setTelefonoFinal}) => {

    const [contacto, setContacto] = useState({
        correo: '',
        telefono: '',
    });

    const {correo, telefono} = contacto;
    // const correoFin = `Correo Electronico: ${correo}`;
    // const celularFin = `Número Celular: ${telefono}`;

    const handleInputChange = ({target}) => {
        setContacto({
            ...contacto,
            [ target.name] : target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        (correo.trim().length > 10) && 
            (telefono.trim().length > 9) && 
                formTerminado();

    }
    const formTerminado = () => {
        setDatosContactoTerminado(true);
        setCorreoFinal(correo);
        setTelefonoFinal(telefono);
    }
    return (
        <MessageContent>
            <IconContext.Provider value={{size: "2.5rem"}}>
                <ProfilePicture>
                    <TbUser />
                </ProfilePicture>
                <Message onSubmit={handleSubmit}>
                    <span>Datos de contacto</span>
                    <input
                        type='text'
                        name='correo'
                        placeholder={"Correo Electronico"}
                        autoComplete="off"
                        value={correo}
                        onChange={handleInputChange} 
                    />
                    <input
                        type='text'
                        name='telefono'
                        placeholder={"Telefono celular"}
                        autoComplete="off"
                        value={telefono}
                        onChange={handleInputChange} 
                    />        
                    <button type="submit">Siguiente</button>                    
                </Message>
            </IconContext.Provider>    
        </MessageContent>
    )
}

export default Contacto
