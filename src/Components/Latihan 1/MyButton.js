import './Styles/MyButton.css'
import Navbar from './Navbar';
const MyButton = (props) => {
  const NavText = 'Irfan Syahputra' 
  const NavHeading = 'Navigation Bar' 

  return (
    <>
      <Navbar NavText={NavText} NavHeading={NavHeading} />
      <div className="scene">
        <div className="cube">
          <span className="side top" onClick={() => props.clicked()}>Click Me!</span>
          <span className="side front">Hover</span>
        </div>
      </div>
    </>
  );
};

export default MyButton;
