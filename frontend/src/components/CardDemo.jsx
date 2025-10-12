import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box
} from "@mui/material";

export default function CardDemo() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={4}
      sx={{ my: 4 }}
    >
      {/* First Card */}
      <Card
        sx={{
          background: (theme) => theme.palette.customGradient,
          maxWidth: 445,
          textAlign: "center",
        }}
      >
        <CardMedia
          component="img"
          height="330"
          sx={{ width: 445, objectFit: 'cover', objectPosition: 'top' }}
          image="https://cdn.k-ennews.com/news/photo/202505/8554_22860_058.jpg"
          alt="Sample Product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Kim Dahyun
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A talented rapper and vocalist of TWICE, known for her bright energy and stage charisma.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button size="small" variant="contained">
            Learn More
          </Button>
        </CardActions>
      </Card>

      {/* Second Card (Duplicate) */}
      <Card
        sx={{
          background: (theme) => theme.palette.customGradient,
          maxWidth: 445,
          textAlign: "center",
        }}
      >
        <CardMedia
          component="img"
          height="330"
          sx={{ width: 445, objectFit: 'cover', objectPosition: "50% 25%" }}
          image="https://pbs.twimg.com/media/Cz7BTFzUAAEWUbS.jpg"
          alt="Sample Product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Myoui Mina
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A graceful dancer and vocalist of TWICE, admired for her elegance and calm presence on stage.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button size="small" variant="contained">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
