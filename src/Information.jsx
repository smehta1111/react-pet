import petlogo from "./assets/pet-logo.png"
import "./Information.css"
import dogImage from "./assets/DogImage.png"
export default function Information(props) {
  return(
    <>
      <img className="logo" src={petlogo} alt="petlogo"></img>
      <p className="mainText">Information about the Pet</p>

      <div className="infoCardBg"></div>

      <img className="dogImage" src={dogImage} alt="doggo"></img>
      <p className="dogName">{props.name}</p>
      <button className="dogbreed">{props.breed}</button>
      <button className="dogcolor">{props.color}</button>
      <p className="owner">
        Owner name : {props.owner.name} <br></br> <br></br> 
        Owner address : {props.owner.address} <br></br> <br></br>
        Owner phone : {props.owner.contact}
      </p>

      <button className="getInTouch"> Get in Touch</button>


      <footer>
        <div className="rectangle"></div>
        <p className="footerHeading">Pet-QR</p>
        <p className ="tagline">Stay Connected</p>
        <p className="footerHelp">Help</p>
        <p className="helpTerms">Terms and Conditions</p>
        <p className="helpPrivacy">Privacy Policy</p>
        <p className="footerContact">Contact Us</p>
        <p className="footerEmail">info@pet-qr.com</p>
      </footer>
    </>
  )
}