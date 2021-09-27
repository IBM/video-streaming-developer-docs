import React from 'react';
import { Grid, Row, Column } from 'gatsby-theme-carbon/src/components/Grid';
import { column, row, grid } from './Banner.module.scss';

const HomepageBanner = ({ image, position, renderText }) => (
  <Grid
    style={{
      maxWidth: '100%',
      backgroundImage: `url(${image})`,
      backgroundPosition: position || 'center',
    }}
    className={grid}
    position={position}
  >
    <Row className={row}>
      <Column className={column}>{renderText()}</Column>
    </Row>
  </Grid>
);

export default HomepageBanner;
