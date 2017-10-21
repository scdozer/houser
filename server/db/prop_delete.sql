DELETE FROM properties
WHERE id = ${propertyId};

SELECT * FROM properties
WHERE userid = ${sessionUserId};
