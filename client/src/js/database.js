import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

/*
  We need to add some code below which will take updated content and save it to IndexedDB.
*/
export const putDb = async (content) => {
  // First, create a variable, and set it to asyncronously await the opening of the database. Replace the items in all caps
  const DB_VAR = await openDB('jate', 1);

  // Now create a variable for the transaction
  const TX_VAR = jateDb.transaction('jate', 'readwrite');

  // Now create a variable for the store
  const STORE_VAR = tx.objectStore('jate');

  // Now create a variable named "request" and have it perform the update
  const request = STORE_VAR({ id: 1, value: content });

  const result = await request;
  console.log('🚀 - data saved to the database', result.value);
};

/*
  We need to add some code below which will get all content from IndexedDB.
*/
export const getDb = async () => {
  const DB_VAR = await openDB("jate", 1);

  const TX_VAR = DB_VAR.transaction("jate", "readwrite");

  const STORE_VAR = TX_VAR.objectStore("jate");

  const request = STORE_VAR.get(1);
  const result = await request;
  result
    ? console.log('🚀 - data retrieved from the database', result.value)
    : console.log('🚀 - data not found in the database');
  // Check if a variable is defined and if it is, return it. See MDN Docs on Optional Chaining (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
  return result?.value;
};

initdb();
