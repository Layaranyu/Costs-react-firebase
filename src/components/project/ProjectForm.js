import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';



function ProjectForm({onChange,id,type,placeholder,value,label,helperText,options,handleOnChange}){
    return(
        <div>
            <Box 
        display='flex'
        flexDirection='column'
        alignItems='center'
        width='50%'> 
             <Stack
            borderRadius='5px' 
            width='300px'
            marginLeft='100%'
            display='flex'
            padding='px'
        >  
            <TextField
            size='small'
            autoComplete="off"
            placeholder={placeholder}
            InputLabelProps={{
                shrink: true, 
            }}
            onChange={onChange}
            id={id}
            type={type}
            value={value}
            label={label}
            helperText={helperText}
            required
            />
        </Stack>
        </Box>
        </div>
    )
}

export default ProjectForm