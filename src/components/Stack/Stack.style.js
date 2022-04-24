import { makeStyles } from "@material-ui/core"

export const useStyle = makeStyles((theme) => {
    return {
        div: {
            background: '',
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        },
        
        box: {
            width: '96%',
            display: 'flex',
            
            justifyContent: 'space-between',
            fontSize: '100px',
            padding: '2rem 0',
            margin: '0 auto',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                display: 'block',
                textAlign: 'center',
                margin: '0'
            }
        },
        space: {
            [theme.breakpoints.down('sm')]: {
                margin: '0 0 3rem 0'
            }
        }
    }
})