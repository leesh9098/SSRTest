import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import score from "./configureStore";

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        return
    }
}