CREATE DATABASE compareit;
--\c into compareit
CREATE TABLE compareCache(
    compare_ID SERIAL PRIMARY KEY,
    description VARCHAR(255)
    );
--\dt
