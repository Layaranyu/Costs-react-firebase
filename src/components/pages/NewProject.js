import ProjectForm from "../project/ProjectForm"
import LabelInput from "../../form/LabelInput"
import { Box } from "@mui/system"
import Stack from '@mui/material/Stack'; 
import Select from "../../form/Select";

function NewProject(){
    return(
        <Box  alignItems='center' display='flex' flexDirection='column' > 
            <h1 style={{marginTop:'50px',marginLeft:"15px"}} >  Criar Projeto </h1>
            <p style={{marginLeft:'50px'}}> Crie seu projeto para depois adicionar os serviços</p>
            <Stack
            width='300px' 
            component="form"
            textAlign='left'           
            autoComplete="off"
            alignItems='left'>
                <LabelInput  name='Nome do projeto:'/>
                <ProjectForm 
                type='text'
                placeholder='Digite o título do seu projeto'
                required
                />
                <LabelInput name='Valor do projeto:'/>
                <ProjectForm 
                type='number'
                placeholder='Valor do Orçamento'
                required/>
                <Select/>
            </Stack>
            </Box>
    )
}

export default NewProject