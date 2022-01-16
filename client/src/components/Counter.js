import{Button} from '@mui/material';

import { useState } from 'react';

let Counter=({initialCount})=> {
    const [count, setCount] = useState(initialCount);
    return (
      <>
        Count: {count}
        <Button variant='contained' color='secondary' onClick={() => setCount(initialCount)}>Reset</Button>
        <Button variant='contained' color='secondary' onClick={() => setCount(prevCount => prevCount - 1)}>-</Button>
        <Button variant='contained' color='secondary' onClick={() => setCount(prevCount => prevCount + 1)}>+</Button>
      </>
    );
  }
  export default Counter