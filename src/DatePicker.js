import * as React from "react";
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { MonthPicker } from "@mui/x-date-pickers/MonthPicker";
import { YearPicker } from "@mui/x-date-pickers/YearPicker";

const minDate = dayjs("2022-12-20T00:00:00.000");
const maxDate = dayjs("2034-01-01T00:00:00.000");

export default function SubComponentsPickers() {
  const [date, setDate] = React.useState(dayjs("2022-12-30"));

  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CalendarPicker
            date={date}
            onChange={(newDate) => setDate(newDate)}
            onClick={handleClick}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
