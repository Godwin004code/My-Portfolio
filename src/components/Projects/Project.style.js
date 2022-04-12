import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(theme => {
    return {
       projects_container: {
           display: 'flex',
           overflow: 'auto',
           padding: '2rem 0',
           gap: 10
       },
       project_card: {
           minWidth: '300px',
           height: '350px'
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