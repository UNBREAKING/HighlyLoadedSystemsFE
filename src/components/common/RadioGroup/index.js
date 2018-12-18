import React from 'react'
import { Field } from 'redux-form'
import { withStyles } from '@material-ui/core/styles'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import teal from '@material-ui/core/colors/teal'

const styles = {
  root: {
    color: teal[600],
    '&$checked': {
      color: teal[800],
    },
  },
  checked: {},
};

const groupStyles = {
  group: {
    display: "flex",
    "flex-direction": "row",
    "justify-content": "center"
  }
}

const StyledGroup = ({ classes, ...props }) =>
  <RadioGroup 
    { ...props }
    className={ classes.group } />


const CommonGroup =  withStyles(groupStyles)(StyledGroup)

const renderRadioGroup = ({ input, name, ...rest }) => (
  <CommonGroup
    {...input}
    {...rest}
    name={ name }
    value={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
)

const StyledRadio = ({ classes, ...props }) => 
  <Radio
    { ...props } 
    classes={{
      root: classes.root,
      checked: classes.checked,
    }} /> 

const FinalStyledRadio = withStyles(styles)(StyledRadio)

const CommonRadioGroup = ({ name, elements = [] }) =>
  <Field name={ name } component={renderRadioGroup}>
    { 
      elements.map( ({ value, label }, index) => 
        <FormControlLabel
          key={ index }
          value={ value } 
          control={<FinalStyledRadio />} 
          label={ label } />
      )
    }
  </Field>

export default CommonRadioGroup