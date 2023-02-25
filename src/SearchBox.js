import './SearchBox.css';
function SearchBox() {
    return(
        <div className="searchbox">
            <form>
                <input type="text"placeholder="Search..." />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
    
}
export default SearchBox;