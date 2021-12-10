import { writable, get } from 'svelte/store';
import Auth from '@aws-amplify/auth';
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { Person } from './models';

export const MODE = Object.freeze({
  SIGN_IN: 0,
  SIGN_UP: 1,
  CONFIRM: 2,
  LOGGED: 3,
  LOADING: 4,
});

const myStore = () => {
  const getNewId = () => new Date().getTime();
  const DEFAULT = {
    username: '',
    items: [
      { id: getNewId(), name: 'Giorgio Boa', title: 'Developer' },
      { id: getNewId() + 1, name: 'John Doe', title: 'Manager' },
      { id: getNewId() + 2, name: 'Mario Bros.', title: 'Idraulico' },
    ],
    mode: MODE.SIGN_IN,
  };
  const store = writable(DEFAULT);
  const { subscribe, set } = store;

  const updateItems = () => {
    DataStore.query(Person, Predicates.ALL).then((items) =>
      set({
        ...get(store),
        error: '',
        items,
        mode: MODE.LOGGED,
      })
    );
  };

  const setModeAndError = (mode, error) => set({ ...get(store), mode, error });

  return {
    subscribe,
    goToSignIn: () => setModeAndError(MODE.SIGN_IN, ''),
    goToSignUp: () => setModeAndError(MODE.SIGN_UP, ''),
    signIn: ({ username, password }) => {
      const prevMode = get(store).mode;
      set({ ...get(store), username, mode: MODE.LOADING });
      Auth.signIn(username, password)
        .then(() => updateItems())
        .catch(() => setModeAndError(prevMode, 'SignIn error...'));
    },
    signUp: ({ username, password, email }) => {
      const prevMode = get(store).mode;
      set({ ...get(store), username, mode: MODE.LOADING });
      Auth.signUp({ username, password, attributes: { email } })
        .then((user) => {
          console.log('user: ', user);
          set({
            ...get(store),
            username,
            mode: MODE.CONFIRM,
            error: '',
          });
        })
        .catch(() => setModeAndError(prevMode, 'SignUp error...'));
    },
    confirm: (confirmCode) => {
      const prevMode = get(store).mode;
      set({ ...get(store), mode: MODE.LOADING });
      Auth.confirmSignUp(get(store).username, confirmCode)
        .then(() => updateItems())
        .catch(() => setModeAndError(prevMode, 'Confirm error...'));
    },
    add: (name, title) =>
      DataStore.save(new Person({ name, title })).then(() => updateItems()),
    delete: (id) =>
      DataStore.query(Person, id).then((toDelete) => {
        console.log('toDelete', toDelete);
        DataStore.delete(toDelete).then(updateItems());
      }),
    updateList: () => updateItems(),
  };
};

const store = myStore();
export default store;
