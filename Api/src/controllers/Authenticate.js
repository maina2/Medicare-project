import sql from 'mssql';
import config from '../db/config.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input('email', sql.VarChar, email)
      .query('SELECT * FROM Users WHERE email = @email');

    const user = result.recordset[0];
    if (user) {
      res.status(409).json({ message: 'User already exists' });
    } else {
      await pool
        .request()
        .input('firstname', sql.VarChar, firstname)
        .input('lastname', sql.VarChar, lastname)
        .input('email', sql.VarChar, email)
        .input('hashedPassword', sql.VarChar, hashedPassword)
        .query(
          'INSERT INTO Users (firstname, lastname, email, password) VALUES (@firstname, @lastname, @email, @hashedPassword)'
        );

      res.status(200).send({ message: 'User created successfully' });
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while creating the user' });
  } finally {
    sql.close();
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input('email', sql.VarChar, email)
      .query('SELECT * FROM Users WHERE email = @email');

    const user = result.recordset[0];
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ message: 'Invalid password' });
      return;
    }

    // Optionally, you can remove the password field from the response
    delete user.password;

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  } finally {
    sql.close();
  }
};

export const registerDoctor = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input('email', sql.VarChar, email)
      .query('SELECT * FROM Doctors WHERE email = @email');

    const existingDoctor = result.recordset[0];
    if (existingDoctor) {
      res.status(409).json({ message: 'Doctor already exists' });
      return;
    }

    await pool
      .request()
      .input('firstname', sql.VarChar, firstname)
      .input('lastname', sql.VarChar, lastname)
      .input('email', sql.VarChar, email)
      .input('hashedPassword', sql.VarChar, hashedPassword)
      .query(
        'INSERT INTO Doctors (first_name, last_name, email, password) VALUES (@firstname, @lastname, @email, @hashedPassword)'
      );

    res.status(200).json({ message: 'Doctor registered successfully' });
  } catch (error) {
    console.error('Error registering doctor:', error);
    res.status(500).json({
      error: 'An error occurred while registering the doctor',
    });
  } finally {
    sql.close();
  }
};

export const loginDoctor = async (req, res) => {
  const { email, password } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input('email', sql.VarChar, email)
      .query('SELECT * FROM Doctors WHERE email = @email');

    const user = result.recordset[0];
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ message: 'Invalid password' });
      return;
    }

    // Optionally, you can remove the password field from the response
    delete user.password;

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  } finally {
    sql.close();
  }
};