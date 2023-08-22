import { useState, useEffect, createContext } from "react";
import axios from 'axios'


const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalNoticia, setTotalNoticia] = useState(0);

    useEffect(() => {
        const consultarApi = async () => {

            try {
                const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=bc3c0f30bb3a423aa61dab2540eec9aa`;

                const resp = await fetch(url),
                    response = await resp.json();
                setNoticias(response.articles);
                setTotalNoticia(response.totalResults);
                setPagina(1);

            } catch (error) {

            }
        };

        consultarApi();
    }, [categoria]);

    useEffect(() => {
        const consultarApi = async () => {

            try {
                const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=bc3c0f30bb3a423aa61dab2540eec9aa`;

                const resp = await fetch(url),
                    response = await resp.json();
                setNoticias(response.articles);
                setTotalNoticia(response.totalResults);



            } catch (error) {

            }
        };

        consultarApi();
    }, [pagina]);


    const handleChangeCategoria = e => {
        setCategoria(e.target.value);
    };

    const handleChangePagina = (e, valor) => {
        setPagina(valor);
    };

    return (
        <NoticiasContext.Provider value={{
            categoria,
            handleChangeCategoria,
            noticias,
            totalNoticia,
            handleChangePagina,
            pagina
        }}>
            {children}
        </NoticiasContext.Provider>
    );
};

export { NoticiasProvider };
export default NoticiasContext;