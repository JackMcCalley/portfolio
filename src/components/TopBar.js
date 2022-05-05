import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import Link from '@mui/material/Link';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddIcCallSharpIcon from '@mui/icons-material/AddIcCallSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import JackMcCalleyResume from '../files/JackMcCalleyResume.pdf'

export default function ButtonAppBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={styles.bar}>
        <Toolbar sx={{justifyContent: 'flex-end'}}>
          <Button 
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            variant='outlined' 
            sx={{':hover': {bgcolor: '#66e3ce', color: 'black'}}} 
            color="inherit"
          >
            Contact
          </Button>
          <Menu
            id='contact'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem>
              <ListItemIcon>
                <AddIcCallSharpIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText><Link color='inherit' underline='none' target='_blank' href='tel:8584495126'>Phone</Link></ListItemText>
              <Typography variant="body2" color="text.secondary">
                (858) 449-5126
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <EmailSharpIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText><Link color='inherit' underline='none' target='_blank' href='mailto: jackmccalley@gmail.com'>Email</Link></ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <LoginSharpIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText><Link color='inherit' underline='none' target='_blank' href='https://www.linkedin.com/in/jackmccalley/'>LinkedIn</Link></ListItemText>
            </MenuItem>
          </Menu>
          <Button 
            href={JackMcCalleyResume} 
            target="_blank" 
            variant="outlined" 
            sx={{':hover': {bgcolor: '#66e3ce', color: 'black'}}} 
            color="inherit"
          >
            Resume
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const styles = {
  bar: {
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none",
    bgcolor: 'transparent', 
    boxShadow: 'none', 
    position: 'fixed'
  },
}