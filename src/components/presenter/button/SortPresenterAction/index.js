import React, { useState, useEffect, useRef } from 'react';
import {
    VStack, HStack, Button, useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { get as DefaultPresenterGet } from '@/components/config/NamedPresenterConfig';
import { LS } from 'zero-element/lib/utils/storage';
const promiseAjax = require('@/components/utils/request');
require('./index.less')


export default function SortPresenterAction(props) {

    const { layoutName = LS.get('commonData'), onActionCompleted } = props;
    const _layoutName = typeof layoutName === 'object' ? LS.get('commonData').layoutName : layoutName
    const direction = 'vertical'; // vertical or horizontal
    const listApi = `/openapi/lc/module/childModuleList?componentOption=presenter&moduleName=${_layoutName}`
    const toast = useToast()
    const initialRef = useRef()
    const finalRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalTitle, setModalTitle] = useState('')
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
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
        // const _DefaultPresenterGet = DefaultPresenterGet();
        // if(item.componentType === 'autolayout'){
        //     return item.moduleName
        // }else{
        //     const _Presenter = _DefaultPresenterGet[item.componentType];
        //     return (
        //         <_Presenter {...item.componentProps} content={item.componentType} />
        //     )
        // }
        return item.moduleName
        
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
            return item.id
        })

        const api = '/openapi/lc/module/presenter/rearrangement-presenter'
        const query = {
            "mainModuleName": _layoutName,
            "newOrder": _items,
        }

        return promiseAjax(api, query, { method: 'PATCH' }).then(resp => {
            if (resp && resp.code === 200) {
                toastTips('操作成功')
                if (onActionCompleted) {
                    onActionCompleted(resp.data)
                }
            } else {
                console.error(resp.message)
                toastTips('操作失败', 'error')
            }
        }).finally(_ => {
            setLoading(false)
        });
    }

    const onBtnClick = () => {
        onOpen()
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

    const handleModalClose = () => {
        onClose()
        if (onActionCompleted) {
            onActionCompleted()
        }
    }

    console.log('items = items = ', items)


    return (

        <>

            <Button onClick={onBtnClick}>
                SortPresenter
            </Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={handleModalClose}
                size='full'
            >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>{modalTitle}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                        <VStack spacing={4}>
                            {
                                items ? (
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
                                ) : <></>
                            }

                            <HStack spacing={10}>
                                <Button isLoading={isLoading} onClick={() => getList(listApi)}>Reset</Button>
                                <Button isLoading={isLoading} onClick={() => handleConfirm()}>Confirm</Button>
                            </HStack>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

