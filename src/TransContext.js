import {createContext} from "react"

const initialTransaction =  [
    {Amount:400, desc: "Cash"},
    {Amount:-40, desc: "Book"},
    {Amount:-200, desc: "Camera"}
    
]

export const TransactionContext = createContext(initialTransaction);  