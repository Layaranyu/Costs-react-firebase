import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Logo from '../../img/Logo.png'

import { Link } from 'react-router-dom'

function NavBar(){
    return(
    <Box sx={{
        display:'flex',
        background:'black',
        height:'100%',
        width:'100%',
        justifyContent:'space-between'
        
    }}>  
        <Box 
            display='flex'
            alignItems='center'
            marginLeft='35px'
            >  
            <img width='80px' height='65px' src={Logo} alt="logo" />
        </Box>   
            <Stack 
                width='300px'
                height='40px'
                display='flex'
                padding='25px'
                flexDirection='row'
                justifyContent='space-around'
                alignItems='center'
            >
            <Link to='/' style={{fontSize:'20px', textDecoration: 'none', color:'white'}}> Home </Link>
            <Link to='/contact' style={{fontSize:'20px', textDecoration: 'none', color:'white'}}> Contato </Link>
            <Link  to='/company' style={{fontSize:'20px', textDecoration: 'none', color:'white'}}> Empresa  </Link>
            <Link  to='/projects' style={{fontSize:'20px', textDecoration: 'none', color:'white'}}> Projetos  </Link>
            </Stack>
    </Box>       
        )
    }    

    export default NavBar