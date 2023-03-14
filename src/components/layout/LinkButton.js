import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';

function LinkButton({to,text}){
    return(
        <Box sx={{
            display:'flex',
            background:'black',
            height:'40px',
            width:'120px',
            alignItems:"center",
            textDecoration:'none' ,
            justifyContent:'center', 
            borderRadius:'5px',
        }}>  
            
            <Link to={to} style={{textDecoration: 'none', color:'white'}}>{text}</Link>
        </Box>
        
    )
}

export default LinkButton