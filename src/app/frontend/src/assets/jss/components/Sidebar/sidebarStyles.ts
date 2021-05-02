import { makeStyles } from '@material-ui/core'

const useSidebarStyles = makeStyles(theme => ({
  container: {
    background: '#363740', 
    color: '#fff', 
    minHeight: '100vh', 
    padding: 0
  },
  titleWrapper: {
    padding: '3rem 4rem'
  },
  listItem: {
    padding: '1.5rem 4rem',
    '&:hover': {
      background: 'rgba(0,0,0,0.25)',
    }
  },
  listItemActive: {
    background: '#000'
  },
  listItemIcon: {
    color: '#fff'
  },
}));

export default useSidebarStyles;