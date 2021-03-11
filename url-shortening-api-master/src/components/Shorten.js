import React,{useContext} from 'react'
import './Shorten.scss'

import Button from './Button'
import {AppContext} from '../components/AppContext'

function Shorten() {
    const [link,setLink] = useContext(AppContext)
    const baseURL = ` https://api.shrtco.de/v2/shorten?url=${link}`

    const onLinkChange = (e)=> {
        setLink(e.target.value);
    }
    const fetchAPI = async() => {
        try{
            const result = await fetch('https://api-ssl.bitly.com/v4/shorten', {method: 'POST', headers: {
                'Authorization': '262a3116cf5af582958009fe8d1e570383ccf4cb',
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ "long_url": `${link}` , "domain": "bit.ly",})});
            const data = await result.json();

            setLink(data.id);
        }
        catch(err){
            setLink('');
        }
    }
    const copyToClipboard = () => {
        navigator.clipboard.writeText(link)
    }

    return (
        <div className="shorten">
            <div className="input">
                <input onChange={onLinkChange} type="text" placeholder="Shorten a link here..." value={link} />
                <i onClick = {()=>{copyToClipboard()}} class="far fa-clipboard"></i>
            </div>
            <div className="right">
                <div onClick={()=>{fetchAPI()}} className="button">
                    <Button name="Shorten it!" />
                </div>
                <i onClick = {()=>{copyToClipboard()}} class="far fa-clipboard"></i>
            </div>
        </div>
    )
}

export default Shorten;
