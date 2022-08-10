import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(theme => {
    return {
       projects_container: {
           display: 'flex',
           
           overflow: 'auto',
           padding: '2rem 0 1rem 0',
           margin: '0rem 0rem 8rem 0',
           [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            overflow: 'hidden'
        },
          
       },
       project_card: {
           minWidth: '350px',
           //height: '420px',
           margin: 15,
           marginBottom: 30,
           [theme.breakpoints.down('sm')]: {
            width: '90%'
        },
       },
       img1: {
           width: '100%',
           height: '250px',
           backgroundColor: '#0A1929 '
       },
       icons :{
           color: 'white',
           display: 'flex',
           justifyContent: 'space-between',
            width: '50%',
            margin: '0 auto',
            marginTop: theme.spacing(2),
            '& span':{
                cursor: 'pointer'
            }
       }
    }
})
