CREATE DATABASE haberles_lucas;

USE haberles_lucas;

CREATE TABLE Libros (
    id INT NOT NULL AUTO_INCREMENT, 
    nombre VARCHAR(30),
    autor VARCHAR(30),
    categoria VARCHAR(30),
    anio_publicacion DATE,
    ISBN VARCHAR(13), 
    
    CONSTRAINT PK_Libro PRIMARY KEY(id)
); 



-- SELECT * FROM Libros 
-- where categoría IN ('Romance', 'Ficción');

-- ALTER TABLE Libros RENAME COLUMN categoría TO categoria;
