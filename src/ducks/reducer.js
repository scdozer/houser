import ActionConstants from '../ActionConstants';

const{LOGIN} = ActionConstants;

let initialState = {
  user: [{
    id: 0,
  }],
  properties: []
}


export default function (state = initialState, action) {
  let data;
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {})
    }

    return state;
}
