import {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './Navbar.css'
import TextTransition, {presets} from 'react-text-transition';

const pages = ['Contact', 'Projects'];
const about = [
  'Thiraphat-DEV', 'I Come From Thailand', 'I Learn To code for Myself'
]
const Navbar = () => {
  const [idx, setIdx] = useState(0)

  useEffect(( ) => {
    const intervaled = setInterval(() => {
        setIdx(idx => idx + 1)
    }, 3000);
    return () => clearInterval(intervaled)
  }, [])

  return (
    <AppBar position="sticky" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{display: 'flex',justifyContent:'center'}}
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <TextTransition text={about[idx % about.length]} springConfig={presets.wobbly}/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                 <a  href="https://github.com/Thiraphat-DEV" target="_blank">{page}</a>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;