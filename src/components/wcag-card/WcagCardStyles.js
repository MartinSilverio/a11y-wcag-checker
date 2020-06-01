import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonJustify: {
    justifyContent: 'flex-end',
  },
  divider: {
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
  },
  list: {
    listStyleType: 'circle',
  },
  linkMargin: {
    display: 'block',
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
