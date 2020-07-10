import { createContext } from 'react';

const defaultContext = {
  editable: false,
  setEditable() {},
  users: [],
  setUsers() {},
}

export const UserContext = createContext(defaultContext);
