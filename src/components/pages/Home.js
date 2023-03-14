import LinkButton from "../layout/LinkButton"
import Box from '@mui/material/Box';
import Saving from '../../img/savings.svg'

function Home(){
    return(
        <Box 
        display='flex'
        flexDirection='column'
        alignItems='center'> 
            <h1 style={{fontSize:'40px',margin:'30px 10px 1px 15px'}}>Bem-vindo ao Costs !</h1>
            <p style={{ fontSize:'15px',margin:'30px 10px 40px 10px'}}>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton  to='/newproject' text="Criar projeto"/>
            <img src={Saving} alt="Costs" width='25%' style={{marginTop:'50px'}}/>
        </Box>
    )
}

export default Home