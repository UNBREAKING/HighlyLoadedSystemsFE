import React from 'react'
import { Field } from 'redux-form'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import lightBlue from '@material-ui/core/colors/lightBlue'

const theme = createMuiTheme({
  palette: {
    primary: lightBlue
  },
  typography: { useNextVariants: true },
});

const commonInput = ({ 
  input, 
  label, 
  password, 
  number,
  date,
  ...props 
}) =>
  <MuiThemeProvider theme={theme}>
    <TextField
      id={ label }
      label={ label }
      rows="6"
      margin="normal"
      { ...input }
      { ...props }
      { ...date && 
          ({ type: "date", InputLabelProps: { shrink: true } }) 
      }
      { ...password && ({ type: "password" }) }
      { ...number && ({ type: "number" }) } />
  </MuiThemeProvider>

const Input = ({ label, name, ...props }) =>
  <Field 
    name={ name } 
    label={ label } 
    component={ commonInput }
    { ...props } />

export default Input