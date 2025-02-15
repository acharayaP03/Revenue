import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { columns } from "./utils";
import { mockDataInvoices } from "@/data/mockData";
import Header from "@/components/Header";
import { tokens } from "@/theme";

export default function Invoices() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const invoicesColumns: GridColDef[] = [
    ...columns,
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => <Typography color={colors.greenAccent[500]}>${params.row.cost}</Typography>,
    },
  ];

  const invoicesSxProps = {
    "& .MuiDataGrid-row--borderBottom": {
      backgroundColor: `${colors.blueAccent[700]} !important`,
    },
    "& .MuiDataGrid-root": {
      border: "none",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "none",
    },
    "& .name-column--cell": {
      color: colors.greenAccent[300],
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: colors.blueAccent[700],
      borderBottom: "none",
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: colors.primary[400],
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: "none",
      backgroundColor: colors.blueAccent[700],
    },
    "& .MuiCheckbox-root": {
      color: `${colors.greenAccent[200]} !important`,
    },
  };
  return (
    <Box m="20px">
      <Header title="Invoices" subtitle="List of invoices balance" />
      <Box m="40px 0 0 0" height="56vh" sx={invoicesSxProps}>
        <DataGrid rows={mockDataInvoices} columns={invoicesColumns} checkboxSelection />
      </Box>
    </Box>
  );
}
