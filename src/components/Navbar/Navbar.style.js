import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(theme => {
    return {
        appbar: {
            width: '90%',
            backgroundColor: '#0A1929',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 auto',
            padding: '.6rem 0',
            [theme.breakpoints.down('sm')]: {
                padding: '1rem 0'
            }
        },
        h4: {
            [theme.breakpoints.down('sm')]: {
                padding: '1rem .6rem'
            }
        },
        nav: {
            width: '40%',
            display: 'flex',
            justifyContent: 'space-between',
            cursor: 'pointer'
        },
        icon_container: {
            //width: '25%',
            display: 'flex',
            
        },
        icon: {
            width: 35,
            height: 35,
            border: '1px solid white',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginRight: theme.spacing(2),
            cursor: 'pointer'
        },
        block: {
            display: 'block'
        },
        none: {
            display: 'none'
        }
    }
})