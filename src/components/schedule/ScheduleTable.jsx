import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ScheduleStatus from "./ScheduleStatus";

const ScheduleTable = ({ rows }) => {
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "task", headerName: "Task", flex: 1 },
        { field: "date", headerName: "Date", flex: 1 },
        { field: "time", headerName: "Time", flex: 1 },
        {
            field: "status",
            headerName: "Status",
            flex: 1,
            sortable: false,
            renderCell: (params) => <ScheduleStatus value={params.value} />
        },
    ];

    return (
        <div className="schedule-table-wrapper">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}
                checkboxSelection
                disableSelectionOnClick
                className="schedule-datagrid"
            />
        </div>
    );
};

export default ScheduleTable;
