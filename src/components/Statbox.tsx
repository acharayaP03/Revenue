import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "@/theme";
import ProgressCircle from "./ProgressCircle";

interface StatBoxProps {
  title: string;
  subtitle: string;
  icon: any;
  progress: string;
  increase: string;
}
export default function Statbox({ title, subtitle, icon, progress, increase }: StatBoxProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box>
        {icon}
        <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[800] }}>
          {title}
        </Typography>
      </Box>
      <Box>
        <ProgressCircle progress={progress} />
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.grey[500] }}>
          {subtitle}
        </Typography>
        <Typography variant="h5" sx={{ color: colors.greenAccent[600] }} fontStyle="italic">
          {increase}
        </Typography>
      </Box>
    </Box>
  );
}
