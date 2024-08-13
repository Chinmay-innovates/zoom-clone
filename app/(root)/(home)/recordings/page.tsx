import { CallList } from '@/components/call-list'
import {Wrapper} from '@/components/wrapper'
import React from 'react'

const Recordings = () => {
  return (
    <Wrapper
   label="Recordings"
   >
      <CallList type="recordings" />
   
   </Wrapper>
  )
}

export default Recordings