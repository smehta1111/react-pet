import "./Analytics.css"
import petlogo from "./assets/pet-logo.png"
export default function Analytics(props) {
    return(
        <>
        <img className="logo" src={petlogo} alt='logo'></img>
        <p className="title">Analytics</p>

        <div 
        className="Box1" 
        style={{ top: "261px", left: "281px", position: "absolute" }}>
            <div className="rectangle"></div>
                <p className="boxTitle" 
                style={{ top: "28px", left: "28px", position: "absolute" }}>
                Total Users 
                </p>
                <p className="boxMetric" 
                style={{ top: "93px", left: "28px", position: "absolute" }}>
                {props.users}
                </p>    
        </div>
        <div 
        className="Box2" 
        style={{ top: "261px", left: "581px", position: "absolute" }}>
            <div className="rectangle"></div>
                <p className="boxTitle" 
                style={{ top: "28px", left: "28px", position: "absolute" }}>
                Total Pets
                </p>
                <p className="boxMetric" 
                style={{ top: "93px", left: "28px", position: "absolute" }}>
                {props.pets}
                </p>    
        </div>
        <div 
        className="Box3" 
        style={{ top: "261px", left: "881px", position: "absolute" }}>
            <div className="rectangle"></div>
                <p className="boxTitle" 
                style={{ top: "28px", left: "28px", position: "absolute" }}>
                QRs Generated
                </p>
                <p className="boxMetric" 
                style={{ top: "93px", left: "28px", position: "absolute" }}>
                {props.qrs}
                </p>    
        </div>
        <div 
        className="Box4" 
        style={{ top: "526px", left: "281px", position: "absolute" }}>
            <div className="rectangle"></div>
                <p className="boxTitle" 
                style={{ top: "28px", left: "28px", position: "absolute" }}>
                Dogs 
                </p>
                <p className="boxMetric" 
                style={{ top: "93px", left: "28px", position: "absolute" }}>
                {props.dogs}
                </p>    
        </div>
        <div 
        className="Box5" 
        style={{ top: "526px", left: "581px", position: "absolute" }}>
            <div className="rectangle"></div>
                <p className="boxTitle" 
                style={{ top: "28px", left: "28px", position: "absolute" }}>
                Cats
                </p>
                <p className="boxMetric" 
                style={{ top: "93px", left: "28px", position: "absolute" }}>
                {props.cats}
                </p>    
        </div>
        <div 
        className="Box6" 
        style={{ top: "526px", left: "881px", position: "absolute" }}>
            <div className="rectangle"></div>
                <p className="boxTitle" 
                style={{ top: "28px", left: "28px", position: "absolute" }}>
                Others
                </p>
                <p className="boxMetric" 
                style={{ top: "93px", left: "28px", position: "absolute" }}>
                {props.others}
                </p>    
        </div>




        <footer>
            <div className="footerrectangle"></div>
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