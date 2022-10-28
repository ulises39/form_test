export const saveAndSendFormData = (nombreFinal, correoFinal, nacimientoFinal, numeroFinal) => {
    sessionStorage.setItem("nombreCompleto", `${nombreFinal.nombre} ${nombreFinal.segundoNombre} ${nombreFinal.apellidoPaterno} ${nombreFinal.apellidoMaterno}`);
    sessionStorage.setItem("correoElectronico",correoFinal);
    sessionStorage.setItem("fechaNacimiento",nacimientoFinal);
    sessionStorage.setItem("numeroCelular",numeroFinal);
}