// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { moveCard } from './KanbanSlice';


// function KanbanBoard() {
//     const columns = useSelector(state => state.kanban.columns);
//     const dispatch = useDispatch();

//     const onDragStart = (e, cardId) => {
//         e.dataTransfer.setData('cardId', cardId);
//     };

//     const onDrop = (e, columnId) => {
//         const cardId = e.dataTransfer.getData('cardId');
//         const fromColumnId = columns.find(col => col.cards.some(card => card.id === cardId)).id;
//         dispatch(moveCard({ fromColumnId, toColumnId: columnId, cardId }));
//     };

//     const columnColors = ['red', 'blue', 'green', 'yellow'];

//     return (
//         <div className='grid grid-cols-4 gap-2 p-2 h-full overflow-y-auto'>
//             {columns.map((column, index) => (
//                 <div
//                     key={column.id}
//                     className={`border p-3 h-full bg-${columnColors[index]}-50 border-${columnColors}-200`}
//                     onDragOver={(e) => e.preventDefault()}
//                     onDrop={(e) => onDrop(e, column.id)}
//                 >
//                     <h2 className={`text-${columnColors[index]}-800`}>{column.title}</h2>
//                     {column.cards.map(card => (
//                         <div
//                             key={card.id}
//                             draggable
//                             onDragStart={(e) => onDragStart(e, card.id)}
//                             className={`border${columnColors[index]}-400 p-2 my-2 bg-${columnColors[index]}-500 rounded-md`}
//                         >
//                             <h4>{card.title}</h4>
//                             {card.content}
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default KanbanBoard;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveCard } from './KanbanSlice';

function KanbanBoard() {
    const columns = useSelector(state => state.kanban.columns);
    const dispatch = useDispatch();

    const onDragStart = (e, cardId) => {
        e.dataTransfer.setData('cardId', cardId);
    };

    const onDrop = (e, columnId) => {
        const cardId = e.dataTransfer.getData('cardId');
        const fromColumnId = columns.find(col => col.cards.some(card => card.id === cardId)).id;
        dispatch(moveCard({ fromColumnId, toColumnId: columnId, cardId }));
    };

    const columnColors = ['red', 'blue', 'green', 'yellow'];

    const colorShades = {
        red: {
            columnBg: 'bg-red-50',
            columnBorder: 'border-red-200',
            cardBg: 'bg-red-200',
            cardText: 'text-red-700',
            cardTitle: 'text-red-700',
            cardBorder: 'border-red-700'
        },
        blue: {
            columnBg: 'bg-blue-50',
            columnBorder: 'border-blue-200',
            cardBg: 'bg-blue-200',
            cardText: 'text-blue-700',
            cardTitle: 'text-blue-700',
            cardBorder: 'border-blue-700'
        },
        green: {
            columnBg: 'bg-green-50',
            columnBorder: 'border-green-200',
            cardBg: 'bg-green-200',
            cardText: 'text-green-700',
            cardTitle: 'text-green-700',
            cardBorder: 'border-green-700'
        },
        yellow: {
            columnBg: 'bg-yellow-50',
            columnBorder: 'border-yellow-200',
            cardBg: 'bg-yellow-200',
            cardText: 'text-yellow-700',
            cardTitle: 'text-yellow-700',
            cardBorder: 'border-yellow-700'
        }
    };

    return (
        <div className='grid grid-cols-4 gap-2 p-2 h-full overflow-y-auto'>
            {columns.map((column, index) => {
                const color = columnColors[index];
                const shades = colorShades[color];
                return (
                    <div
                        key={column.id}
                        className={`${shades.columnBg} ${shades.columnBorder} border p-3 h-full`}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => onDrop(e, column.id)}
                    >
                        <h2 className={`${shades.cardText} text-2xl font-normal mb-6`}>{column.title}</h2>
                        {column.cards.map(card => (
                            <div
                                key={card.id}
                                draggable
                                onDragStart={(e) => onDragStart(e, card.id)}
                                className={`${shades.cardBg} ${shades.cardText} border p-2 my-2 rounded-md`}
                            >
                                <div className='pb-4 text-lg font-normal'>
                                    <h4>{card.title}</h4>
                                </div>
                                <p className='font-normal text-sm'>
                                    {card.content}
                                </p>
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}

export default KanbanBoard;

