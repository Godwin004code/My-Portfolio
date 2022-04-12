import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(theme => {
    return {
        input: {
            backgroundColor: '#6F7E8C',
            borderRadius: '5px',
            margin: '0 0 1.8rem 0',
            
            '&:focus': {
                backgroundColor: 'red'
            },
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                
            }
            
        },
        grid_container: {
            width: '100%',
            margin: '0rem auto 1rem auto',
            position: 'absolute',
            bottom: '100%',
            right: 0,
            [theme.breakpoints.down('sm')]: {
               backgroundColor: '#0a1929',
               color: 'white',
               width: '100%',
               right: '5%',
               padding: theme.spacing(3),
               height: '400px'
            }

        },
      
        btn: {
            width: '50%',
            border: '2px solid #fff',
            color: 'white'
        },
        mapcontainer: {
            width: '500px',
            height:'500px'
        },
        form: {
            [theme.breakpoints.down('sm')]: {
                
                width: '100%',
                position: 'absolute',
                padding: theme.spacing(3),
                left: 0
             }
        }
    }
})