SELECT * FROM properties
WHERE userid = ${sessionUserId}
AND desiredrent >= ${desiredrent};
