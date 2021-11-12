import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Feed from "./feed.component.js";

const Instagram = ({token, ...props}) => {
  const [feeds, setFeedsData] = useState([])
  const tokenProp = useRef(token);
  tokenProp.current = token;
  useEffect(() => {

    const abortController = new AbortController();

    async function fetchInstagramPost () {
      try{
        axios
          .get(`https://graph.instagram.com/17841431855728405/media?access_token=${token}&fields=id,media_type,media_url,caption,permalink,timestamp,username&limit=${props.limit}`)
          .then((resp) => {
            setFeedsData(resp.data.data)
          })
      } catch (err) {
        console.log('error', err)
      }
    }

    fetchInstagramPost();

    return () => {
      abortController.abort()
    };
  }, [props.limit])
  return(
    <div className="ig-container">
      {feeds.map((feed => (
        <Feed key={feed.id} feed={feed}/>
      )))}
    </div>
  )
}


export default Instagram;