import React from 'react'

const Feed = (props) => {
    const { id, caption, media_type, media_url, username, permalink} = props.feed
    let post;

    switch (media_type) {
        case "VIDEO":
            post = (
                <video
                    width='100%'
                    height='auto' 
                    src={media_url} 
                    type="video/mp4" 
                    controls playsinline>
                </video>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <img 
                    width='100%'
                    height='auto'
                    id={id} 
                    src={media_url} 
                    alt={caption} 
                />
            );
            break;
        default:
            post = (
                <div>
                    <a className="single-ig" href={permalink}>
                    <img 
                    width='100%'
                    height='auto'
                    id={id} 
                    src={media_url} 
                    alt={caption} 
                />
                <div className="text-center ig-meta-container">
                <p className="following" style={{marginBottom: "0px"}}>Follow me</p>
                    <h4>@{username}</h4>
                </div>
                    </a>
                </div>
            );
    }       

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Feed;