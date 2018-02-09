import { idb } from '../../db/idb';

export class UserService {

  get(email) {
    return idb.then(db => {
      return new Promise((resolve, reject) => {
        const request = db.transaction(['users'], 'readonly')
          .objectStore('users')
          .get(email);

        request.onsuccess = evt => {
          resolve(evt.target.result)
        }

        request.onerror = evt => {
          reject(evt.target.error);
        }
      });
    }, err => Promise.reject(err));
  }

  save(user) {
    return idb.then(db => {
      return new Promise((resolve, reject) => {
        const request = db.transaction(['users'], 'readwrite')
          .objectStore('users')
          .add(user);

        request.onsuccess = evt => {
          resolve(evt.target.result)
        }

        request.onerror = evt => {
          reject(evt.target.error);
        }
      });
    }, err => Promise.reject(err));
  }

  update(user) {
    return idb.then(db => {
      return new Promise((resolve, reject) => {
        const request = db.transaction(['users'], 'readwrite')
          .objectStore('users')
          .put(user);

        request.onsuccess = evt => {
          resolve(evt.target.result)
        }

        request.onerror = evt => {
          reject(evt.target.error);
        }
      });
    }, err => Promise.reject(err));
  }

  delete(email) {
    return idb.then(db => {
      return new Promise((resolve, reject) => {
        const request = db.transaction(['users'], 'readwrite')
          .objectStore('users')
          .delete(email);

        request.onsuccess = evt => {
          resolve(evt.target.result)
        }

        request.onerror = evt => {
          reject(evt.target.error);
        }
      });
    }, err => Promise.reject(err));
  }

  getAll(query, count) {
    return idb.then(db => {
      return new Promise((resolve, reject) => {
        const request = db.transaction(['users'], 'readonly')
          .objectStore('users')
          .getAll(query, count);

        request.onsuccess = evt => {
          resolve(evt.target.result);
        };

        request.onerror = evt => {
          reject(evt.target.error);
        }
      });
    }, err => Promise.reject(err));
  }
}