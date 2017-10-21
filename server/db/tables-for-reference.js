CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
);



CREATE TABLE properties (
    id SERIAL PRIMARY KEY,
    PropName varchar(50),
    PropDesc varchar(255),
    Address varchar(255),
    City varchar(50),
    State varchar(60),
    Zip varchar(50),
    ImgUrl varchar(255),
    LoanAmount integer,
    MonthlyMortgage integer,
    DesiredRent integer,
    RecommendedRent integer,
    UserId integer,
    FOREIGN KEY (UserId) REFERENCES Users(id)
);



{
	"propname": "test",
	"propdesc": "test",
	"address": "test",
	"city": "test",
	"state": "test",
	"zip": "1234",
	"imageurl": "http://google.com",
	"loanamount": 10000,
	"monthlymortgage": 1000,
	"desiredrent": 10000,
	"recommendedrent": 10000,
	"userid": 1
}
