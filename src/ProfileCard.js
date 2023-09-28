function ProfileCard({title,handle}) {
    // const title = props.title;
    // const handle = props.handle;

    // This is the same as the 2 lines of code above
    // const {title,handle} = props;

    return (
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    );
}

export default ProfileCard;