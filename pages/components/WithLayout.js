import React from 'react'

const layoutStyle = {
  margin: 20,
  padding: 20,
}

const withLayout = Page => {
  //eslint-disable-next-line react/display-name
  return () => (
    <div style={layoutStyle}>
      <Page />
    </div>
  )
}

export default withLayout
