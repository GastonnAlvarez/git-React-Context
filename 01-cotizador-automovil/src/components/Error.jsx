import useCotizador from "../hooks/useCotizador"


const Error = () => {

    const { error } = useCotizador();
    return (
        <div className="text-2xl p-3 text-center border-red-600 border-4 bg-red-300 text-red-900 rounded-md">{error}</div>
    )
}

export default Error