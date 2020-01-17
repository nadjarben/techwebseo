import Button from '@material-ui/core/Button'

const PackButton = ({ title, subtitle }) => {
    return (
        <Button variant="contained" className="pack-btn">
            {title}
            <br/>
            {subtitle}
        </Button>
    )
}

export default PackButton