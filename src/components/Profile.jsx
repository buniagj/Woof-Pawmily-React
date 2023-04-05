import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <h1>My Profile</h1>
        </div>
        <div className="profile-body">
          <div className="profile-details">
            <h2>Pawsonal Information</h2>
            <div className="personal-info">
              <div className="profile-photo">
                <img src="/images/img-10.jpg" alt="John Doe" />
              </div>
              <div className="profile-info">
                <table>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>John Doe</td>
                    </tr>
                    <tr>
                      <td>Age:</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>johndoe@example.com</td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td>555-555-5555</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
            <h2 className="pet-details">Pet's Information</h2>
            <div className="pet-info">
              <div className="profile-photo">
                <img src="/images/img-11.jpg" alt="Sasha" />
              </div>
              <div className="profile-info">
                <table>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>Sasha</td>
                    </tr>
                    <tr>
                      <td>Breed:</td>
                      <td>Boodle</td>
                    </tr>
                    <tr>
                      <td>Age:</td>
                      <td>8 months</td>
                    </tr>
                    <tr>
                      <td>Allergy:</td>
                      <td>None</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="profile-bookings">
            <h2>Recent Transactions</h2>
            <div>
              <p>Pet Grooming</p>
              <p>Date: 04/01/2023</p>
              <p>Time: 10:00 AM</p>
              <p>Cost: $50</p>
            </div>
            <div>
              <p>General Checkup</p>
              <p>Date: 03/02/2023</p>
              <p>Time: 2:00 PM</p>
              <p>Cost: $250</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;










// USE THIS WHEN BACKEND IS AVAILABLE

// import React from 'react';
// import './Profile.css';

// const Profile = ({ user }) => {
//   return (
//     <div className="profile-container">
//       <h1 className="profile-heading">My Profile</h1>
//       <div className="profile-card">
//         <div className="profile-card-content">
//           <div className="profile-card-field">
//             <span>Name:</span>
//             <span>{user.name}</span>
//           </div>
//           <div className="profile-card-field">
//             <span>Email:</span>
//             <span>{user.email}</span>
//           </div>
//           <div className="profile-card-field">
//             <span>Phone:</span>
//             <span>{user.phone}</span>
//           </div>
//           <h2 className="profile-subheading">My Bookings</h2>
//           {user.bookings.map((booking) => (
//             <div key={booking.id} className="profile-booking">
//               <div className="profile-booking-field">
//                 <span>Flight:</span>
//                 <span>{booking.flight}</span>
//               </div>
//               <div className="profile-booking-field">
//                 <span>Date:</span>
//                 <span>{booking.date}</span>
//               </div>
//               <div className="profile-booking-field">
//                 <span>Passengers:</span>
//                 <span>{booking.passengers}</span>
//               </div>
//               <div className="profile-booking-field">
//                 <span>Status:</span>
//                 <span>{booking.status}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;


// // import React from 'react';
// // import './Profile.css';

// // const Profile = ({ user }) => {
// //   return (
// //     <div className="profile-container">
// //       <div className="profile-card">
// //         <div className="profile-header">
// //           <h1>My Profile</h1>
// //         </div>
// //         <div className="profile-body">
// //           <div className="profile-details">
// //             <h2>Personal Details</h2>
// //             <p>Name: {user.name}</p>
// //             <p>Email: {user.email}</p>
// //             <p>Phone: {user.phone}</p>
// //           </div>
// //           <div className="profile-bookings">
// //             <h2>My Bookings</h2>
// //             {user.bookings.map((booking) => (
// //               <div key={booking.id} className="booking-card">
// //                 <p>Flight: {booking.flight}</p>
// //                 <p>Date: {booking.date}</p>
// //                 <p>Passengers: {booking.passengers}</p>
// //                 <p>Status: {booking.status}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Profile;
