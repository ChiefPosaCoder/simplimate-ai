import HeaderBlock from './HeaderBlock'
import React, { Component } from 'react'

import Services from './Services'
import SubmitForm from './SubmitForm'
import Billboard from './Billboard'
import Article from './Article'
import Cards from './Cards'
import Grid from '@material-ui/core/Grid'

const PageMain = ({
  stories,
  menu,
  projects,
  introOne,
  introTwo,
  introThree,
  introPartner,
  summary = {},
}) => {
  return (
    <div>
      <HeaderBlock menu={menu} />
      <Billboard
        stories={stories}
        height={`650px`}
      />
      {/* <Article
        textAlign={`center`}
        {...summary}
        margin={`8em 6em 0 6em`}
        marginxs={`4em 1em 0 1em`}
      />  */}
      <Article
        {...introPartner}
        margin={`6em 0 0 0`}
        marginxs={`2em 1em 0 1em`}
        padding={`4em 6em 4em 6em`}
        paddingxs={`1em 1em 1em 1em`}
        background={`ffffff`}
      />
      <Grid margin={`5em 0 0 0`} container direction="row" justifyContent="center">
        <Grid item xs={10} sm={10}>
          <Cards secondary="false" cards={summary.cards} />
        </Grid>
      </Grid>


 
        <Article
        {...introThree}
        margin={`6em 0 0 0`}
        marginxs={`2em 1em 0 1em`}
        padding={`4em 6em 4em 6em`}
        paddingxs={`1em 1em 1em 1em`}
        background={`#f5f5f5`}
      />
      <Services
        margin={`6em 4em 0 4em`}
        marginxs={`2em 1em 0 1em`}
        title={`Industry Segments`}
        projects={projects}
        
      />
      {/* <Article
        {...introOne}
        margin={`8em 6em 0 6em`}
        marginxs={`2em 1em 0 1em`}
      />
      <Article
        {...introTwo}
        margin={`4em 0 0 0`}
        padding={`4em 6em 4em 6em`}
        paddingxs={`1em 1em 1em 1em`}
        background={`#CCCCCC`}
      /> */}

      {/* <AboutUs aboutus={aboutus} title={`About Us`} /> */}
      {/* <Team members={members} title={membersTitle} /> */}
      
      <SubmitForm margin={`6em 6em 6em 6em`} marginxs={`4em 1em 4em 1em`} />
    </div >
  )
}

export default PageMain
