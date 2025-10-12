import React from "react";
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";


export default function ListDemo() {
    return (
      <List sx={{display: 'flex',background:(theme) => theme.palette.customGradient, borderRadius: 2 }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRDIzi7YWL_Bt2RlOMSybUgLQJHQZKqjXVw&s"
            />
          </ListItemAvatar> 
          <ListItemText primary="Kim Dahyunie" secondary="South Korean singer and rapper
" />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar 
            src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRu7kZZ-HHMhmCsg-KrpUi9LM1b4vqJo3bTuugF6qgLFu0h5LBK8WG1q0zHL4hTLytic_AmLCI_BY6smEaB"
            />
              
          </ListItemAvatar>
          <ListItemText primary="Myoui Mina" secondary="Japanese singer and dancer
" />
        </ListItem>
      </List>
  );
}
