import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';



const SearchButton = () => {
    return (
        <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
            >
              <SearchIcon />
        </IconButton>
    )
}

export default SearchButton