import { createSlice } from "@reduxjs/toolkit";
import { quiz } from "../../data/Quiz";

const initialState = {
    score: 0,
    stageNumber: 1,
    checkedAnswer: 0
};

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        setscore: state => { state.score += quiz[state.stageNumber].answers[state.checkedAnswer].score }
    }
})

export const { setscore } = scoreSlice.actions;
export default scoreSlice.reducer;