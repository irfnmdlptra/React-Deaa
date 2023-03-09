import logo from './Styles/trns1.png';
import './Styles/Props.css';
import Introduction from './Introduction';
import Profile from './Profile';
import Footer from './Footer';
import MyButton from './MyButton';


const Props = () => {
  const Clicked = () => {
    alert('Berhasil')
  }

  const paragraf = () => {
    return (
    <>
    <h4>Mantap Jiwa</h4>
    <marquee>Gass Terus</marquee>
    <i>Cowsay Universe Cuy -d</i>
    </>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Profile/>
        <MyButton clicked={Clicked}/>
        <h2>Progres Nomor satu</h2>
        <p>Tidak Boleh Tidur Dijam Progres</p>
        <Introduction name="Uciha Sasuke"/>
        <Introduction name="Uzumaki Naruto"/>
        <Footer paragraf={paragraf}/>
      </header>
    </div>
  );
}

export default Props;
