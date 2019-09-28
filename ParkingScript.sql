CREATE TABLE Parking
(Time TIME NOT NULL, 
LocationLO FLOAT NOT NULL, 
LocationLA FLOAT NOT NULL, 
PRIMARY KEY (Time, LocationLO, LocationLA));

SELECT * FROM Parking;

DROP TABLE Parking;

