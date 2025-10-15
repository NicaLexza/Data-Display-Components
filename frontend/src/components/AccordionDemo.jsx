import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Each Accordion uses AccordionSummary for the clickable header and AccordionDetails for the hidden content.
export default function AccordionDemo() {
  return (
    <>
      {/* First accordion*/}
      <Accordion sx={{ background: (theme) => theme.palette.customGradient }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {/* Summary text shown while collapsed */}
          <Typography>Which component you found easiest and hardest to use?</Typography>
        </AccordionSummary>

        {/* Details shown when the accordion is expanded */}
        <AccordionDetails>
          <Typography>
            The component I found easiest to use was the Accordion because it was simple to set up and only required a few lines of code to make it work properly. It was also easy to organize and customize the text inside each section. On the other hand, the Card component was the hardest to use, especially when customizing the image. Adjusting the image position, size, and fit within the card required more effort and testing different properties. Despite that, I learned a lot about how to control layout and styling in Material UI. Overall, this activity helped me understand how different components work together to create clean and functional designs.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Second accordion*/}
      <Accordion sx={{ background: (theme) => theme.palette.customGradient }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How these components can improve user experience in a real-world app?</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            These components can greatly improve user experience in a real-world app by making information more organized, visually appealing, and interactive. Cards allow users to quickly see important content, images, or product details in a compact, easy-to-read format, which is especially useful for e-commerce or portfolio apps. Accordions help manage large amounts of information by letting users expand and collapse sections as needed, reducing clutter and making the interface cleaner. Together, they create a structured layout that guides users attention and improves navigation. By using these components thoughtfully, an app can feel more intuitive, engaging, and efficient for users.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}