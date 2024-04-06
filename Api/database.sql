use MediCare;
CREATE TABLE Users (
  user_id INT IDENTITY(1,1) PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  age INT,
  weight FLOAT,
  bmi FLOAT,
  blood_pressure VARCHAR(50),
  sugar_levels VARCHAR(50),
  created_at DATETIME DEFAULT GETDATE(),
  updated_at DATETIME DEFAULT GETDATE()
);

CREATE TABLE Doctors (
  doctor_id INT IDENTITY(1,1) PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  specialization VARCHAR(255),
  experience_years INT,
  qualification VARCHAR(255),
  created_at DATETIME DEFAULT GETDATE(),
  updated_at DATETIME DEFAULT GETDATE()
);

CREATE TABLE Messages (
  message_id INT IDENTITY(1,1) PRIMARY KEY,
  sender_id INT NOT NULL,
  receiver_id INT NOT NULL,
  message_text VARCHAR(1000) NOT NULL,
  sent_at DATETIME DEFAULT GETDATE(),
  FOREIGN KEY (sender_id) REFERENCES Users(user_id),
  FOREIGN KEY (receiver_id) REFERENCES Doctors(doctor_id)
);

select * from Users
select * from Doctors