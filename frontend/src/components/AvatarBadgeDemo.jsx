import React from "react";
import { Avatar, Badge, Stack } from "@mui/material";

// AvatarBadgeDemo: shows a horizontal stack of avatars with badges.
// Uses Badge to overlay small labels on each Avatar and Stack for spacing.
export default function AvatarBadgeDemo() {
  return (
    <Stack direction="row" spacing={17} sx={{ background: (theme) => theme.palette.customGradient, p: 2, borderRadius: 2 }}>
      {/* Each Badge wraps an Avatar and displays short badge content */}
      <Badge badgeContent={"anoney?"} color="primary">
        <Avatar
          alt="User Avatar"
          src="https://i.pinimg.com/736x/2f/ca/15/2fca15a98f20904fca2efd8b61805960.jpg" />
      </Badge>

      <Badge badgeContent={"ya"} color="primary">
        <Avatar
          alt="User Avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOjdLVamNGty0yzL_pQgeHvoXmMrc3xMuZIQ&s" />
      </Badge>

      <Badge badgeContent={"ya"} color="primary">
        <Avatar
          alt="User Avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOjdLVamNGty0yzL_pQgeHvoXmMrc3xMuZIQ&s" />
      </Badge>

      <Badge badgeContent={"ya"} color="primary">
        <Avatar
          alt="User Avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOjdLVamNGty0yzL_pQgeHvoXmMrc3xMuZIQ&s" />
      </Badge>

      <Badge badgeContent={"ya"} color="primary">
        <Avatar
          alt="User Avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOjdLVamNGty0yzL_pQgeHvoXmMrc3xMuZIQ&s" />
      </Badge>
    </Stack>
  );
}