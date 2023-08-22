import { Col, Card, Button } from 'react-bootstrap';
import useBebidas from '../hook/useBebidas';
const Bebidas = ({ bebida }) => {
    console.log(bebida);
    const { strDrink, strDrinkThumb,idDrink } = bebida;
    const { handleModalClick,handleBebidaIdClick } = useBebidas();
    return (
        <Col
            md={2}
            lg={3}
        >
            <Card className='mb-4'>
                <Card.Img
                    variant='top'
                    src={strDrinkThumb}
                    alt={`Image de ${strDrink}`}
                />
                <Card.Body>
                    <Card.Title>${strDrink}</Card.Title>
                    <Button
                        variant='warning'
                        className='w-100 text-uppercase mt-2'
                        onClick={()=>{
                            handleModalClick(),
                            handleBebidaIdClick(idDrink)
                        }}
                    >Ver Receta</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Bebidas