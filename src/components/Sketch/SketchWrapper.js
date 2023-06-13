import React, { useRef, useEffect } from 'react'
import p5 from './p5.min'

const SketchWrapper = (props) => {
  const sketchRef = useRef()
  useEffect(() => {
    new p5(props.sketch, sketchRef.current)
  }, [props.sketch])
  return <div ref={sketchRef} />
}

export default SketchWrapper
