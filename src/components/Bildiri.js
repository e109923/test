import React,{useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Bildiri(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState("info");
  const [degisken, setDegisken] = React.useState("");

  useEffect(() => {
    if (props.aciklama!==null) {
      setOpen(true);

      switch (props.baslik) {
        case "Hata":
          setSeverity("error");
    
          break;
        case "Uyarı":
          setSeverity("warning");
    
          break;
        case "Bilgi":
          setSeverity("success");
    
          break;
        default:
          setSeverity("info");
    
          break;
      }

      setDegisken(props.degisken);
    }
  }, [props.aciklama,props.baslik,props.degisken]);

  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} degisken={degisken}>
          {props.aciklama}
        </Alert>
      </Snackbar>
    </div>
  );
}
