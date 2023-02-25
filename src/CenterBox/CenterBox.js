import './CenterBox.css';
import LeftBox from './LeftBox';
import MiddleBox from './MiddleBox';
import RightBox from './RightBox';
function CenterBox() {
    return(
        <div className="centerbox">
            <LeftBox></LeftBox>
            <MiddleBox></MiddleBox>
            <RightBox></RightBox>
        </div>
    );
    
}
export default CenterBox;