import { Box, useTheme } from "@mui/material";
import { tokens } from "@/theme";

import Header from "@/components/Header";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently asked questions page" />

      <Accordion defaultExpanded sx={{ marginTop: "20px" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is the purpose of this website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            This website is a demo project to showcase the use of MUI components in a Next.js project.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ marginTop: "10px" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            ow to contact your admin?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit ex excepturi, aspernatur impedit
            consequatur quo dolorum. Sed iusto repudiandae deserunt libero! Animi optio iure dolorum voluptate soluta,
            eos rem eveniet est impedit! Optio illo, explicabo laboriosam saepe magni ad.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ marginTop: "10px" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is the purpose of this website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            This website is a demo project to showcase the use of MUI components in a Next.js project.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
