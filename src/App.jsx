import { useState } from "react";
import QRDecoder from "./Decode";
import Information from "./Information";

export default function MainComponent() {
  const [petDetails, setPetDetails] = useState(null);
  const [showInformation, setShowInformation] = useState(false);

  // Function to parse the decoded text into an object
  const parseDecodedText = (text) => {
    const regex = /Pet ID:\s*(.+)\s*Owner:\s*(.+)\s*Phone:\s*(.+)\s*Pet Name:\s*(.+)\s*Breed:\s*(.+)\s*Color:\s*(.+)\s*Address:\s*(.+)/;
    const match = text.match(regex);

    if (match) {
      return {
        name: match[4],
        breed: match[5],
        color: match[6],
        owner: {
          name: match[2],
          address: match[7],
          contact: match[3],
        },
      };
    }

    return null;
  };

  return (
    <div>
      {!showInformation ? (
        <QRDecoder
          onDecode={(text) => {
            const parsedData = parseDecodedText(text);
            if (parsedData) {
              setPetDetails(parsedData);
              setShowInformation(true);
            }
          }}
        />
      ) : (
        <Information {...petDetails} />
      )}
    </div>
  );
}
