function ProfileCard({title,handle}) {
    
    // const title = props.title;
    // const handle = props.handle;

    // This is the same as the 2 lines of code above
    // const {title,handle} = props;

    // ({title,handle}) is the same as the code above and much simpler to use 
    // since we don't use the props object throughout the whole project

    return (
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    );
}

export default ProfileCard;