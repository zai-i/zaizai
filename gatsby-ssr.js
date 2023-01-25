import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Inter-VariableFont_wght.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
    rel="preload"
    href="/fonts/LeckerliOne-Regular.ttf"
    as="font"
    type="font/ttf"
    crossOrigin="anonymous"
    key="leckerliFont"
  />,
  ])
}
