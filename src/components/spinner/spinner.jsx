import React from "react";
import './spinner.css'
import  image from './img/pngwing.com.png'

export default function imageReload  () {

    return(
        <div className="imageRe" ><img src={image} alt="imagem" /><br/>Enviando...</div>
    )

 }