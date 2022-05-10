import * as React from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Button, TextField} from "@mui/material";
import {FormEventHandler, useState} from "react";
import {DateTimePicker} from "@mui/x-date-pickers";
import * as dayjs from 'dayjs'


export  function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" >
            מחשבון גימלים v2
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default function App() {
    const [text,setText] = useState("");
    const [value, setValue] = React.useState<dayjs.Dayjs | null>(dayjs.default());
    const handleSubmit:FormEventHandler<HTMLFormElement> = (e ) => {
        e.preventDefault();
        let date =value?.toDate() as Date;
        // @ts-ignore
        const days_to_add = (date.getHours() < 8 ? 1 : 2) + (e.target.days.value - 1);
        date.setDate(date.getDate() + days_to_add);
        date.setHours(8);
        date.setSeconds(0);
        date.setMinutes(0);
        const date_text = new Intl.DateTimeFormat('he-IL', { dateStyle: 'full', timeStyle: 'long' }).format(date);
        setText(date_text)

    }



  const handleChange = (newValue: dayjs.Dayjs | null) => {
    setValue(newValue);
  };
  return (<>
  <ButtonAppBar/>
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>

        <form onSubmit={handleSubmit}>
            <DateTimePicker
                 inputFormat={"DD/MM/YYYY HH:mm"}
        label="זמן קבלת הגימל"
          onChange={handleChange}
          renderInput={(params) => <TextField style={{margin:"10px"}}
 required name={"date"} id={"date"} {...params} />}
         value={value}/>
            <TextField
          id="days"
          label="כמה ימים החייל קיבל"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
style={{margin:"10px"}}
          required
          name={"days"}
          defaultValue={1}
          inputProps={{
              "min":1,

          }}
        />
          <Button type={"submit"} variant={"contained"} style={{marginRight:"10px"}}>חשב</Button>
        </form>
          <h1>{text}</h1>
      </Box>
    </Container>

        </>

  );
}