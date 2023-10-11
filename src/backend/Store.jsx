import { configureStore } from '@reduxjs/toolkit';
import KanbanReducer from './KanbanSlice';


export const Store = configureStore({
    reducer: {
        kanban: KanbanReducer
    }
});
