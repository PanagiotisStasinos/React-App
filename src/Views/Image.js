import React, { useState, useEffect } from "react";
import axios from "axios";

function Image(){
    const url = "http://localhost:8080/product/image";
    const [base64, setBase64] = useState();

    useEffect(() => {
        axios
          .get(
            url,
            {
              responseType: "arraybuffer",
            }
          )
          .then((response) =>
            setBase64(Buffer.from(response.data, "binary").toString("base64"))
          );
      }, []);

    console.log(base64)

    if(base64){
        return(
            <img src={`data:image/jpeg;charset=utf-8;base64,${base64}`} />
        )
    }

}

export default Image;