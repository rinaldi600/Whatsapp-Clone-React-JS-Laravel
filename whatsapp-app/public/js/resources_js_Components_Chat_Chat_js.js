"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_Chat_Chat_js"],{

/***/ "./resources/js/Components/Chat/Chat.js":
/*!**********************************************!*\
  !*** ./resources/js/Components/Chat/Chat.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_modalBoxChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/modalBoxChat */ "./resources/js/features/modalBoxChat.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _features_getNotifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/features/getNotifications */ "./resources/js/features/getNotifications.js");
/* harmony import */ var _features_chatBoxUserDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/chatBoxUserDetail */ "./resources/js/features/chatBoxUserDetail.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var NavbarChat = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../Pages/NavbarChat/NavbarChat */ "./resources/js/Pages/NavbarChat/NavbarChat.js"));
});
function Chat() {
  var box = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.modalBox.value;
  });
  var chatSlice = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.chatSlice.value;
  });
  var userCurrent = JSON.parse(sessionStorage.getItem('userDetail'));
  var navbarChatUser = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.modalBoxChatUser.value;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    currentRealTimeChat = _useState2[0],
    setRealTimeChat = _useState2[1];
  var userSlice = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.userSlice.value;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    getMessage = _useState4[0],
    setValueMessage = _useState4[1];
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var chatContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    Echo["private"]("App.Models.User.".concat(userCurrent === null || userCurrent === void 0 ? void 0 : userCurrent.id)).notification(function (notification) {
      console.log(notification);
      dispatch((0,_features_getNotifications__WEBPACK_IMPORTED_MODULE_4__.addNotifications)(notification));
    });
    Echo["private"]("users.".concat(userSlice === null || userSlice === void 0 ? void 0 : userSlice.id)).listen('MessagePrivateEvent', function (e) {
      var _e$message;
      if ((userCurrent === null || userCurrent === void 0 ? void 0 : userCurrent.id_user) !== ((_e$message = e.message) === null || _e$message === void 0 ? void 0 : _e$message.to_this)) {
        return false;
      }
      setRealTimeChat(function (oldArray) {
        return [].concat(_toConsumableArray(oldArray), [e]);
      });
    });
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    chatContainer.current.scrollIntoView(false);
  });
  var sendMessage = function sendMessage() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.post('/post/chat', {
      'to_this': userSlice === null || userSlice === void 0 ? void 0 : userSlice.idUser,
      'message': getMessage
    });
    setRealTimeChat(function (oldArray) {
      return [].concat(_toConsumableArray(oldArray), [{
        'to_this': userSlice === null || userSlice === void 0 ? void 0 : userSlice.idUser,
        'message': getMessage
      }]);
    });
    inputRef.current.value = '';
  };
  var getUserFast = function getUserFast() {
    if (box) {
      var addUser = {
        idUser: userSlice.idUser,
        open: true
      };
      dispatch((0,_features_chatBoxUserDetail__WEBPACK_IMPORTED_MODULE_5__.removeIdUser)());
      dispatch((0,_features_chatBoxUserDetail__WEBPACK_IMPORTED_MODULE_5__.getUserInChatBox)(addUser));
    }
    setRealTimeChat([]);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    onLoad: getUserFast,
    className: "".concat(box ? 'block' : 'hidden', " scrollbar-hide overflow-y-scroll w-full h-full bg-white"),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "min-h-[59px] flex justify-between relative items-center p-2 bg-[#F0F2F5] sticky top-[-1px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "w-[40px] h-[40px] rounded-full bg-white overflow-hidden",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
            referrerPolicy: "no-referrer",
            className: "w-full h-full",
            src: "".concat(userSlice.photo_profile),
            alt: ""
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          children: userSlice.name
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          onClick: function onClick() {
            return dispatch(navbarChatUser ? (0,_features_modalBoxChat__WEBPACK_IMPORTED_MODULE_2__.close)() : (0,_features_modalBoxChat__WEBPACK_IMPORTED_MODULE_2__.show)());
          },
          className: "cursor-pointer hover:bg-[#D9DBDF] hover:rounded-full hover:w-[32px] hover:h-[32px] hover:flex justify-center items-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
            viewBox: "0 0 24 24",
            height: "24",
            width: "24",
            preserveAspectRatio: "xMidYMid meet",
            className: "text-[#54656F]",
            version: "1.1",
            x: "0px",
            y: "0px",
            "enable-background": "new 0 0 24 24",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
              fill: "currentColor",
              d: "M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "overflow-scroll scrollbar-hide bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
          children: "Loading"
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NavbarChat, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "h-[638px] text-sm text-[#111b21] scrollbar-hide overflow-y-scroll",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          ref: chatContainer,
          className: "w-[90%] min-h-full mx-auto",
          children: [chatSlice.map(function (chat) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "p-1 w-full flex ".concat((chat === null || chat === void 0 ? void 0 : chat.from_this) === (userCurrent === null || userCurrent === void 0 ? void 0 : userCurrent.id_user) ? 'justify-end' : 'justify-start', " mt-1 mb-1 rounded-lg"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "".concat((chat === null || chat === void 0 ? void 0 : chat.from_this) === (userCurrent === null || userCurrent === void 0 ? void 0 : userCurrent.id_user) ? 'bg-[#D9FDD3]' : 'bg-white', " p-2 rounded-lg"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                  className: "break-words",
                  children: chat.message
                })
              })
            });
          }), currentRealTimeChat.length <= 0 ? '' : currentRealTimeChat.map(function (chatReal) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "p-1 w-full flex ".concat(chatReal.hasOwnProperty('id') ? 'justify-start' : 'justify-end', " mt-1 mb-1 rounded-lg"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "".concat(chatReal.hasOwnProperty('id') ? 'bg-white' : 'bg-[#D9FDD3]', " p-2 rounded-lg"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                  className: "break-words",
                  children: chatReal.hasOwnProperty('id') ? chatReal.message.message : chatReal.message
                })
              })
            });
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "bg-[#F0F2F5] p-2 flex h-[62px] sticky bottom-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "w-[94px] grid justify-center items-center h-full",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
            viewBox: "0 0 24 24",
            height: "32",
            width: "32",
            preserveAspectRatio: "xMidYMid meet",
            className: "ekdr8vow dhq51u3o text-[#54656F] cursor-pointer",
            version: "1.1",
            x: "0px",
            y: "0px",
            "enable-background": "new 0 0 24 24",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
              fill: "currentColor",
              d: "M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "w-[892.925px] flex h-full rounded-lg overflow-hidden",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "w-[832.925px] bg-transparent flex items-center h-full",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
            ref: inputRef,
            onChange: function onChange(e) {
              return setValueMessage(e.target.value);
            },
            type: "text",
            className: "w-full rounded-lg font-normal h-full bg-white border-transparent focus:border-transparent focus:ring-0",
            placeholder: "Ketik Pesan"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "w-[37px] flex items-center justify-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            onClick: sendMessage,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              "data-testid": "send",
              "data-icon": "send",
              className: "text-[#54656F] cursor-pointer",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                viewBox: "0 0 24 24",
                height: "24",
                width: "24",
                preserveAspectRatio: "xMidYMid meet",
                className: "",
                version: "1.1",
                x: "0px",
                y: "0px",
                "enable-background": "new 0 0 24 24",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                  fill: "currentColor",
                  d: "M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
                })
              })
            })
          })
        })]
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);

/***/ })

}]);