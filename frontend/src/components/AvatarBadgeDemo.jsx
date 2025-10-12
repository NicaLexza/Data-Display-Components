import React from "react";
import { Avatar, Badge, Stack } from "@mui/material";

export default function AvatarBadgeDemo() {
    return (
      <Stack direction="row" spacing={17} sx={{background:(theme) => theme.palette.customGradient, p:2, borderRadius:2}}>
        <Badge badgeContent={"anoney?"} color="primary">
          <Avatar
            alt="User Avatar"
            src="https://i.pinimg.com/736x/2f/ca/15/2fca15a98f20904fca2efd8b61805960.jpg"/>
        </Badge>
        <Badge badgeContent={"ya"} color="primary">
          <Avatar
            alt="User Avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOjdLVamNGty0yzL_pQgeHvoXmMrc3xMuZIQ&s"/>
        </Badge>
        <Badge badgeContent={"ya"} color="primary">
          <Avatar
            alt="User Avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOjdLVamNGty0yzL_pQgeHvoXmMrc3xMuZIQ&s"/>
        </Badge>
        <Badge badgeContent={"ya"} color="primary">
          <Avatar
            alt="User Avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOjdLVamNGty0yzL_pQgeHvoXmMrc3xMuZIQ&s"/>
        </Badge>
        <Badge badgeContent={"ya"} color="primary">
          <Avatar
            alt="User Avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOjdLVamNGty0yzL_pQgeHvoXmMrc3xMuZIQ&s"/>
        </Badge>
      </Stack>
    );
   }