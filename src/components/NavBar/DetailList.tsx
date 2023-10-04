import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import { homeItems } from './NavBarList'
import { useRouter } from "next/router";
// import { NavLink } from 'react-router-dom';

const DetailList = () => {
const router = useRouter()
  return (
    <Box maxWidth={250}>
        <nav>
            <List>
                {homeItems.map(i => (
                    // <NavLink to={i.link} key={i.id}>
                    <ListItem
                        key={i.id}
                        sx={{ backgroundColor: "#1E5128" }}
                        onClick={() => router.push(i.link)} // Utiliza router.push para navegar
                        style={{ cursor: "pointer" }} // Cambia el cursor para indicar que es interactivo
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                {i.icon}
                            </ListItemIcon>
                            <ListItemText primary={i.title} sx={{color: 'white'}}/>
                        </ListItemButton>
                    </ListItem>
                    // </NavLink>
                ))}
            </List>
        </nav>

    </Box>
  )
}

export {DetailList}