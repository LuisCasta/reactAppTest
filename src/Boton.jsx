const printConsole = () => {

    alert('hola')
}

export const Boton = ({nombre}) => {

    return (
    <>
        <button onClick={printConsole}>
            {nombre}
        </button>
    </>
    )
}