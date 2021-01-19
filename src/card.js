import React from "react";

export default function Card({ record }) {
    const {PaymentMethod, Latitude, Longitude, LastLogin, CreditCardType, CreditCardNumber, MacAddress, DomainName, FirstName, Gender, Email, PhoneNumber, LastName}=record
  return (
    <div className="card">
      <div className="contact">
        <h3>
          {FirstName} {LastName}
        </h3>
        <i>{Email}</i>
        <i>{PhoneNumber}</i>
      </div>
      <table>
        <tr>
          <th>Domain name</th>
          <td>{DomainName}</td>
          <th>Mac address</th>
          <td>{MacAddress}</td>
        </tr>

        <tr>
          <th>CreditCardNumber</th>
          <td>{CreditCardNumber}</td>
          <th>creditCardType</th>
          <td>{CreditCardType}</td>
        </tr>
        <tr></tr>
        <tr>
          <th>Gender</th>
          <td>{Gender}</td>
          <th>Last login</th>
          <td>{LastLogin}</td>
        </tr>
        <tr>
          <th>latitude</th>
          <td>{Latitude}</td>
          <th>Longitude</th>
          <td>{Longitude}</td>
              </tr>
              <th>Payment Method</th>
        <td>{PaymentMethod}</td>
      </table>

      <div></div>
    </div>
  );
}
