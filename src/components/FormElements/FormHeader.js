import { Header, FormSubtitle, FormTitle } from "../../styles/FormHeaderStyle"
import { BsClipboardCheck } from "react-icons/bs";
import { IconContext } from "react-icons";
import { ImClock2 } from "react-icons/im";

const FormHeader = () => {
    return (
        <Header>
            <FormTitle>
                <IconContext.Provider value={{size: "5em", color: "#FFFF"}}>
                    <h4>Formulario - Datos de Usuario</h4>
                    <BsClipboardCheck />
                </IconContext.Provider>
            </FormTitle>    
            <FormSubtitle>
                <IconContext.Provider value={{size: ".9em"}}>
                    <ImClock2 />
                    <span>En menos de 5 minutos</span>
                </IconContext.Provider>
            </FormSubtitle>            
        </Header>
    )
}

export default FormHeader
