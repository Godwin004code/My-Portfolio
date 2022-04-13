import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => {
    return {
        drawer: {
            backgroundColor: '#0A1929',
            width: '400px',
            height: '100%',
            color: 'white',
            position: 'relative',
            [theme.breakpoints.down('md')]: {
                width: '300px'
            },
            
        },
       icon_container:{
           position: 'absolute',
           bottom: 0,
           width: '100%',
          
       },
       icon: {
           marginRight: theme.spacing(2)
       }, 
       listitem: {
           textAlign: 'center',
           lineHeight: '5',
           cursor: 'pointer',
           fontFamily: 'Monospace'
       }
    }
})