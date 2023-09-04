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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, content) => {
  console.error('putDb not implemented');
  const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({id: id, content: content});
  const result = await request;
  console.log('🚀 - data saved to the database', result);

  // try {

  //   // Create a connection to the database database and version we want to use.
  //   const jateDB = await openDB('jate', 1);

  //   // Create a new transaction and specify the database and data privileges.
  //   const tx = jateDb.transaction('jate', 'readwrite');

  //   // Open up the desired object store.
  //   const store = tx.objectStore('jate');

  //   // Use the .put() method to update an existing record.
  //   const request = store.put(content);

  //   // Commit the transaction to complete the update.
  //   // await tx.done;

  //   const result = await request;
  //   console.log('Data updated in the jate database.', result);

  // } catch (error) {
  //   console.error('putDb not implemented', error)
  //   throw error;
  // }


};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;

  // try {

  //   // Create a connection to the database database and version we want to use.
  //   const jateDB = await openDB('jate', 1);

  //   // Create a new transaction and specify the database and data privileges.
  //   const tx = jateDB.transaction('jate', 'readonly');

  //   // Open up the desired object store.
  //   const store = tx.objectStore('jate');

  //   // Use the .getAll() method to get all data in the database.
  //   const request = store.getAll();

  //   // Get confirmation of the request.
  //   const result = await request;
  //   console.log('result.value', result);
  //   return result;


  // } catch (error) {
  //   console.error('getDb not implemented', error)
  //   throw error;
  // }

};

initdb();
