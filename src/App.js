import "./App.css";
import { Button } from "@material-ui/core"; //importing material ui component
import { datePicker } from "@mui/x-date-pickers"; //importing date picker component
// date-fns
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// or for Day.js
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// or for Luxon
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
// or for Moment.js
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

function App({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  );
}

export default App;
