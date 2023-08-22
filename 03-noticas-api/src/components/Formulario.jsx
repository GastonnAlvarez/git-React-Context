import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import useNoticias from '../../hook/useNoticias'


const CATEGORIAS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
]

const Formulario = () => {
    const { categoria, handleChangeCategoria } = useNoticias();

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Categoria</InputLabel>
                <Select
                    label='Categorias'
                    onChange={handleChangeCategoria}
                    value={categoria}
                >
                    {
                        CATEGORIAS.map((categorias) => (
                            <MenuItem
                                key={categorias.value}
                                value={categorias.value}
                            >
                                {categorias.label}
                            </MenuItem>
                        ))
                    }

                </Select>
            </FormControl>
        </form>
    )
}

export default Formulario