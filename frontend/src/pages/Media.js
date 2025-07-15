import './Media.css'

function Media(){
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
    
    return (
        <div className="Media">
            <div id="twitch-embed"></div>
            <div id="partner-schools">
                <h2>Partner Schools</h2>
                {/* Insert Partner School stuff here */}
            </div>
        </div>
    );
}

export default Media;