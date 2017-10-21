INSERT INTO properties
(propname, propdesc, address, city, state, zip, imgurl, loanamount, monthlymortgage, desiredrent, recommendedrent, userid)
VALUES (${propname}, ${propdesc}, ${address}, ${city}, ${state}, ${zip}, ${imageurl}, ${loanamount}, ${monthlymortgage}, ${desiredrent}, ${recommendedrent}, ${userid});

SELECT * FROM properties
WHERE userid = ${userid};
