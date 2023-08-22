import { useCallback, useMemo, useRef } from "react";
import useCotizador from "../hooks/useCotizador"
import { marcas, planes } from '../constans'

const Resultado = () => {
    const { resultado, datos } = useCotizador();
    const { marca, plan, year } = datos;

    const yearRef = useRef(year);
    const [nombreMarca] = useCallback(marcas.filter(m => m.id === Number(marca)), [resultado]);
    const [tipoPlan] = useCallback(planes.filter(p => p.id === Number(plan)), [resultado]);


    if (resultado === 0) return null;

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-500 font-black text-3xl">
                Resumen
            </h2>
            <p className="my-2"><span className="font-bold">Marca: </span>{nombreMarca.nombre}</p>
            <p className="my-2"><span className="font-bold">Año: </span>{yearRef.current}</p>
            <p className="my-2"><span className="font-bold">Plan: </span>{tipoPlan.nombre}</p>
            <p className="my-2 font-bold"><span className="font-bold text-2xl">Total Cotizacion: </span>{resultado}</p>
        </div>
    )
}

export default Resultado