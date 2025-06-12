
const { Client } = require('pg');
const conn = () => {
    const connection = new Client({
        user: 'postgres',
        host: 'to_do_db.onrender.com',
        database: 'to_do_db',
        password: 'roses',
        port: 5432,
    });
    
        // Connection successful
    console.log('Connected to the database successfully');
    return connection;
  }
const registerUser = async(firstName, lastName, email, password) =>{
    // Variable to hold the database connection
   
    const connection = conn();
    // Connect to the database
    await connection.connect().then(() => {
        console.log('Database connection established');
    }).catch(err => {
        console.error('Database connection error:', err);
});
    // Check if the user already exists
    const checkUserQuery = 'SELECT * FROM register WHERE email = $1 AND psw = $2';
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
    const insertUserQuery = 'INSERT INTO register(first_name, last_name, email, register_id, psw) VALUES($1, $2, $3, $4, $5) RETURNING *';
    // Prepare the values for the query
    const values = [firstName, lastName, email, Math.floor(Math.random() * 1000000), password];
    // Connect to the database
    await connection.connect().then(() => {
        console.log('Database connection established');
    }).catch(err => {
        console.error('Database connection error:', err);
    });
    // Execute the query to insert the user data
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
    // Return true if the user was registered successfully

    return res.rowCount > 0;
  };
  
const loginUser = async(email, password) => {

  const text = 'SELECT * FROM register WHERE email = $1 AND psw = $2';
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
