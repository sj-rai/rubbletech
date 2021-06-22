import React, {useEffect} from "react";

export default function Chat(props){
    useEffect(() => {
        window.watsonAssistantChatOptions = {
            integrationID: "04c5bd6f-a8ea-447c-815b-231a34cd361a", // The ID of this integration.
            region: "eu-gb", // The region your integration is hosted in.
            serviceInstanceID: "4de60bfc-6955-4b0b-b786-88c419a8a543", // The ID of your service instance.
            onLoad: function(instance) { instance.render(); }
        };
        setTimeout(function(){
            const t=document.createElement('script');
            t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
            document.head.appendChild(t);
        });

    });
    return(
        <div></div>
    )
}
