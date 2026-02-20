import React from 'react';
import HeaderBlock from './HeaderBlock';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import Article from './Article';
import Billboard from './Billboard';

const A = {};

A.Root = styled(Grid)`
  && {
    background-color: #fff;
  }
`;

const PageModernise = (props) => {
  const {
    footerMenu = [],
    footerCopyright = {},
    menu,
    articles = [],
    banner,
  } = props;

  return (
    <div>
      <HeaderBlock color={`#4A4A4A`} background={`transparent`} menu={menu} />
      <Billboard stories={[]} height={`650px`} banner={banner} />

      {articles.length > 0 ? (
        articles.map((article, index) => (
          <Article
            textAlign={`relative`}
            key={index}
            paddingxs={`0 1em 2em 1em`}
            marginxs={`2em 0 0 0`}
            padding={`0 6em 0 6em`}
            margin={`5em 0 0 0`}
            {...article}
          />
        ))
      ) : (
        <div>No articles found.</div>
      )}
    </div>
  );
};

export default PageModernise;