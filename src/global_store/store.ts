import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./slices/counterSlice"
import navbarReducer from "./slices/navbarSlice"
import mousePointerReducer from "./slices/mousePointerSlice"
import cursorVariantReducer from "./slices/cursorVariantSlice"
import scrollPositionReducer from "./slices/scrollPositionSlice"
import loaderReducer from "./slices/loaderSlice"
import projectModalReducer from "./slices/projectModalSlice"
import imageModalSlice from "./slices/imageModalSlice"
import customToastSlice from "./slices/customToastSlice"
import blackBarSlice from "./slices/blackBarSlice"
export default configureStore({
    reducer:{
        counter:counterReducer,
        navbar:navbarReducer,
        mousePointerCoord:mousePointerReducer,
        cursorVariant:cursorVariantReducer,
        scrollPosition:scrollPositionReducer,
        loader:loaderReducer,
        projectModal:projectModalReducer,
        imageModal:imageModalSlice,
        customToast:customToastSlice,
        blackBar:blackBarSlice
    }
})

