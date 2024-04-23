function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect, useRef } from 'react';
import { VStack, HStack, Button, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { get as DefaultPresenterGet } from "../../../config/NamedPresenterConfig";
import { LS } from 'zero-element/lib/utils/storage';
const promiseAjax = require("../../../utils/request");
require("./index.less");
export default function SortPresenterAction(props) {
  const {
    layoutName = LS.get('commonData'),
    onActionCompleted
  } = props;
  const _layoutName = typeof layoutName === 'object' ? LS.get('commonData').layoutName : layoutName;
  const direction = 'vertical'; // vertical or horizontal
  const listApi = `/openapi/lc/module/childModuleList?componentOption=presenter&moduleName=${_layoutName}`;
  const toast = useToast();
  const initialRef = useRef();
  const finalRef = useRef();
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const [modalTitle, setModalTitle] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    getList(listApi);
  }, []);
  const handleDragEnd = result => {
    if (!result.destination) return; // dropped outside the list
    const newItems = Array.from(items);
    const [movedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, movedItem);
    setItems(newItems);
  };
  const handlePresenter = item => {
    // const _DefaultPresenterGet = DefaultPresenterGet();
    // if(item.componentType === 'autolayout'){
    //     return item.moduleName
    // }else{
    //     const _Presenter = _DefaultPresenterGet[item.componentType];
    //     return (
    //         <_Presenter {...item.componentProps} content={item.componentType} />
    //     )
    // }
    return item.moduleName;
  };
  const getList = listApi => {
    return promiseAjax(listApi, {}, {
      method: 'GET'
    }).then(resp => {
      if (resp && resp.code === 200) {
        setItems(resp.data);
      } else {
        toastTips('获取presenter列表失败', 'error');
      }
    }).finally(_ => {});
  };
  const handleConfirm = () => {
    setLoading(true);
    const _items = items.map(item => {
      return item.id;
    });
    const api = '/openapi/lc/module/presenter/rearrangement-presenter';
    const query = {
      "mainModuleName": _layoutName,
      "newOrder": _items
    };
    return promiseAjax(api, query, {
      method: 'PATCH'
    }).then(resp => {
      if (resp && resp.code === 200) {
        toastTips('操作成功');
        if (onActionCompleted) {
          onActionCompleted(resp.data);
        }
      } else {
        console.error(resp.message);
        toastTips('操作失败', 'error');
      }
    }).finally(_ => {
      setLoading(false);
    });
  };
  const onBtnClick = () => {
    onOpen();
  };

  // tips
  function toastTips(text, status = 'success') {
    toast({
      title: text,
      description: "",
      status: status,
      duration: 3000,
      isClosable: true,
      position: 'top'
    });
  }
  const handleModalClose = () => {
    onClose();
    if (onActionCompleted) {
      onActionCompleted();
    }
  };
  console.log('items = items = ', items);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onBtnClick
  }, "SortPresenter"), /*#__PURE__*/React.createElement(Modal, {
    initialFocusRef: initialRef,
    finalFocusRef: finalRef,
    isOpen: isOpen,
    onClose: handleModalClose,
    size: "full"
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, modalTitle), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, {
    pb: 6
  }, /*#__PURE__*/React.createElement(VStack, {
    spacing: 4
  }, items ? /*#__PURE__*/React.createElement(DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/React.createElement(Droppable, {
    droppableId: "droppable",
    direction: direction
  }, provided => /*#__PURE__*/React.createElement("div", _extends({
    className: "items-container"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), items.map((item, index) => /*#__PURE__*/React.createElement(Draggable, {
    key: item.id,
    draggableId: item.id,
    index: index
  }, provided => /*#__PURE__*/React.createElement("div", _extends({
    className: "draggable-item"
  }, provided.draggableProps, provided.dragHandleProps, {
    ref: provided.innerRef
  }), handlePresenter(item)))), provided.placeholder))) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement(HStack, {
    spacing: 10
  }, /*#__PURE__*/React.createElement(Button, {
    isLoading: isLoading,
    onClick: () => getList(listApi)
  }, "Reset"), /*#__PURE__*/React.createElement(Button, {
    isLoading: isLoading,
    onClick: () => handleConfirm()
  }, "Confirm")))))));
}
;