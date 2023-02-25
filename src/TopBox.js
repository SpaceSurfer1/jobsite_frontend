import SearchBox from './SearchBox';
import SiteNameBox from './SiteNameBox';
import './TopBox.css';
function TopBox() {
    return(
        <div className="topbox">
            <SiteNameBox></SiteNameBox>
            <SearchBox></SearchBox>
        </div>
    );
    
}
export default TopBox;