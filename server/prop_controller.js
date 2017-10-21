module.exports = {
  newProp: (req, res, next) =>{
    const { session } = req;
    const { propname, propdesc, address, city, state, zip, imageurl, loanamount, monthlymortgage, desiredrent, recommendedrent, userid } = req.body;
    // const { id } = session.user;
    const dbInstance = req.app.get('db');
    dbInstance.prop_add({ propname, propdesc, address, city, state, zip, imageurl, loanamount, monthlymortgage, desiredrent, recommendedrent, userid })
      .then((property) => {
        session.user.properties = property;
        res.status(200).send(session.user);
      })
      .catch(error => console.log(error))
  },

  allProps: (req, res, next) =>{
    const { session } = req;
    const {id: sessionUserId} = session.user;
    const dbInstance = req.app.get('db');
    dbInstance.props_all({ sessionUserId })
      .then( (property) => {
        session.user.properties = property;
        res.status(200).send(session.user);
      })
  },

  deleteProp: (req, res, next) =>{
    const { session } = req;
    const sessionUserId = session.user.id;
    const propertyId  = req.params.id;
    const dbInstance = req.app.get('db');
    dbInstance.prop_delete({ propertyId, sessionUserId })
      .then((property) => {
        session.user.properties = property;
        res.status(200).send(session.user);
      })
      .catch(error => console.log(error));
   },

  filterProps: (req, res, next) =>{
    const { session } = req;
    const {id: sessionUserId} = session.user;
    const { desiredrent } = req.query;
    const dbInstance = req.app.get('db');
    dbInstance.props_filter({ sessionUserId, desiredrent })
      .then( (property) =>{
        session.user.properties = property;
        res.status(200).send(session.user);
      })
      .catch(error => console.log(error));
  }
}
