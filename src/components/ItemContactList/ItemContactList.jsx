import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export function ItemContactForm(props) {
    return (
    <>
        <ListItem>
         <ListItemText  primary={`${props.contact.name}`} />
         <ListItemText  primary={`${props.contact.number}`} />
         <IconButton onClick={props.handleDelete} aria-label="delete">
        <DeleteIcon  /></IconButton>
       </ListItem>
       <Divider />
       </>
        
    );
}