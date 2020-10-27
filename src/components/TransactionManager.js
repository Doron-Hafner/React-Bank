import axios from 'axios'
export default {
    getTransactions: async () => {
        const { data } = await axios.get('http://localhost:8000/transactions')
        return data
    },
    addTransaction: async transaction => {
        await axios.post('http://localhost:8000/transaction', transaction)
    },
    deleteTransaction: async transactionId => {
        await axios.delete(`http://localhost:8000/transaction/${transactionId}`)
    },
    getCatagoryList: async () => {
        const { data } = await axios.get('http://localhost:8000/catagories')
        return data
    }
}