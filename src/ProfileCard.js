function ProfileCard({title, handle, image, content}) {
    
    // const title = props.title;
    // const handle = props.handle;

    // This is the same as the 2 lines of code above
    // const {title,handle} = props;

    // ({title,handle}) is the same as the code above and much simpler to use 
    // since we don't use the props object throughout the whole project

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                <img src = {image} alt = "pda logo"/>
                </figure>
            </div>

            <div className ="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">{content}</div>
            </div>
        </div>
    );
}

export default ProfileCard;