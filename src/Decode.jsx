/* eslint-disable no-unused-vars */
import { useState } from "react";
import QrScanner from "qr-scanner";

const QRDecoder = ({ onDecode }) => {
  const [base64String, setBase64String] = useState("");
  const [decodedText, setDecodedText] = useState(null);

  const handleDecode = async () => {
    if (!base64String) {
      setDecodedText("Please enter a Base64 string.");
      return;
    }

    try {
      const img = new Image();
      img.src = `data:image/png;base64,${base64String}`;
      img.onload = async () => {
        try {
          const result = await QrScanner.scanImage(img);
          setDecodedText(result);
          onDecode(result); // Send decoded text to MainComponent
        } catch (error) {
          setDecodedText("Invalid QR code or failed to decode.");
        }
      };
    } catch (error) {
      setDecodedText("Error loading the image.");
    }
  };

  return (
    <div>
      <h2>QR Code Decoder</h2>
      <input
        type="text"
        placeholder="Enter Base64 QR Code"
        value={base64String}
        onChange={(e) => setBase64String(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <button onClick={handleDecode}>Decode</button>
      {decodedText && <p>Decoded Text: {decodedText}</p>}
    </div>
  );
};

export default QRDecoder;
