import axios from "axios"
import { FAIL_REQUEST, GET_POPULATION, GET_RANDOM_USER, GET_USER_LIST, MAKE_REQUEST } from "./ActionType"

export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}
export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const getEntries=(data)=>{
    return{
        type:GET_USER_LIST,
        payload:data
    }
}
export const getPopulation=(data)=>{
    return{
        type:GET_POPULATION,
        payload:data
    }
}
export const getRandomUser=(data)=>{
    return{
        type:GET_RANDOM_USER,
        payload:data
    }
}


export const FetchUserList=()=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.get(`https://api.publicapis.org/entries`).then(res=>{
            const entries=res.data;
            dispatch(getEntries(entries));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
    }
}
export const FetchPopulationList=()=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.get(` https://datausa.io/api/data?drilldowns=Nation&measures=Population`).then(res=>{
            const population=res.data;
            dispatch(getPopulation(population));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
    }
}
export const FetchRandomUserList=()=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.get(`https://randomuser.me/api/`).then(res=>{
            const randomUser=res.data;
            console.log("-------------",randomUser)
            dispatch(getRandomUser(randomUser));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
    }
}
