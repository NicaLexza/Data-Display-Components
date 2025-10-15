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

// App component: sets up the theme and page layout, then renders demo sections.
// Box centers the page; Container holds the demo components and their labels.
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline applies the theme background and basic global styles */}
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
        {/* Container constrains content width and stacks labeled demo components */}
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Data Display Components Demo
          </Typography>
          <Divider sx={{ mt: 3, my: 2 }} />

          {/* Each label (Typography) names the demo below it */}
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
            sx={{ fontWeight: 600, mb: 1 }}
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
            sx={{ fontWeight: 600, mb: 1 }}
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
