import {configureStore} from '@reduxjs/toolkit';

import user from '../../features/common/model/slice';

export default configureStore({
  reducer: {
    user,
  },
});
