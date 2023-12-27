import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentAccount:{
        id:1,
        username:"bugraates",
        fullname:"Bugra Ates",
        avatar:'https://cdn.iconscout.com/icon/free/png-256/free-avatar-380-456332.png'
    },
    accounts:[
        {
            id:1,
            username:"bugraates",
            fullname:"Bugra Ates",
            avatar:'https://cdn.iconscout.com/icon/free/png-256/free-avatar-380-456332.png'
        },
        {
            id:2,
            username:"edanurbolukbas",
            fullname:"Edanur Bolukbas",
            avatar:'https://cdn.iconscout.com/icon/free/png-256/free-avatar-380-456332.png'
        },
    ]
}

const auth = createSlice ({
    name: 'auth',
    initialState,
    reducers:{
        //state manipule etme metodları
        _addAccounts: (state,action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state,action)=> {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if ( state.currentAccount && action.payload === state.currentAccount.id){
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const {_addAccounts, _setCurrentAccount, _removeAccount} = auth.actions
export default auth.reducer;