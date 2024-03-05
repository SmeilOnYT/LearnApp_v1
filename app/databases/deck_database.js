import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("deck_database.db");

const insertItem = (name) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO items (name) VALUES (?)',
      [name],
      () => console.log("Element erfolgreich eingefügt"),
      (error) => console.error("Fehler beim Einfügen des Elements:", error)
    );
  });
};

const getAllItems = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM items',
        [],
        (tx, result) => {
          resolve(result.rows._array);
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};

export { insertItem, getAllItems };
