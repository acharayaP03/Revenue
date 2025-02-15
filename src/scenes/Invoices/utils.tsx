import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 0.5 },
  { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
  },

  {
    field: "date",
    headerName: "Date",
    flex: 1,
  },
];
