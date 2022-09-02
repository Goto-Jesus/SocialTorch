import Friend from "./Friend/Friend";

const friendsStyle = {
    display: 'flex',
    margin: '10px 0'
};


const FriendsList = (props) => {
    let friendElements = props.friends.map(friend => <Friend name={friend.name} />);

    return (
        <div style={friendsStyle}>
            {friendElements}
        </div>
    );
};

export default FriendsList;