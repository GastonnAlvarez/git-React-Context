import { Row } from 'react-bootstrap';
import useBebidas from "../hook/useBebidas"
import Bebidas from './Bebidas';

const ListadoBebidas = () => {
    const { bebidas } = useBebidas();

    return (
        <Row className='mt-5'>
            {bebidas.map(bebida => (
                <Bebidas
                    key={bebida.idDrink}
                    bebida={bebida}
                />
            ))}
        </Row>
    )
}

export default ListadoBebidas