
const { Client } = require('pg');
const conn = () => {
    const connection = new Client({
        user: 'todo_db_7xkt_user',
        host: 'dpg-d15hpv63jp1c73ftsn70-a',
        database: 'todo_db_7xkt',
        password: 'Wal3Kx1oKFFlpfH8IS3bA1nfPaxyj94t',
        port: 5432,
    });
    
        // Connection successful
    console.log('Connected to the database successfully');
    
    return connection;
  }


 const registerUser = async(firstName, lastName, email, password) =>{
   const createTableQuery = `
CREATE TABLE IF NOT EXISTS registration (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);
`;
conn().query(createTableQuery)
  .then(async () => {
      
      console.log('✅ Table checked/created')
                   const connection = conn();
    // Connect to the database
    await connection.connect().then(() => {
        console.log('Database connection established');
    }).catch(err => {
        console.error('Database connection error:', err);
});
 
    // Check if the user already exists
    const checkUserQuery = 'SELECT * FROM registration WHERE email = $1 AND password = $2';
    // Prepare the values for the query
    const checkValues = [email, password];
    // Execute the query to check if the user exists

    let res = await connection.query(checkUserQuery, checkValues);
    // Check if the user already exists
    if (res.rowCount > 0) {
        console.log('User already exists:', res.rows[0]);
        // Close the database connection
        connection.end();
        console.log('Database connection closed');
        return false; // User already exists
    }
   


                console.log('User does not exist, proceeding with registration');
    // If the user does not exist, insert the new user
    const insertUserQuery = 'INSERT INTO registration(first_name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING *';
    // Prepare the values for the query
    const values = [firstName, lastName, email,  password];
    // Connect to the database
   
  res = await connection.query(insertUserQuery, values);
    // Close the database connection
    connection.end();
    console.log('Database connection closed');
    // Check if the insertion was successful
    if (res.rowCount > 0) {
        console.log('User registered successfully:', res.rows[0]);
    } else {
        console.log('User registration failed');
    }

    return res.rowCount > 0;
    })
  .catch(err => console.error('❌ Table creation error:', err));

    
  };
  
const loginUser = async(email, password) => {
 
  const text = 'SELECT * FROM registration WHERE email = $1 AND password = $2';
  const values = [email, password];
    // Connect to the database
    
    const connection = conn();
    await connection.connect().then(() => {
        console.log('Database connection established');
    }).catch(err => {
        console.error('Database connection error:', err);
    });

    // Execute the query to check if the user exists
    const res = await connection.query(text, values);
    // Close the database connection
    connection.end();
    console.log('Database connection closed');
    // Check if the user exists



  return res.rows[0] ; // Return user data if found, otherwise null

}
module.exports = {registerUser,loginUser};
