import React, { useEffect, useState } from 'react';

function UserFetcher() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=5")  // 5 rastgele kullanıcı alıyoruz
      .then(response => response.json())
      .then(data => setUsers(data.results));  // results içindeki kullanıcıları alıyoruz
  };

  useEffect(() => {
    fetchData();
  }, []);  // Bileşen ilk render edildiğinde çalışır

  return users.length > 0 ? (
    <div>
      <h1>Data returned</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <h2>{user.name.first} {user.name.last}</h2>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <h1>Data pending</h1>  
  );
}

export default UserFetcher;
