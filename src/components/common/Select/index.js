import React from 'react'
import { Field } from 'redux-form'
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import teal from '@material-ui/core/colors/teal'

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  }
});

const theme = createMuiTheme({
  palette: {
    primary: teal
  },
  typography: { useNextVariants: true },
});

const renderSelect = ({
  input,
  label,
  children,
  classes 
}) =>
  <MuiThemeProvider theme={theme}>
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={ label }>
        { `${label}` }
      </InputLabel>
      <Select
        value={input.value}
        onChange={input.onChange}
        input={<Input name={ label } id={ label } />}>
        { children }
      </Select>
    </FormControl>
  </MuiThemeProvider>

const styledSelect = withStyles(styles)(renderSelect)

const CommonSelect = ({ name, label, values = [] }) =>
  <Field 
    name={ name }
    label={ label }
    component={ styledSelect }>
    {
      values.map(({ value, name }) =>
        <MenuItem value={value}>{ name }</MenuItem>
      )
    }
  </Field>

export default CommonSelect