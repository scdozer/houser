import ActionConstants from './ActionConstants';
const {LOGIN} = ActionConstants;

//ACTION BUILDERS
export function login() {
    return {
        type: LOGIN
    }
}
