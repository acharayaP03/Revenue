import React from "react";
import { useTheme, Box, Button, IconButton, Icon, Typography } from "@mui/material";
import { DownloadDoneOutlined, EmailOutlined, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import { tokens } from "@/theme";
import { mockTransactions } from "@/data/mockData";

import Header from "@/components/Header";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import BarChart from "@/components/BarChart";
import Statbox from "@/components/Statbox";
import ProgressCircle from "@/components/ProgressCircle";
import GeographyChart from "@/components/GeographyChart";

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              background: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <Icon component={DownloadDoneOutlined} sx={{ fontSize: "20px", marginRight: "5px" }} />
            Download Report
          </Button>
        </Box>
      </Box>
      {/*Grids and Charts */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          sx={{
            background: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Statbox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={<Icon component={EmailOutlined} sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          sx={{
            background: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Statbox
            title="431,225"
            subtitle="Sales obtained"
            progress="0.50"
            increase="+21%"
            icon={<Icon component={PointOfSale} sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          gridRow={2}
          sx={{
            background: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Statbox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={<Icon component={PersonAdd} sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          gridRow={2}
          sx={{
            background: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Statbox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.43"
            increase="+43%"
            icon={<Icon component={Traffic} sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box gridColumn="span 6" gridRow="span 2" sx={{ background: colors.primary[400] }}>
          <Typography variant="h5" fontWeight="600" sx={{ padding: "30px 30px 0 30px" }}>
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box gridColumn="span 8" gridRow="span 3" sx={{ background: colors.primary[400] }}>
          <Box mt="25px" p="0 30px" display="flex " justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <Icon component={DownloadDoneOutlined} sx={{ fontSize: "26px", color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
          </Box>
          <Box height="400px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box gridColumn="span 4" gridRow="span 3" sx={{ background: colors.primary[400] }} overflow="auto">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: `4px solid ${colors.primary[500]}`,
              p: "15px",
            }}
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>{transaction.user}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                p="5px 10px"
                borderRadius="4px"
                sx={{
                  background: colors.greenAccent[500],
                }}
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" p="30px" sx={{ background: colors.primary[400] }}>
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle size="125" />
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}>
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" sx={{ background: colors.primary[400] }} padding="30px">
          <Typography variant="h5" fontWeight="600" sx={{ marginBottom: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" sx={{ background: colors.primary[400] }} padding="30px">
          <Typography variant="h5" fontWeight="600" sx={{ marginBottom: "15px" }}>
            Most used language
          </Typography>
          <Box height="200px">
            <PieChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
