const avatarDefault = {
    flexWrap: 'wrap',
    fontSize: '20px',
    width: '30px',
    height: '30px',
    textAlign: 'center',
    padding: '8px',
    margin: '2px',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '100%'
};

const fontName = {
    color: 'black',
    textAlign: 'center',
    width: '100%'
};

const Friend = (props) => {
    let name = props.name;
    let f = name.charAt(0).toUpperCase();
    return (
        <div><div style={avatarDefault}>{f}</div><div style={fontName}>{name}</div></div>
    );
};

export default Friend;