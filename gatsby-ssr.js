import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/JUSTSans-Regular.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="justSansFont"
    />,
    <link
    rel="preload"
    href="/fonts/LeckerliOne-Regular.ttf"
    as="font"
    type="font/ttf"
    crossOrigin="anonymous"
    key="leckerliOneFont"
  />,
    <link
    rel="preload"
    href="/fonts/Georgia-Regular.ttf"
    as="font"
    type="font/ttf"
    crossOrigin="anonymous"
    key="georgiaFont"
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
