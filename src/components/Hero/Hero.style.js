import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(theme => {
    return {
        hero_container: {
            margin: '6rem auto 0 auto',
            width: '90%',
            
        },
        hero: {
            display: 'flex',
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
            }
        },
        img_container: {
            width: '40%',
            '& img': {
                width: '100%',
                borderRadius: '50%'
            },
            [theme.breakpoints.down('sm')]: {
                width: '80%',
                margin: '0 auto',
                order: 1
            }
        },
        herotext: {
            width: '35%',
            '& h3': {
                fontWeight: '900',
                [theme.breakpoints.up('sm')]: {
                    fontWeight: '700'
                }
            },
            '& h2': {
                fontWeight: '900',
                [theme.breakpoints.down('sm')]: {
                    fontWeight: '700'
                }
            },
            [theme.breakpoints.down('sm')]: {
                width: '90%',
                order: 2,
                margin: '0 auto',
                padding: '.7rem 0 0 0'
            }
        },
        typical: {
            color: '#5090D3'
        },
        comment: {
            position: 'fixed',
            top: '70%',
            width: '100%',
            zIndex: 100,
           
        },
        commentIcon: {
            fontSize: '20px',
            backgroundColor: '#0A1929',
            color: 'white',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
})