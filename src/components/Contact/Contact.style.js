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
            zIndex: '10000',
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
        },
        error: {
            background: 'red',
            color: 'white',
            textAlign: 'center',
            margin: '.5rem 0',
            
            padding: '.5rem 0',
            fontSize: '15px',
            position: 'absolute',
            zIndex: '1000000',
            top:'-19%',
            [theme.breakpoints.down('sm')]: {
                top: '2%',
                width: '90%'
            }
        }
    }
})