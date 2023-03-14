import InputLabel from '@mui/material/InputLabel';

import * as React from 'react';
import Stack from '@mui/material/Stack';    


function LabelInput({name}){
    return(
        <div>
           <Stack >  
            <InputLabel  >
                    <p style={{fontSize:'17px',fontWeight:'bold', color:'black'}}>{name} </p>
            </InputLabel>
        </Stack>
    
        </div>

    )
}

export default LabelInput