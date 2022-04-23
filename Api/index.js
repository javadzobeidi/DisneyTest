import React from 'react'
import { useQuery } from 'react-query';
import AxiosInstance from './Interceptor'



export const fetch = async (config) => {
    const data= await AxiosInstance(config);
    return data ;   
  }



  export const base={
   baseURL:'https://api.disneyapi.dev/'
  //baseURL:'http://192.168.1.160:5001/'
   
    ,headers:{'Content-Type':'application/json'}}
export const get={method:'get'}
export const post={method:'post'}


export const apiGetCharacterList = (pageNumber) => ({ url: `/characters?page=${pageNumber}`,...base, ...get})
export const apiGetCharacter = (id) => ({ url: `/characters/${id}`,...base, ...get})

export async function GetCharacterList(pageNumber)
{
  console.log("PAge number changed",pageNumber);
    var data=await fetch(apiGetCharacterList(pageNumber));
   return data;
}

export async function GetCharacter(id)
{
    var data=await fetch(apiGetCharacter(id));
   return data;
}