import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/SelfModern-Italic.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="selfModernFont"
    />,
    <link
    rel="preload"
    href="/fonts/SourceSans3-VariableFont_wght.ttf"
    as="font"
    type="font/ttf"
    crossOrigin="anonymous"
    key="sourceSansFont"
  />,
    <link
    rel="preload"
    href="/fonts/Anton-Regular.ttf"
    as="font"
    type="font/ttf"
    crossOrigin="anonymous"
    key="antonFont"
  />,
  ])
}
