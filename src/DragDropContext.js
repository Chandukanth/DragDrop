import React, { useEffect, useState } from "react";
import UICard from "./UICard";
import { Droppable, DragDropContext, Draggable } from "react-beautiful-dnd";
import { initialArrange, initialArrange2, initialArrange3 } from "./InitialArrange";

const DragDropMenu = () =>{
    const [containers, setContainers] = useState([]);

    useEffect(() => {
      setContainers([
        { id: 'fundamental', cardContent: initialArrange },
        { id: 'chat', cardContent: initialArrange2 },
        { id: 'onboarding', cardContent: initialArrange3 },
      ])
    }, []); 
    const handleDragEnd = (result) => {
        if (!result.destination) return;
    
        const sourceContainerId = result.source.droppableId;
        const destinationContainerId = result.destination.droppableId;
    
        if (sourceContainerId === destinationContainerId) {
          const containerIndex = containers.findIndex((container) => container.id === sourceContainerId);
          const updatedContainers = [...containers];
          const [movedItem] = updatedContainers[containerIndex].cardContent.splice(result.source.index, 1);
          updatedContainers[containerIndex].cardContent.splice(result.destination.index, 0, movedItem);
          setContainers(updatedContainers);
        } else {
          const sourceContainerIndex = containers.findIndex((container) => container.id === sourceContainerId);
          const destinationContainerIndex = containers.findIndex((container) => container.id === destinationContainerId);
    
          const updatedContainers = [...containers];
          const [movedItem] = updatedContainers[sourceContainerIndex].cardContent.splice(result.source.index, 1);
          updatedContainers[destinationContainerIndex].cardContent.splice(result.destination.index, 0, movedItem);
    
          setContainers(updatedContainers);
        }
      };
return(
    <DragDropContext onDragEnd={handleDragEnd}>
    {containers.map((container) => (
      <div key={container.id} className="card-container">
        <div className="title" style={{ backgroundColor: 'lightgray' }}>{container.id}</div>

        <Droppable droppableId={container.id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {container.cardContent.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <UICard
                        key={item.id}
                        title={item.title}
                        statusBackgroundColor={item.statusBackgroundColor}
                        priorityBackgroundColor={item.priorityBackgroundColor}
                        avatar="https://picsum.photos/200/300"
                        tags={item.tags}
                        status={item.status}
                        information={item.information}
                        priority={item.priority}
                        date={item.date}
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
    ))}
  </DragDropContext>
)
}
export default DragDropMenu;