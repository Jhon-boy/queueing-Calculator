import React from 'react';
import '../../styles/Head.css'
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import GroupIcon from '@mui/icons-material/Group';
import ComputerIcon from '@mui/icons-material/Computer';
import HomeIcon from '@mui/icons-material/Home';
import { BsInfinity, BsPcDisplayHorizontal, BsFillFileRuledFill, BsFileDiff } from "react-icons/bs";


interface propsToolbar {
  heightVh: number;
}

const Toolbar = ({ heightVh }: propsToolbar) => {
  return (
    <div className='main-menu'>
       <Paper sx={{ width: '100%', maxWidth: '100%', height: '100%' }}>
                    <MenuList>
                        <Link to='/' className='titles'>
                            <MenuItem >
                                <ListItemIcon>
                                    <HomeIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Inicio</ListItemText>
                            </MenuItem>
                            <Divider />
                        </Link>


                        <Link to='/calculator/m_m_1' className='titles'>
                            <MenuItem>
                                <ListItemIcon>
                                    <BsInfinity />
                                </ListItemIcon>
                                <ListItemText>PICS</ListItemText>
                                <Typography variant="body2" color="text.secondary">
                                    <ListItemIcon>
                                        <ComputerIcon />
                                    </ListItemIcon>
                                </Typography>
                            </MenuItem>

                            <Divider />
                        </Link>


                        <Link to='/calculator/m_m_k' className='titles'>
                            <MenuItem>
                                <ListItemIcon>
                                    <BsInfinity />
                                </ListItemIcon>
                                <ListItemText>PICM</ListItemText>
                                <Typography variant="body2" color="text.secondary">
                                    <BsPcDisplayHorizontal /> <BsPcDisplayHorizontal />
                                </Typography>
                            </MenuItem>

                            <Divider />
                        </Link>

                        <Link to='/calculator/m_m_1_m_m' className='titles'>
                            <MenuItem>
                                <ListItemIcon>
                                    <GroupIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>PFCS</ListItemText>
                                <Typography variant="body2" color="text.secondary">
                                    <ComputerIcon />
                                </Typography>
                            </MenuItem>

                            <Divider />
                        </Link>

                        <Link to='/calculator/m_m_k_m_m' className='titles'>
                            <MenuItem>
                                <ListItemIcon>
                                    <GroupIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>PFCM</ListItemText>
                                <Typography variant="body2" color="text.secondary">
                                    <BsPcDisplayHorizontal /> <BsPcDisplayHorizontal />
                                </Typography>
                            </MenuItem>
                            <Divider />
                        </Link>

                        <Link to='/FORMULAS' className='titles'>
                            <MenuItem>
                                <ListItemIcon>
                                    <BsFillFileRuledFill />
                                </ListItemIcon>
                                <ListItemText>Formulas</ListItemText>
                            </MenuItem>
                            <Divider />
                        </Link>

                        <Link to='/EJEMPLOS' className='titles'>
                            <MenuItem>
                                <ListItemIcon>
                                    <BsFileDiff />
                                </ListItemIcon>
                                <ListItemText>Ejemplos</ListItemText>
                            </MenuItem>
                        </Link>


                    </MenuList>
                </Paper>
    </div>

  );
};


export default Toolbar;
