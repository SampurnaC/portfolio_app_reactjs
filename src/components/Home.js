// import logo from '/download.jpeg';

const Home = () => {
  let myStyle = {
    textAlign: 'center',
    color: "white",
    position: "absolute",
    
    top: "50%",
    left: "50%",
    marginLeft: "-220px",
    marginTop: "-25px",
    fontSize: "60px"
}


  return (
    <div>
      <h1 style={myStyle}>Hello, I am Sam</h1>
      <img className="Header-logo" src="/images/download.jpeg" alt="Logo" style={{width: "100%"}}/>
    </div>
  );
}
 
export default Home;