import { Link } from 'react-router-dom';
import '../../index.css'

import PICS from '../../assets/PICS.png'
import PICM from '../../assets/PICM.png'
import PFCM from '../../assets/PICM.png'
import PFCS from '../../assets/PFCS.png'
import COLAS from '../../assets/COLAS.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const HomeMenu = () => {
  return (
    <div>
      <div className='contenedores'>
        <div >
          <div className='cardsP'>
            <Link to='/'>
              <CardMedia

                image={COLAS}
                title="PICM"
                className='portada'
              />
            </Link>

            <div className='grids'>
              <Link to='/calculator/m_m_1'>
                <Card sx={{ maxWidth: 245 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={PICS}
                    title="PICS"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Poblacion Infinita - 1 Servidor
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Calcular</Button>
                    <Button size="small">Ejemplos</Button>
                  </CardActions>
                </Card>

              </Link>

              <Card sx={{ maxWidth: 245 }}>
                <Link to='/calculator/m_m_k'>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={PICM}
                    title="PICM"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Poblacion Infinita - K Servidorores
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Calcular</Button>
                    <Button size="small">Ejemplos</Button>
                  </CardActions>
                </Link>

              </Card>

              <Card sx={{ maxWidth: 245 }}>
                <Link to='/calculator/m_m_1_m_m'>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={PFCS}
                    title="PFCS"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Poblacion Finita - 1 Servidor
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Calcular</Button>
                    <Button size="small">Ejemplos</Button>
                  </CardActions>
                </Link>

              </Card>


              <Card sx={{ maxWidth: 245 }}>

                <Link to='/calculator/m_m_k_m_m'>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={PFCM}
                    title="PFCM"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Poblacion Finita - K Servidorores
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Calcular</Button>
                    <Button size="small">Ejemplos</Button>
                  </CardActions>
                </Link>
                
              </Card>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};




export default HomeMenu;
