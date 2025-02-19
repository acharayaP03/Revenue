import { Box } from "@mui/material";
import Header from "../components/Header";

interface ContainerProps {
  title: string;
  subtitle: string;
  height?: string;
  children: React.ReactNode;
}
export default function Bar({ children, title, subtitle, height = "75vh" }: ContainerProps) {
  return (
    <Box m="20px">
      <Header title={title} subtitle={subtitle} />
      <Box height={height}>{children}</Box>
    </Box>
  );
}
