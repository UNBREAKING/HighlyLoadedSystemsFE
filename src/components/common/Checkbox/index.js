import React from 'react'
import { Field } from 'redux-form'
import Checkbox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import orange from '@material-ui/core/colors/orange'
import blue from '@material-ui/core/colors/blue'

const styles = {
  root: {
    color: orange[600],
    '&$checked': {
      color: blue[500],
    },
  },
  checked: {},
};

const commonCheckbox = ({ input: { value, onChange }, classes, label }) =>
  <FormControlLabel
    control={
      <Checkbox
        classes={{
          root: classes.root,
          checked: classes.checked,
        }}
        checked={value ? true : false}
        onChange={ onChange } />
    }
    label={ label }
  />
  
const styledCheckbox = withStyles(styles)(commonCheckbox)

const CommonCheckbox = ({...props }) =>
  <Field 
    component={ styledCheckbox }
    { ...props } />

export default CommonCheckbox