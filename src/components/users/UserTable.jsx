import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import UserStatus from "./UserStatus";

const UserTable = ({ rows, columns }) => {
    const modifiedColumns = columns.map(col =>
        col.field === "status"
            ? { ...col, renderCell: (params) => <UserStatus value={params.value} /> }
            : col
    );

    return (
        <Paper className="users-table-paper" elevation={3}>
            <Box className="users-table-wrapper">
                <DataGrid
                    rows={rows}
                    columns={modifiedColumns}
                    pageSize={10}
                    rowsPerPageOptions={[5, 10, 20]}
                    checkboxSelection
                    className="users-datagrid"
                />
            </Box>
        </Paper>
    );
};

export default UserTable;
