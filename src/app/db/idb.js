
const idbPromise = new Promise((resolve, reject) => {

  const DBOpenRequest = indexedDB.open('easynvest', 1);

  DBOpenRequest.onsuccess = event => {
    const db = DBOpenRequest.result;
    const request = db.transaction(['users'], 'readonly').objectStore('users').getAll();

    request.onsuccess = evt => {
      if (evt.target.result.length) {
        resolve(db);
      } else {
        fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users')
          .then(res => res.json()).then(users => {
            const request = db.transaction(['users'], 'readwrite').objectStore('users');
            return Promise.all(users.map(user => request.add(user)))
              .then(() => resolve(db))
              .catch(err => reject(err));
          });
      }
    }
  }

  DBOpenRequest.onerror = event => {
    reject("Database error: " + event.target.errorCode)
  };

  DBOpenRequest.onupgradeneeded = event => {
    const db = event.target.result;
    db.createObjectStore("users", { keyPath: 'email' });
  };

});

export { idbPromise as idb };