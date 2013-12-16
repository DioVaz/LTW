DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS customer; 
DROP TABLE IF EXISTS billingadress;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS invoice;
DROP TABLE IF EXISTS line;




CREATE TABLE user
(id INTeger PRIMARY KEY autoincrement,
name VARCHAR(20),
lastname VARCHAR(20),
email VARCHAR(20),
age INT NOT NULL,
pass INT NOT NULL,
gender VARCHAR(20),
city VARCHAR(20),
country VARCHAR(20),
permission INT NOT NULL
); 

CREATE TABLE customer
(CustomerID INTeger PRIMARY KEY autoincrement,
CustomerTaxID INT NOT NULL,
CompanyName VARCHAR(64),
BillingAddressID INTeger REFERENCES billingadress(BillingAdressID),
Email VARCHAR(64)
);

CREATE TABLE billingadress
(BillingAdressID INTeger PRIMARY KEY autoincrement,
AdressDetail VARCHAR(256),
City VARCHAR(64),
PostalCode INT NOT NULL,
Country VARCHAR(64)
);

CREATE TABLE product
(ProductCode INTeger PRIMARY KEY autoincrement,
ProductDescription VARCHAR(256),
UnitPrice INT NOT NULL,
UnitOfMeasure INT NOT NULL
);

CREATE TABLE invoice
(InvoiceNo INTeger PRIMARY KEY autoincrement,
InvoiceDate DATE,
CustomerID INTeger REFERENCES customer(CustomerID),

);

CREATE TABLE line
(LineID INTeger PRIMARY KEY autoincrement
InvoiceNo INTeger REFERENCES invoice(InvoiceNo),
ProductCode INTeger REFERENCES product(ProductCode),
Quantity INT,
CreditAmount INT,
TaxType VARCHAR(20),
TaxPercentage INT
);


//INSERT USER

INSERT INTO user
VALUES (NULL, 'Diogo', 'Vaz', 'ei09001@fe.up.pt', '23', '1234', 'm', 'Porto', 'Portugal', '1');

INSERT INTO user
VALUES (NULL, 'Francisco', 'Bernardo', 'ei09002@fe.up.pt', '22', '5678', 'm', 'Porto', 'Portugal', '1');

INSERT INTO user
VALUES (NULL, 'Maria', 'Gabriel', 'ei09032@fe.up.pt', '22', '9123', 'f', 'Porto', 'Portugal', '1');

INSERT INTO user
VALUES (NULL, 'Renato', 'Marinho', 'ei09003@fe.up.pt', '23', '4567', 'm', 'Porto', 'Portugal', '1');


//INSERT BILLINGADRESS

INSERT INTO billingadress
VALUES (NULL, 'Rua da Travessa', 'Porto', '1234123', 'Portugal');

INSERT INTO billingadress
VALUES (NULL, 'Rua 25 de Abril', 'Porto', '5678567', 'Portugal');

INSERT INTO billingadress
VALUES (NULL, 'Rua de Camões', 'Porto', '1234567', 'Portugal');

INSERT INTO billingadress
VALUES (NULL, 'Rua 5 de Outubro', 'Porto', '5678123', 'Portugal');



//INSERT CUSTOMER

INSERT INTO customer
VALUES (NULL, '1', 'Nilton', '1', 'cust001@fe.up.pt');

INSERT INTO customer
VALUES (NULL, '1', 'Confuso', '2', 'cust002@fe.up.pt');

INSERT INTO customer
VALUES (NULL, '2', 'Popota', '3', 'cust003@fe.up.pt');

INSERT INTO customer
VALUES (NULL, '2', 'Tone', '4', 'cust004@fe.up.pt');


//INSERT PRODUCT

INSERT INTO product
VALUES (NULL, 'Colher', '5', '1');

INSERT INTO product
VALUES (NULL, 'Moca', '3', '1');

INSERT INTO product
VALUES (NULL, 'Penico', '2', '1');

INSERT INTO product
VALUES (NULL, 'Tesoura', '1', '20');


//INSERT INVOICE

INSERT INTO invoice
VALUES (NULL, '2013-01-01', '1');

INSERT INTO invoice
VALUES (NULL, '2013-02-02', '3');

INSERT INTO invoice
VALUES (NULL, '2013-03-03', '2');

INSERT INTO invoice
VALUES (NULL, '2013-04-04', '4');

//INSERT LINE

INSERT INTO line
VALUES (NULL,'1', '1', '2', '10', 'Praxe', '23');

INSERT INTO line
VALUES (NULL, '2', '2', '2', '20', 'Praxe', '23');

INSERT INTO line
VALUES (NULL,'3', '1', '2', '10', 'Praxe', '23');

INSERT INTO line
VALUES (NULL, '1', '2', '2', '20', 'Praxe', '23');

INSERT INTO line
VALUES (NULL, '3',, '3', '2', '30', 'Praxe', '23');

INSERT INTO line
VALUES (NULL, '4', '4', '2', '40', 'Praxe', '23');

