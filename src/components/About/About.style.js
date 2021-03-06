import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(theme => {
    return {
        about_container: {
            margin: '2rem 0 0 0',
            height: '430px',
            [theme.breakpoints.down('sm')]: {
                height: '705px',
                position: 'relative'
            }
        },
        body: {
            width: '40%',
            fontFamily: 'Montaga',
            [theme.breakpoints.down('sm')]: {
                width: '90%',
                margin: '0rem auto 0 auto',
                position: 'absolute',
                bottom: '3%'
            }
        },
        container: {
            width: '90%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
            }
        },
        spin: {
            width: '40%',
            [theme.breakpoints.down('sm')]: {
                width: '90%',
                margin: '0 auto'
            }
        }
        
    }
})