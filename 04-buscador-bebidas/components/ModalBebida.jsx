import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../hook/useBebidas';

const ModalBebida = () => {
    const { modal, handleModalClick, receta, cargando } = useBebidas();

    const mostrarIngredientes = () => {
        let ingredientes = [];

        for (let i = 1; i < 16; i++) {
            if (receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredientes;
    };

    return (
        !cargando && (<Modal show={modal} onHide={handleModalClick}>
            <Image
                src={receta.strDrinkThumb}
                alt={`La bebida es ${receta.strDrink}`}
            />
            <Modal.Header>
                <Modal.Title>{receta.strDrink}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='p-3'>
                    <h2>Intrucciones</h2>
                    {receta.strInstructions}
                    <h2>Ingredientes y Cantidades</h2>
                    {mostrarIngredientes()}
                </div>
            </Modal.Body>
        </Modal>)
    )
}

export default ModalBebida