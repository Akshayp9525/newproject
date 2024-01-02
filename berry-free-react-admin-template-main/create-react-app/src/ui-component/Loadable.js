import { Suspense } from 'react';

import Loader from './Loader';

const Loadable = () => () =>
  (
    <Suspense fallback={<Loader />}>
    </Suspense>
  );

export default Loadable;
