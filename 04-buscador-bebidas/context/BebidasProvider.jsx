import { useState, useEffect, createContext, Children } from "react";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
    const [bebidas, setBebidas] = useState([]);
    const [modal, setModal] = useState(false);
    const [bebidaId, setBebidaId] = useState(null);
    const [receta, setReceta] = useState({});
    const [cargando, setCargando] = useState(false);

    const obtenerReceta = async () => {
        setCargando(true);
        if (!bebidaId) return;

        try {
            let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;
            const res = await fetch(url),
                respuesta = await res.json();
            setReceta(respuesta.drinks[0]);
            console.log(respuesta.drinks[0]);
        } catch (error) {
            console.log(error);
        } finally {
            setCargando(false);
        }
    }

    const consultarBebidas = async (datos) => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`

            const res = await fetch(url),
                respuesta = await res.json();
            setBebidas(respuesta.drinks);
        } catch (error) {
            console.log(error);
        }
    };

    const handleModalClick = () => {
        setModal(!modal);
    }

    const handleBebidaIdClick = (id) => {
        setBebidaId(id);
    };

    useEffect(() => {
        consultarBebidas();
    }, []);

    useEffect(() => {
        obtenerReceta();
    }, [bebidaId]);


    return (
        <BebidasContext.Provider value={{
            consultarBebidas,
            bebidas,
            handleModalClick,
            modal,
            handleBebidaIdClick,
            receta,
            cargando
        }}>
            {children}
        </BebidasContext.Provider>
    )
};

export { BebidasProvider };
export default BebidasContext;