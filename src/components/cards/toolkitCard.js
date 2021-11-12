import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ToolKit() {
    const [toolkit, setToolkit] = useState([]);

    useEffect(() => {
        const toolkit = async () => {
            const response = await axios("https://bgardner-resume.herokuapp.com/api/users");
            setToolkit(response.data);
            
        };
        toolkit();
        
    }, []);


const getToolKit = toolkit.map((toolkit) => {
    const tools = toolkit.toolkit;
    return(

        tools.map((tool) => {
            return (
                <div className="col-6"><p>{tool}</p></div>
                
            )
        })
        
    )
})
    return (
              <div className="row">
                    {getToolKit}
              </div>
    )
}

export default ToolKit;