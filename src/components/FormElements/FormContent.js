/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useState } from "react";
import { ButtonFin, Content } from "../../styles/FormContentStyle"
import Contacto from "../FormMensajes/DatosContacto";
import FechaNacimiento from "../FormMensajes/FechaNacimiento";
import Nombre from "../FormMensajes/Nombre"
import Validar from "../FormMensajes/Validar";
import Respuesta from "../FormRespuesta/Respuesta";
import RespuestaFinal from "../FormRespuesta/RespuestaFinal";
import { saveAndSendFormData } from "../helper/saveAndSendFormData";
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/react-hooks';


const CREATE_USER_QUERY = gql`
    mutation createUser(
        $nombre: String!
        $segundo_nombre: String
        $apellido_paterno: String!
        $apellido_materno: String!
        $fecha_nacimiento: String!
        $email: String!
        $telefono: String!
    ){
        createUser( 
            nombre              : $nombre
            segundo_nombre      : $segundo_nombre
            apellido_paterno    : $apellido_paterno
            apellido_materno    : $apellido_materno
            fecha_nacimiento    : $fecha_nacimiento
            email               : $email
            telefono            : $telefono
        ) {
            id
            nombre
            segundo_nombre
            apellido_paterno
            apellido_materno
            fecha_nacimiento
            email
            telefono
        }
    }
`;

const FormContent = () => {
    //States para validar que los datos del form se hayan completado
    const [ datoNombreTerminado, setDatoNombreTerminado ] = useState(false);
    const [ datoNacimientoTerminado, setDatosNacimientoTerminado ] = useState(false);
    const [ datoContactoTerminado, setDatosContactoTerminado ] = useState(false);
    //States para almacenar los datos finales adquiridos en los formularios
    const [ nombreFinal, setNombreFinal ] = useState("");
    const [ correoFinal, setCorreoFinal ] = useState("");
    const [ nacimientoFinal, setNacimientoFinal ] = useState("");
    const [ telefonoFinal, setTelefonoFinal ] = useState("");
    
    //State Final para mostrar todos los datos
    const [verDatos, setVerDatos] = useState(false);
    const [createUser] = useMutation(CREATE_USER_QUERY);

    const handleClick = (e) => {
        e.preventDefault();
        saveAndSendFormData(nombreFinal, correoFinal, nacimientoFinal, telefonoFinal)
        createUser( { variables: {
            nombre: nombreFinal.nombre,
            segundo_nombre: nombreFinal.segundoNombre,
            apellido_paterno: nombreFinal.apellidoPaterno,
            apellido_materno: nombreFinal.apellidoMaterno,
            fecha_nacimiento: nacimientoFinal,
            email: correoFinal,
            telefono: telefonoFinal,
        }, optimisticResponse: {
            createUser: {
                nombre: nombreFinal.nombre,
                __typename: "Usuario",
                content: {
                    nombre: nombreFinal.nombre,
                    segundo_nombre: nombreFinal.segundoNombre,
                    apellido_paterno: nombreFinal.apellidoPaterno,
                    apellido_materno: nombreFinal.apellidoMaterno,
                    fecha_nacimiento: nacimientoFinal,
                    email: correoFinal,
                    telefono: telefonoFinal,
                }
            }
        }
    }).catch((error) => {
            console.log(error);
        }).finally(setVerDatos(datos => !datos));
    }

    const usuarioFinal = {nombreFinal, nacimientoFinal, correoFinal, telefonoFinal};

    return (
        <Content>
            <Nombre setDatoNombreTerminado={setDatoNombreTerminado} 
                setNombreFinal={setNombreFinal}/>
            { datoNombreTerminado && 
                <Fragment>
                    <Respuesta dato={ `${nombreFinal.nombre} ${nombreFinal.segundoNombre} ${nombreFinal.apellidoPaterno} ${nombreFinal.apellidoMaterno}`} />
                    <FechaNacimiento setDatosNacimientoTerminado={setDatosNacimientoTerminado} 
                        setNacimientoFinal={setNacimientoFinal}/>
                </Fragment>
            }
            { datoNacimientoTerminado && 
                <Fragment>
                    <Respuesta dato={nacimientoFinal}/>
                    <Contacto setDatosContactoTerminado={setDatosContactoTerminado} 
                        setCorreoFinal={setCorreoFinal} setTelefonoFinal={setTelefonoFinal}/>
                </Fragment>
            }
            { datoContactoTerminado && 
                <Fragment>
                    <Respuesta dato={`Correo: ${correoFinal}`} datoOpc={`Telefono: ${telefonoFinal}`}/>
                    <Validar />
                    <ButtonFin onClick={(e) => handleClick(e)}>Iniciar</ButtonFin>
                </Fragment>
            }
            {
                verDatos &&
                    <RespuestaFinal usuario={usuarioFinal}/>
            }
        </Content>
    )
}

export default FormContent
