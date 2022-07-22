import { Context } from '../Component/context/Context';

import { useContext } from 'react';


export const useAuth = () => {
  return  useContext(Context)
}
