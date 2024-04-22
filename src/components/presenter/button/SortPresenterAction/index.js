import React, { useState, useEffect } from 'react';
import { VStack, HStack, Button, useToast } from '@chakra-ui/react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { get as DefaultPresenterGet } from '@/components/config/NamedPresenterConfig';
import { LS } from 'zero-element/lib/utils/storage';
const promiseAjax = require('@/components/utils/request');
require('./index.less')

const initialItems = [
    { id: 'item-1', componentProps: { "size": "50" }, componentType: 'Avatar' },
    { id: 'item-2', componentProps: {}, componentType: 'Title' },
    { id: 'item-3', componentProps: {}, componentType: 'Subtitle' },
];

const App = (props) => {

    const { layoutName = LS.get('commonData')  } = props;

    const toast = useToast()
    const _layoutName = typeof layoutName === 'object' ? LS.get('commonData').layoutName : layoutName
    const direction = 'vertical'; // vertical or horizontal
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const listApi = `/openapi/lc/module/childModuleList?componentOption=presenter&moduleName=${_layoutName}`
        getList(listApi)
    }, [])


    const handleDragEnd = (result) => {
        if (!result.destination) return; // dropped outside the list
        const newItems = Array.from(items);
        const [movedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, movedItem);
        setItems(newItems);
    };

    const handlePresenter = (item) => {
        const _DefaultPresenterGet = DefaultPresenterGet();
        const _Presenter = _DefaultPresenterGet[item.componentType];
        return (
            <_Presenter {...item.componentProps} content={item.componentType} />
        )
    }

    const getList = (listApi) => {
        
        return promiseAjax(listApi, {}, { method: 'GET' }).then(resp => {
            if (resp && resp.code === 200) {
                setItems(resp.data)
            } else {
                toastTips('获取presenter列表失败', 'error')
            }
        }).finally(_ => {
        });
    }

    const handleConfirm = () => {
        
        setLoading(true)
        const _items = items.map(item => {
            return { "id": item.id, }
        })

        const api = '/openapi/lc/module/presenter/rearrangement-presenter'
        const query = {
            "mainModuleName": _layoutName,
            "newOrder": _items,
        }

        console.log(' query = ', query)

        return 

        return promiseAjax(api, query, { method: 'PATCH' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('删除成功')
                if (onActionCompleted) {
                    onActionCompleted(resp.data)
                }
            } else {
                toastTips('删除失败', 'error')
            }
        }).finally(_ => {
            setLoading(false)
        });
    }


    // tips
    function toastTips(text, status = 'success') {
        toast({
            title: text,
            description: "",
            status: status,
            duration: 3000,
            isClosable: true,
            position: 'top'
        })
    }
    

    return (
        <VStack spacing={4}>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="droppable" direction={direction}>
                    {(provided) => (
                        <div
                            className="items-container"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <div
                                            className="draggable-item"
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        >
                                            {handlePresenter(item)}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <HStack spacing={10}>
                <Button isLoading={isLoading} onClick={() => setItems(initialItems)}>Reset</Button>
                <Button isLoading={isLoading} onClick={() => handleConfirm()}>Confirm</Button>
            </HStack>
        </VStack>
    );
};

export default App;