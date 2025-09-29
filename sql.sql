CREATE TABLE guests (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  guest text,
  comment text
);
INSERT INTO guests (guest,comment ) VALUES 
( 'Bob' , 'Great amenities and helpfull staff'),
('Robert' , 'Great fun to be had great food and great athomsphere' ),
('Sam Addams' , 'Great  fun for the whole family' ),
( 'S Smith', 'Great array of things to see and do');

SELECT *FROM Guests