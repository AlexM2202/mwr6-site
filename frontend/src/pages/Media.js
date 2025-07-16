import { useEffect } from "react";
import './Media.css'

function Media(){
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://embed.twitch.tv/embed/v1.js";
        script.async = true;

        window.onload = () => {
            new window.Twitch.Embed("twitch-embed", {
                width: "60%",
                height: 625,
                channel: "midwestr6",
                layout: "video",
            });
        }
        document.body.appendChild(script);
    }, []);

    const whitelistedSchools = [
        {
            name: 'Lindenwood University',
            img: '/whitelisted-school-media/lindenwood.png',
            twitch_link: "https://twitch.tv/LUEsports"
        },
        {
            name: 'Lindenwood University',
            img: '/whitelisted-school-media/lindenwood.png',
            twitch_link: "https://twitch.tv/LUEsports"
        },
        {
            name: 'Lindenwood University',
            img: '/whitelisted-school-media/lindenwood.png',
            twitch_link: "https://twitch.tv/LUEsports"
        },
        {
            name: 'Lindenwood University',
            img: '/whitelisted-school-media/lindenwood.png',
            twitch_link: "https://twitch.tv/LUEsports"
        },
        {
            name: 'Lindenwood University',
            img: '/whitelisted-school-media/lindenwood.png',
            twitch_link: "https://twitch.tv/LUEsports"
        }
    ]
    
    return (
        <div className="Media">
            <div id="twitch-embed"></div>
            <div id="whitelisted-schools">
                <h2>Whitelisted School Streams</h2>
                <div className="school-grid">
                    {whitelistedSchools.map((school, i) => (
                        <a target="_blank" rel="noopener noreferrer"
                            href={school.twitch_link}>
                            <div className="school-card" key={i}>
                                <img src={school.img} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Media;