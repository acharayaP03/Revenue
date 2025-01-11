import React from "react";
import { Box } from "@mui/material";
import Header from "@/components/Header";

const Dashboard: React.FC = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="start" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
