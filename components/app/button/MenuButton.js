import Button from '@material-ui/core/Button'

const MenuButton = ({ title }) => {
    return (
        <Button variant="contained" className="menu-btn" style={{width:'90%', height:'80px'}}>
            {title}
        </Button>
    )
}

export default MenuButton