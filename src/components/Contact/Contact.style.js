import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(theme => {
    return {
        input: {
            backgroundColor: '#6F7E8C',
            borderRadius: '5px',
            margin: '0 0 1rem 0',
            width: '100%',
            '&:focus': {
                backgroundColor: 'red'
            },
            [theme.breakpoints.down('sm')]: {
                width: '100%',
               
                
            },
            zIndex: 2000000000
        },
        grid_container: {
            zIndex: '10000',
            width: '100%',
            margin: '0rem auto 0rem auto',
            position: 'absolute',
            bottom: '100%',
            right: '0%',
            [theme.breakpoints.down('sm')]: {
              
               color: 'white',
               width: '100%',
              
               padding: theme.spacing(3),
               padding: '.5rem 0',
            }

        },
      
        btn: {
            width: '50%',
            border: '2px solid #fff',
            color: 'white'
        },
        
        form: {
            width: '100%',
            
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                
                padding: theme.spacing(3),
                backgroundColor: '#0a1929',
               
             }
        },
        error: {
            background: 'red',
            color: 'white',
            textAlign: 'center',
            margin: '.5rem 0',
            
            padding: '.5rem 0',
            fontSize: '15px',
            borderRadius: '8px',
            zIndex: '1000000',
            
            [theme.breakpoints.down('sm')]: {
                top: '2%',
                width: '90%'
            }
        }
    }
})