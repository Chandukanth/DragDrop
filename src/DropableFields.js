import React from "react";
import UICard from "./UICard";
import { Droppable, Draggable } from 'react-beautiful-dnd';


const DropAbleFields = ({title, droppableId, content, backgroundColor}) => {
    return (
        <div className="card-container">
            <div className='title' style={{ backgroundColor: backgroundColor }}>{title}</div>

            <Droppable droppableId={droppableId}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {content.map((item, index) => (
                            <Draggable key={index} draggableId={item?.id} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <UICard
                                            key={index}
                                            title={item?.title}
                                            statusBackgroundColor={item?.statusBackgroundColor}
                                            priorityBackgroundColor={item?.priorityBackgroundColor}
                                            avatar="https://picsum.photos/200/300"
                                            tags={item?.tags}
                                            status={item?.status}
                                            information={item?.information}
                                            priority={item?.priority}
                                            date={item?.date}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

        </div>
    )
}
export default DropAbleFields