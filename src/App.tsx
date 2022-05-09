import * as React from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Button, TextField} from "@mui/material";
import {FormEventHandler, useState} from "react";



export  function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" >
            מחשבון גימלים
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default function App() {
    const [text,setText] = useState("")
    const handleSubmit:FormEventHandler<HTMLFormElement> = (e ) => {
        e.preventDefault();
        // @ts-ignore
        window.aaa = e.target.date;
        // @ts-ignore
        let date = new Date(e.target.date.value);
        const days_to_add = date.getHours() < 8 ? 1 : 2;
        date.setDate(date.getDate() + days_to_add);
        date.setHours(8);
        date.setSeconds(0);
        date.setMinutes(0);
        const date_text = new Intl.DateTimeFormat('he-IL', { dateStyle: 'full', timeStyle: 'long' }).format(date);
        setText(date_text)

    }
  return (<>
  <ButtonAppBar/>
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>

        <form onSubmit={handleSubmit}>
           <TextField
        id="date"
        label="זמן קבלת הגימל"
        type="datetime-local"
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
        name={"date"}
        required
      />
          <Button type={"submit"} variant={"contained"} style={{marginRight:"10px"}}>חשב</Button>
        </form>
          <h1>{text}</h1>
      </Box>
    </Container>

        </>

  );
}