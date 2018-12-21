import React from 'react'
import { Input, Button } from '../common'

const CommentsAdder = ({ onClick }) =>
  <form>
    <Input label="Комментарий" multiline fullWidth name="comment" />
    <Button onClick={ onClick }>
      Оставить комментарий
    </Button>
  </form>

export default CommentsAdder