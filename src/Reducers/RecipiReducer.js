import axios from "axios"

const initialState = async () => {
  const { data } = await axios.get('www.themealdb.com/api/json/v1/1/search.php?f=a')
  console.log(data)
  return data
}

const recipieReducer = (state = initialState, action) => {
  return state
}

export default  recipieReducer;