# Probar el CRUD
## Crear tabla person
1. Copiar y pegar [tabla person](https://github.com/jlsuh/crud-poc/blob/main/src/main/resources/db/person_schema.sql) en MySQL Shell
2. Opcional: Insertar [datos iniciales](https://github.com/jlsuh/crud-poc/blob/main/src/main/resources/db/person_data.sql)

## Ejecutar Spring Boot
```bash
# en /crud-poc
$ mvn install && mvn spring-boot:run
```

## Ejecutar Front
```bash
# en /frontend
$ npm start
```

# SQL
## Tipos de consultas
---
### DDL (Data Definition Language)
- Cambia la estructura de la tabla: crear, eliminar, alterar, etc.
- Todos los comandos de DDL son auto-committed (guardan en forma permanente todos los cambios en la DB).

#### CREATE
Crear una nueva tabla en la DB.

```sql
CREATE TABLE person (
    id         BIGINT       NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name  VARCHAR(100) NOT NULL,
    age        TINYINT      NOT NULL,
    PRIMARY KEY (id)
);
```

![image](https://user-images.githubusercontent.com/38252227/189722705-2e1e3db3-5696-448b-90ef-9afde91771b0.png)

#### ALTER
Alterar la estructura de la DB. El cambio puede ser debido al deseo de modificar las características de un atributo existente, o en su defecto añadir un nuevo atributo.

```sql
ALTER TABLE person ADD(address VARCHAR(100));
ALTER TABLE person MODIFY COLUMN address VARCHAR(100) NOT NULL;
```

![image](https://user-images.githubusercontent.com/38252227/189718495-ddacb745-013b-4cb7-8000-51d803dafdbc.png)

![image](https://user-images.githubusercontent.com/38252227/189719054-13581c69-acab-4dd8-97f3-655ecf4df18c.png)

#### TRUNCATE
Empleado para eliminar todos los registros de una tabla y liberar el espacio de almacenamiento contenido por la tabla.

```sql
TRUNCATE TABLE person;
```

![image](https://user-images.githubusercontent.com/38252227/189720352-63e7080c-626e-4290-8a82-76e83bf3de81.png)

#### DROP
Empleado para eliminar tanto la estructura como los registros de la tabla.

```sql
DROP TABLE person;
```

![image](https://user-images.githubusercontent.com/38252227/189720828-28610d1b-ae20-4f1a-9e6a-3bbf6c3c1eab.png)

---

### DML (Data Manipulation Language)
- Modifican la DB. Responsables de todo tipo de cambios en la DB.
- Todos los comandos de DML no son auto-committed (no pueden en forma permanente guardar los cambios en la DB). Pueden ser Rollbackeados.

#### INSERT
Empleado para insertar datos en forma de registro de una tabla.

```sql
INSERT INTO person (first_name, last_name, age)
VALUES ('John', 'Doe', 23)
     , ('Pepe', 'Argento', 45)
     , ('Moni', 'Argento', 32)
;
```

![image](https://user-images.githubusercontent.com/38252227/189721935-eedf798f-7e25-458a-9630-f1121bd7b514.png)

#### UPDATE
Empleado para actualizar o modificar el valor de una columna en la tabla.

```sql
UPDATE person SET first_name="Moni" WHERE id="3";
```

![image](https://user-images.githubusercontent.com/38252227/189722420-509dc8a5-bab5-46af-90bc-0cdc45b13373.png)

#### DELETE
Empleado para remover 1 o más filas de una tabla.

```sql
DELETE FROM person WHERE id="2";
DELETE FROM person WHERE first_name IN ("Moni", "John");
```

![image](https://user-images.githubusercontent.com/38252227/189723140-6cfe4043-11df-4456-acdb-4f08b05484c9.png)

![image](https://user-images.githubusercontent.com/38252227/189723887-18841ef1-fd86-4d02-859e-9e3b0020fbad.png)

---

### DCL (Data Control Language)
Los comandos DCL son empleados para otorgar y revocar privilegios de cualquier usuario de la DB.

#### GRANT
Empleado para otorgar privilegios a un usuario sobre una cierta DB.

Admin:

```sql
CREATE USER 'js'@'localhost' IDENTIFIED BY 'root';
GRANT SELECT ON *.* TO 'js'@'localhost';
```

![image](https://user-images.githubusercontent.com/38252227/189725397-1b9571bc-128a-4938-a411-74b3b4c75b39.png)

User:

![image](https://user-images.githubusercontent.com/38252227/189725741-9bac56f0-d9cb-4fe6-abc2-0ffcffce0252.png)

![image](https://user-images.githubusercontent.com/38252227/189725956-2351bef5-6299-4473-9bb7-2d3667d81d9b.png)

#### REVOKE
Empleado para revocar privilegios de accesos a un cierto usuario.

Admin:

```sql
REVOKE SELECT ON *.* FROM 'js'@'localhost';
DROP USER 'js'@'localhost';
```

![image](https://user-images.githubusercontent.com/38252227/189726410-a91247c9-0a86-40d6-8510-86877eed2976.png)

![image](https://user-images.githubusercontent.com/38252227/189727033-619cd744-e45d-4774-b604-afb183af7e75.png)

---

### TCL (Transaction Control Language)
- Los comandos TCL **solamente** pueden ser empleados con comandos DML, tales como INSERT, DELETE y UPDATE.
- Estas operaciones son automáticamente committeadas en la DB por lo que no pueden ser empleadas en momento de creación o eliminación de tablas.

#### COMMIT
Empleado para guardar todas las transacciones en la DB.

#### ROLLBACK
Empleado para deshacer transacciones que no todavía no han sido almacenados en la DB.

```sql
CREATE DATABASE IF NOT EXISTS crud_poc;
USE crud_poc;
DROP TABLE IF EXISTS person;
CREATE TABLE person (
    id         BIGINT       NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name  VARCHAR(100) NOT NULL,
    age        TINYINT      NOT NULL,
    PRIMARY KEY (id)
);
START TRANSACTION;
INSERT INTO person (first_name, last_name, age) VALUES ('John', 'Doe', 23);
COMMIT;
SET autocommit=0;
INSERT INTO person (first_name, last_name, age) VALUES ('Pepe', 'Argento', 45);
INSERT INTO person (first_name, last_name, age) VALUES ('Moni', 'Argento', 36);
ROLLBACK;
SELECT * FROM person;
```

![image](https://user-images.githubusercontent.com/38252227/189731759-d25dcb3b-5366-45e0-97b3-57a965c450a0.png)

---

### DQL (Data Query Language)
Empleado para realizar consultas a la DB.

#### SELECT
Operador de proyección en el álgebra relacional. Empleado para seleccionar el atributo en base a una condición descrita por la cláusula `WHERE`.

Expone una columna específica de la tabla. Es el subconjunto vertical de la relación original. Elimina las tuplas duplicadas.

#### JOIN
Empleado para combinar filas de 2 o más tablas, en base a una columna relacionada entre los mismos.

### En base al siguiente DER

![image](https://user-images.githubusercontent.com/38252227/189749407-25c057bd-0789-49ed-ab3f-992d8b965977.png)

```sql
CREATE DATABASE IF NOT EXISTS customers;

USE customers;

DROP TABLE IF EXISTS order;
DROP TABLE IF EXISTS customer;

CREATE TABLE customer (
    id              BIGINT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customer_name   VARCHAR(100)    NOT NULL,
    contact_name    VARCHAR(100)    NOT NULL,
    country         VARCHAR(100)    NOT NULL
);

CREATE TABLE customer_order (
    id          BIGINT      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_date  TIMESTAMP   NOT NULL,
    customer_id BIGINT      NOT NULL,
    FOREIGN KEY (customer_id)
        references customer(id)
        on update cascade
        on delete restrict
);

INSERT INTO customer (customer_name, contact_name, country)
VALUES ('Alfreds Futterkiste', 'Maria Anders', 'Germany')
    , ('Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Mexico')
    , ('Antonio Moreno Taquería', 'Antonio Moreno', 'Mexico')
;

INSERT INTO customer_order (order_date, customer_id)
VALUES ('2022-08-22 21:06:30', 1)
    , ('2022-08-29 11:06:30', 2)
    , ('2022-06-03 12:06:30', 1)
    , ('2022-02-22 19:22:04', 3)
;
```

```sql
SELECT customer.customer_name,
        customer.contact_name,
        customer.country,
        customer_order.order_date
FROM customer
JOIN customer_order ON customer.id = customer_order.id;
```

![image](https://user-images.githubusercontent.com/38252227/189746106-5154d3a0-a549-405a-bd42-497204b5a301.png)

```sql
SELECT *
FROM customer
JOIN customer_order ON customer.id = customer_order.id;
```

![image](https://user-images.githubusercontent.com/38252227/189746915-0e3dd147-7b0b-4469-9140-ea44345edaad.png)

#### UNION
Empleado para combinar los conjuntos-resultados de 2 o más sentencias `SELECT`.
- Cada sentencia `SELECT` dentro de `UNION` debe tener la misma cantidad de columnas.
- Las columnas deben también tener tipos de datos similares.
- Las columnas en cada sentencia `SELECT` deben también estar en el mismo orden.

```sql
SELECT customer_name
FROM customer
UNION
SELECT contact_name
FROM customer
ORDER BY customer_name;
```

![image](https://user-images.githubusercontent.com/38252227/189752258-e3a641f1-f2c0-4637-9b37-7c34f3a04bb8.png)

---

## Motores de Base de Datos
- Componente SW subyacente que un sistema de administración de la base de datos (DBMS) emplea para crear, leer, actualizar y eliminar (CRUD) datos de una base de datos.
- La mayoría de las DBMSs incluyen su interfaz de programación (**Cliente de base de datos**), el cual permite al usuario poder interaccionar con su **motor subyacente**.
- Frecuentemente llamado Servidor de Base de Datos, o Sistema de Administración de la Base de Datos (DBMS).
- Instancia de base de datos: procesos y estructuras de memoria del motor de base de datos en ejecución.

Algunos motores de base de datos relacionales son:
- MySQL
- MariaDB
- Oracle
- PostgreSQL
- Microsoft SQL Server
- IBM DB2
- SQLite

Algunos motores de base de datos no relacionales son:
- MongoDB
- Redis
- Cassandra
- MemcacheDB

### Cliente de Base de Datos
Uno de los objetivos centrales de un cliente de base de datos es facilitar el trabajo de los desarrolladores, de los DBAs, o cualquier rol que conlleve acoplarse con la base de datos.

Como desarrolladores, podemos escribir sentencias SQL para consultar a la base de datos, pero puede que esto se vuelva complejo y consuma una considerable cantidad de horas hombre.

También, otros de los motivos importantes para emplear un cliente de base de datos son:
- Consultar la base de datos.
- Construir y ejecutar sentencias SQL desde un lugar centralizado.
- Generar reportes.
- Generar y almacenar backups de la base de datos.
- Diagnosticar y analizar las aplicaciones relacionadas a la base de datos.

Algunos clientes de base de datos son:
- MySQL WorkBench
- Oracle SQL Developer
- Data Grip
- DB Visualizer
- PL/SQL Developer
- DBeaver
- Devart
- HeidiSQL
- Tora
- Toad
