import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const testTab = 
`A|-------4--------------------------------|
E|-2--2-----2--2--------------------------|
C|-2-----------2----2--2--2--------1/2----|
G|----2--2--2-----------------------------|`;

export function Fretboard(props) {
    function fretNumbers(max)
    {
        let numbers = [];
        for (let i = 1; i<=max; i++)
        {
            numbers.push(i)
        }
        return numbers;
    }

    const test = parseTab(testTab);
    const strings = ['G', 'C', 'E', 'A'];
    return (
        <Paper elevation={1}>
              <Typography variant="body1" color="textPrimary" component="h1">
                <Grid container direction="row" justify="center" alignItems="center">
                    {fretNumbers(10).map(x => <Note>{x}</Note>)
                }
                </Grid>
            </Typography>
        </Paper>

    );

}

function TabBar(props) {
    return (
        <div>
            <Grid container direction="column" justify="center" alignItems="center">
                {props.bar.map(x => <Note>{x}</Note>)}
            </Grid>
        </div>
    )
}



function Note(props) {
    return (
        <Paper>
        {props.children}
        </Paper>
    )
}

function parseTab(tabString) {
    const musicExp = /[0-9\-/]+/g;
    const tabLines = tabString.split('\n');
    const notesArray = tabLines.map(x => x.match(musicExp).toString().split(''));
    const notesTransp = notesArray[0].map((col, i) => notesArray.map(row => row[i]));
    return notesTransp;
}