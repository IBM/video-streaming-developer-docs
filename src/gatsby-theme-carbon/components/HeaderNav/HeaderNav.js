import React from 'react';

import { HeaderNavigation } from '@carbon/react';

function HeaderNav() {
  const label = 'IBM Video Streaming Developers Site';

  return <HeaderNavigation className="cds--g100" aria-label={label} />;
}

export default HeaderNav;
