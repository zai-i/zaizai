import React, { useRef, useEffect, useState } from 'react'

import p5 from './p5.min'

const SketchWrapper = (props) => {
  const sketchRef = useRef()
  const [showPrompt, setShowPrompt] = useState(true)

  useEffect(() => {
    const instance = new p5(props.sketch, sketchRef.current)

    return () => {
      instance.remove()
    }
  }, [props.sketch])

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
      onPointerDown={() => setShowPrompt(false)}
    >
      <div ref={sketchRef} />

      {showPrompt && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'Self Modern',
            fontWeight: 'bold',
            color: '#e6a4b7',
            pointerEvents: 'none',
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          draw here
        </div>
      )}
    </div>
  )
}

export default SketchWrapper