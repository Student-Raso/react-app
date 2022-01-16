import {
    AppBar, 
    Box, 
    Button, 
    Container, 
    Toolbar, 
    Typography
} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate()

    return (
        <Box sx={{flexGrow: 1 }}>
            <AppBar position='static' color='transparent'>
                <Container>
                    <Toolbar>
                        <Typography variant='h6' sx={{ flexGrow:1}}>
                            <Link to="/" style={{textDecoration:'none', color: "#eee"}}>REACT APP</Link>
                        </Typography>

                        <Button 
                            variant='contained' 
                            color='primary' 
                            onClick={()=>navigate("/tasks/new")}
                        >
                        New Task
                        </Button>
                        <Button 
                        variant='contained' 
                        color='primary' 
                        onClick={()=>navigate("/tasks/counter")}>
                        Counter
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}