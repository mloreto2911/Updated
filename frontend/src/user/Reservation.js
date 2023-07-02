import Sidebar from "../components/User/Sidebar"
import { useState } from "react";

import Upload from "../assets/User.png";



export const Reservation = () => {

  const [validIdPhoto, setValidIdPhoto] = useState(null);
  const [fileSizeError, setFileSizeError] = useState(false);
  const [fileImageError, setFileImageError] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = async (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);

    const file = event.target.files[0]; // Get the uploaded file
    setUploadError(""); // Clear any previous upload error

    // Perform file size validation
    const fileSizeInBytes = file.size;
    const fileSizeInMB = fileSizeInBytes / (1024 * 1024); // Convert bytes to MB

    if (file.type.startsWith("image/")) {
      if (fileSizeInMB <= 1) {
        setValidIdPhoto(file); // Store the file in state
        setFileSizeError(false); // Reset the file size error state
        setFileInputValue(event.target.value); // Store the file input value in state
      } else {
        setFileSizeError(true); // Set the file size error state to true
        setTimeout(() => {
          setFileSizeError(false); // Reset the file size error state after a timeout
        }, 3000);
        setFileInputValue("");
        setValidIdPhoto("");
      }
    } else {
      setFileImageError(true); // Set the image error state to true
      setTimeout(() => {
        setFileImageError(false); // Reset the image error state after a timeout
      }, 3000); // Adjust the timeout duration as needed (3000 milliseconds = 3 seconds)
      // Do not update the file input value when there is an error
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0]; // Get the dropped file

    if (file.type.startsWith("image/")) {
      const fileSizeInBytes = file.size;
      const fileSizeInMB = fileSizeInBytes / (1024 * 1024); // Convert bytes to MB

      if (fileSizeInMB <= 1) {
        setValidIdPhoto(file); // Store the dropped file in state
        setFileSizeError(false); // Reset the file size error state
      } else {
        setFileSizeError(true); // Set the file size error state to true
        setTimeout(() => {
          setFileSizeError(false); // Reset the file size error state after a timeout
        }, 3000); // Adjust the timeout duration as needed (3000 milliseconds = 3 seconds)
      }
    } else {
      setFileImageError(true); // Set the image error state to true
      setTimeout(() => {
        setFileImageError(false); // Reset the image error state after a timeout
      }, 3000); // Adjust the timeout duration as needed (3000 milliseconds = 3 seconds)
    }
  };

  // Perform file size validation
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddlename] = useState("");
  const [suffix, setSuffix] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("Choose Gender");
  const [genderSubmitted, setGenderSubmitted] = useState(false);
  const [genderErrorMessage, setGenderErrorMessage] = useState("");
  const [age, setAge] = useState("");
  const [civilStatus, setCivilStatus] = useState("Choose Status");
  const [civilStatusSubmitted, setCivilStatusSubmitted] = useState(false);
  const [civilStatusErrorMessage, setCivilStatusErrorMessage] = useState("");
  const [nationality, setNationality] = useState("");
  const [building, setBuilding] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [uploadError, setUploadError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [fileInputValue, setFileInputValue] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [idNumberError, setIdNumberError] = useState("");
  const [validID, setValidID] = useState("ID Type (e.g TIN)");
  const [validIDSubmitted, setValidIDSubmitted] = useState(false);
  const [validIDErrorMessage, setValidIDErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleMiddlename = (event) => {
    setMiddlename(event.target.value);
  };
  const handleSuffix = (event) => {
    setSuffix(event.target.value);
  };
  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    setGenderErrorMessage("");
  };
  const handleCivilStatusChange = (event) => {
    setCivilStatus(event.target.value);
    setCivilStatusErrorMessage("");
  };
  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };
  const handleBuildingChange = (event) => {
    setBuilding(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
  };
  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };
  const handleMunicipalityChange = (event) => {
    setMunicipality(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleValidIDChange = (event) => {
    setValidID(event.target.value);
    setValidIDErrorMessage("");
  };

  const validateIDNumber = () => {
    if (!idNumber.trim()) {
      setIdNumberError("ID Number is required");
      setValidIDSubmitted(false);
    } else if (validID === "SSS") {
      if (!/^\d{2}-\d{7}-\d$/.test(idNumber)) {
        setIdNumberError("Invalid SSS ID format");
        setValidIDSubmitted(false);
      } else {
        setIdNumberError("");
        setValidIDSubmitted(true);
      }
    } else if (validID === "Philhealth") {
      if (!/^\d{2}-\d{9}-\d$/.test(idNumber)) {
        setIdNumberError("Invalid Philhealth ID format");
        setValidIDSubmitted(false);
      } else {
        setIdNumberError("");
        setValidIDSubmitted(true);
      }
    } else if (validID === "TIN") {
      if (!/^\d{3}-\d{3}-\d{3}-\d{3}/.test(idNumber)) {
        setIdNumberError("Invalid TIN ID format");
        setValidIDSubmitted(false);
      } else {
        setIdNumberError("");
        setValidIDSubmitted(true);
      }
    } else {
      setIdNumberError("");
      setValidIDSubmitted(false);
    }
  };


  return (
    <div>
        <div className="bg-shade py-28">
          <div className="container1">

            <div className="flex bg-white">
              <div className="basis-[20%]">
              <Sidebar />

              </div>
              

            </div>
          </div>
        </div>
    </div>
  )
}
