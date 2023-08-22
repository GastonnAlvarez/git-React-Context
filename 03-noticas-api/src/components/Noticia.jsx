import { Card, CardActions, CardContent, CardMedia } from '@mui/material'
import { Link, Grid, Typography } from '@mui/material'

const Noticia = ({ noticia }) => {

    const { urlToImage, url, title, description, source } = noticia;
    return (

        <>
            <Grid
                item
                md={6}
                lg={4}
            >
                <Card>
                    <CardMedia
                        component='img'
                        alt={`Imagen de la Noticia`}
                        image={urlToImage}
                        height={250}
                    />
                </Card>

                <CardContent>
                    <Typography variant='body1' color='error'>
                        {source.name}
                    </Typography>
                    <Typography variant='h5' component='div'>
                        {title}
                    </Typography>
                    <Typography variant='body'>
                        {description}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Link
                        href={url}
                        target='_blank'
                        variant='button'
                        width={'100%'}
                        textAlign={'center'}
                        sx={{
                            textDecoration: 'none'
                        }}
                    >
                        Read Notice
                    </Link>
                </CardActions>
            </Grid>
        </>
    )
}

export default Noticia