import { Fragment } from "react"
import { MessageResp, MessageRespContent } from "../../styles/FormContentStyle"
// import { gql } from '@apollo/client';
// import { useMutation } from '@apollo/react-hooks';

// const CREATE_USER_QUERY = gql`
//     mutation createUser(
//         $nombre: String!
//         $segundo_nombre: String
//         $apellido_paterno: String!
//         $apellido_materno: String!
//         $fecha_nacimiento: String!
//         $email: String!
//         $telefono: String!
//     ){
//         createUser( 
//             nombre              : $nombre
//             segundo_nombre      : $segundo_nombre
//             apellido_paterno    : $apellido_paterno
//             apellido_materno    : $apellido_materno
//             fecha_nacimiento    : $fecha_nacimiento
//             email               : $email
//             telefono            : $telefono
//         ) {
//             id
//             nombre
//             segundo_nombre
//             apellido_paterno
//             apellido_materno
//             fecha_nacimiento
//             email
//             telefono
//         }
//     }
// `;

const RespuestaFinal = ({usuario}) => {
    
    // const [ nombreFinal, nacimientoFinal, correoFinal, numeroFinal ] = [""];
    
    
    return (
        <MessageRespContent>
            <MessageResp>
                <Fragment>
                    <span>{usuario?.nacimientoFinal}</span>
                    <span>{usuario?.correoFinal}</span>
                    <span>{usuario?.telefonoFinal}</span>
                    <span>{`${usuario?.nombreFinal?.nombre} ${usuario?.nombreFinal?.segundoNombre} 
                            ${usuario?.nombreFinal?.apellidoPaterno} ${usuario?.nombreFinal?.apellidoMaterno}`}</span>
                </Fragment>
            </MessageResp>
        </MessageRespContent>
    )
}

export default RespuestaFinal
