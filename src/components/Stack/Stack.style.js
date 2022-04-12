import { makeStyles } from "@material-ui/core"

export const useStyle = makeStyles((theme) => {
    return {
        container: {
            width: '100%',
            backgroundColor: 'white',
            margin: '0 0 5rem 0'
        },
        box: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '100px',
            padding: '2rem 0',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                display: 'block',
                textAlign: 'center'
            }
        },
        space: {
            [theme.breakpoints.down('sm')]: {
                margin: '0 0 3rem 0'
            }
        }
    }
})