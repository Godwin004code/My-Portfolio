import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(theme => {
    return {
        footer_container: {
            color: 'white',
            width: '90%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
            }
            
        },
        
    }
})