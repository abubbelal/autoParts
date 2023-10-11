// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     columns: [
//         { id: 'backlog', title: 'Backlog', cards: [] },
//         { id: 'doing', title: 'Doing', cards: [] },
//         { id: 'review', title: 'Review', cards: [] },
//         { id: 'done', title: 'Done', cards: [] }
//     ]
// };

// const KanbanSlice = createSlice({
//     name: 'kanban',
//     initialState,
//     reducers: {
//         addCard: (state, action) => {
//             const { columnId, card } = action.payload;
//             const column = state.columns.find(col => col.id === columnId);
//             column.cards.push(card);
//         },
//         moveCard: (state, action) => {
//             const { fromColumnId, toColumnId, cardId } = action.payload;
//             const fromColumn = state.columns.find(col => col.id === fromColumnId);
//             const toColumn = state.columns.find(col => col.id === toColumnId);
//             const cardIndex = fromColumn.cards.findIndex(card => card.id === cardId);
//             const [card] = fromColumn.cards.splice(cardIndex, 1);
//             toColumn.cards.push(card);
//         }
//     }
// });

// export const { addCard, moveCard } = KanbanSlice.actions;
// export default KanbanSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    columns: [
        { id: 'backlog', title: 'Backlog', cards: [
            { id: 'b1', title: "Backlok Tasl 1", content: 'content for backlog is here' }, 
            { id: 'b2', title: "Backlok Tasl 2", content: 'content for backlog is here' }
        ]},
        { id: 'doing', title: 'Doing', cards: [
            { id: 'd1', title: 'Doing Task Title', content: 'Doing Task 1' }
        ] },
        { id: 'review', title: 'Review', cards: [
            { id: 'r1', title: 'Review Task 1', content: 'Review Task 1' }
        ] },
        { id: 'done', title: 'Done', cards: [
            { id: 'do1', title: 'Done Task 1', content: 'Done Task 1' }
        ] }
    ]
};

const KanbanSlice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        moveCard: (state, action) => {
            const { fromColumnId, toColumnId, cardId } = action.payload;
            const fromColumn = state.columns.find(col => col.id === fromColumnId);
            const toColumn = state.columns.find(col => col.id === toColumnId);
            const cardIndex = fromColumn.cards.findIndex(card => card.id === cardId);
            const [card] = fromColumn.cards.splice(cardIndex, 1);
            toColumn.cards.push(card);
        }
    }
});

export const { moveCard } = KanbanSlice.actions;
export default KanbanSlice.reducer;
