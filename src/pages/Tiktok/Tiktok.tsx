import React from 'react'
import { useParams } from 'react-router-dom'
import {Tiktok as TiktokComponent} from "../../components/Tiktok/Tiktok"
export const Tiktok = () => {
    const params = useParams();
    const {id=""} = params;
  return (
    <TiktokComponent id={id} />
  )
}
