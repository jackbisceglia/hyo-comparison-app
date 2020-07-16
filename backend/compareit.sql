CREATE DATABASE compareit;
--\c into compareit
CREATE TABLE compareCache(
    compare_ID SERIAL PRIMARY KEY,
    description VARCHAR(255)
    EbayImageUrl VARCHAR(255)
    EbayCategory VARCHAR(255)
    EbayTitle VARCHAR(255)
    EbayPrice VARCHAR(255)
    WalmartPrice VARCHAR(255)
    WalmartTitle VARCHAR(255)
    WalmartUrl VARCHAR(255)
    WalmartImageUrl VARCHAR(255)
    );
--\dt
\d table
ALTER TABLE tablename ADD columnname datatype
