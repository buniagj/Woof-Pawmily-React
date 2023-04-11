import React, { useState, useEffect } from "react";
import "./Profile.css";
import { auth, firestore } from "../firebase";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [petData, setPetData] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [userPhoto, setUserPhoto] = useState(null);
  const [petPhoto, setPetPhoto] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      const userRef = firestore.collection("users").doc(auth.currentUser.uid);
      const userDoc = await userRef.get();
      setUserData(userDoc.data());
    }

    if (auth.currentUser) {
      fetchUserData().catch((error) => {
        setErrorMessage(errorMessage); // Display error message to user
      });
    }
  }, []);

  useEffect(() => {
    async function fetchPetData() {
      const petsRef = firestore.collection("pets").where("ownerId", "==", auth.currentUser.uid);
      const petDocs = await petsRef.get();
      setPetData(petDocs.docs.map((doc) => doc.data()));
    }

    if (auth.currentUser) {
      fetchPetData().catch((error) => {
        setErrorMessage(error.message); // Display error message to user
      });
    }
  }, []);

  useEffect(() => {
    async function fetchTransactions() {
      const transactionsRef = firestore
        .collection("transactions")
        .where("userId", "==", auth.currentUser.uid)
        .orderBy("date", "desc")
        .limit(5);
      const transactionDocs = await transactionsRef.get();
      setTransactions(transactionDocs.docs.map((doc) => doc.data()));
    }

    if (auth.currentUser) {
      fetchTransactions().catch((error) => {
        setErrorMessage(error.message); // Display error message to user
      });
    }
  }, []);

  function handleAddPet() {
    // Handle adding a new pet
  }

  const handleUserPhotoChange = (e) => {
    setUserPhoto(URL.createObjectURL(e.target.files[0]));
    setPetPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handlePetPhotoChange = (e, index) => {
    let newPetData = [...petData];
    newPetData[index].photo = URL.createObjectURL(e.target.files[0]);
    setPetData(newPetData);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <h1>My Profile</h1>
        </div>
        {userData && (
          <div className="profile-body">
            <div className="profile-details">
              <h2>Pawsonal Information</h2>
              <div className="personal-info">
                <div className="profile-photo">
                  {userPhoto ? (
                    <img src={userPhoto} alt={userData.name} />
                  ) : (
                    <img src="/images/img-10.jpg" alt={userData.name} />
                  )}
                  <label className="photo-upload">
                    <input type="file" onChange={handleUserPhotoChange} />
                    Upload Photo
                  </label>
                </div>
                <div className="profile-info">
                  <table>
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td>{userData.name}</td>
                      </tr>
                      <tr>
                        <td>Email:</td>
                        <td>{userData.email}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="profile-details">
              <h2>My Pets</h2>
              <div className="pet-info">
                {petData && petData.length > 0 ? (
                  <div className="pet-list">
                    {petData.map((pet, index) => (
                      <div className="pet-card" key={index}>
                        <div className="pet-photo">
                          {petPhoto ? (
                            <img src={petPhoto} alt={pet.name} />
                          ) : (
                            <img src="/images/img-10.jpg" alt={pet.name} />
                          )}
                          <label className="photo-upload">
                            <input type="file" onChange={(e) => handlePetPhotoChange(e, index)} />
                            Upload Photo
                          </label>
                        </div>
                        <div className="pet-info">
                          <table>
                            <tbody>
                              <tr>
                                <td>Name:</td>
                                <td>{pet.name}</td>
                              </tr>
                              <tr>
                                <td>Species:</td>
                                <td>{pet.species}</td>
                              </tr>
                              <tr>
                                <td>Breed:</td>
                                <td>{pet.breed}</td>
                              </tr>
                              <tr>
                                <td>Age:</td>
                                <td>{pet.age}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>No pets found.</div>
                )}
              </div>
            </div>
            <div className="profile-bookings">
            <h2>Recent Transactions</h2>
            {transactions.map((transaction, index) => (
              <div key={index}>
                <p>Service: {transaction.service}</p>
                <p>Date: {transaction.date}</p>
                <p>Time: {transaction.time}</p>
                <p>Cost: {transaction.cost}</p>
              </div>
            ))}
            <button onClick={handleAddTransaction}>Add Transaction</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
