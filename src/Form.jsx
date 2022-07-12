import {Input} from "./Input"
import {Boton} from './Boton';


export const Form = (props) => {

    return (
    <>
    <div id="contenedor">
            <div id="central">
                <div id="login">
                <div class="titulo">
                    Bienvenido
                </div>
                <form id={props.id}>
                    <Input type="text" name="nombre" placeholder="escribe nombre"/>
                    <Input type="password" name="password" placeholder="escribe password"/>
                    <Boton nombre="Login"/>
                </form>
                <div class="pie-form">
                    <a href="https://ventos.mx">¿Perdiste tu contraseña?</a>
                    <a href="https://ventos.mx">¿No tienes Cuenta? Registrate</a>
                </div>
                </div>
            </div>
        </div>
    </>
    )
}