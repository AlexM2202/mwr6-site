import { useEffect } from "react";

function Home(){
    useEffect(() => {
        const embedIfLive = async () => {
            /*checks if the embed does not already exists, and then checks if live
            and if so, then embeds stream */
            let existingTwitchEmbed = document.getElementById("twitch-embed");
            if (!existingTwitchEmbed) {
                const homeDiv = document.querySelector(".Home");
                const div = document.createElement("div");
                div.id = "twitch-embed";
                homeDiv.appendChild(div);

                let response = await fetch("https://decapi.me/twitch/uptime/midwestr6");
                if (!((await response.text()).includes("midwestr6"))) {
                    const script = document.createElement('script');
                    script.src = "https://embed.twitch.tv/embed/v1.js";
                    script.async = true;

                    script.onload = () => {
                        new window.Twitch.Embed("twitch-embed", {
                            width: "60%",
                            height: 625,
                            channel: "midwestr6",
                            layout: "video",
                        });
                    };
                    document.body.appendChild(script);
                }
            }
        };
        embedIfLive();
    }, []);

    return (
        <div className="Home"></div>
    );
}

export default Home;