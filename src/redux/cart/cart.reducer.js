import cartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: true,
};

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CARD_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        default:
            return state;
    }
};

export default cartReducer;