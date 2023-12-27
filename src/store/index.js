import { configureStore } from "@reduxjs/toolkit";
import auth from "../store/auth/index";
import modal from "../store/modal";
import appearance from "../store/appearance";

const store = configureStore ({
    reducer: {
        //store
        auth,
        modal,
        appearance
    }
})

export default store