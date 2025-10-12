import React from "react";
import {
  ThemeProvider,
  Container,
  Typography,
  Divider,
  CssBaseline,
  Box,
} from "@mui/material";
import theme from "./theme";

import CardDemo from "./components/CardDemo";
import TableDemo from "./components/TableDemo";
import ListDemo from "./components/ListDemo";
import AvatarBadgeDemo from "./components/AvatarBadgeDemo";
import AccordionDemo from "./components/AccordionDemo";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100vw",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Data Display Components Demo
          </Typography>
          <Divider sx={{mt: 3, my: 2 }} />

          <Typography
            variant="subtitle1"
            align="left"
            sx={{ fontWeight: 600, mb: 1 }}
          >
            CARDS
          </Typography>
          <CardDemo />
          <Divider sx={{ mt: 3, mb: 2 }} />

          <Typography
            variant="subtitle1"
            align="left"
            sx={{fontWeight: 600, mb: 1 }}
          >
            AVATARS
          </Typography>
          <ListDemo />
          <Divider sx={{ mt: 3, mb: 2 }} />

          <Typography
            variant="subtitle1"
            align="left"
            sx={{ fontWeight: 600, mb: 1 }}
          >
            LIST
          </Typography>
          <AvatarBadgeDemo />
          <Divider sx={{ mt: 3, mb: 2 }} />

          <Typography
            variant="subtitle1"
            align="left"
            sx={{fontWeight: 600, mb: 1 }}
          >
            TABLE
          </Typography>
          <TableDemo />
          <Divider sx={{ mt: 3, mb: 2 }} />

          <Typography
            variant="subtitle1"
            align="left"
            sx={{ fontWeight: 600, mb: 1 }}
          >
            ACCORDION
          </Typography>
          <AccordionDemo />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
