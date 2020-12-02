import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from './redux/store';
import { AppSlice } from './redux/slices/AppSlice';

import './styles/styles.scss';

const useStyles = makeStyles(() =>
  createStyles({
    app: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginTop: 30,
    },
  })
);

export const App = (): React.ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { greeting, deployed } = useSelector(
    (state: RootStateType) => state.AppSlice
  );
  const { setGreeting, setDeployed } = AppSlice.actions;

  const makeServerlessCall = React.useCallback(
    (url: string, callback: (response: any) => void) => {
      axios
        .get(url)
        .then((response) => callback(response))
        .catch((err) => {
          console.error(err);
        });
    },
    []
  );

  React.useEffect(() => {
    makeServerlessCall('/api/deployed', (response) => {
      dispatch(setDeployed(response.data));
    });
    makeServerlessCall('/api/deployed', (response) => {
      dispatch(setGreeting(response.data));
    });
  }, [makeServerlessCall, dispatch, setDeployed, setGreeting]);

  return (
    <div className={classes.app}>
      {(deployed === true && greeting) || 'Greetings from the browser!'}
    </div>
  );
};
