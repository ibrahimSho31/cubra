import { useNavigate } from "react-router-dom";

function Subed(){
    const navigate = useNavigate();
    function handleClickk(){

        navigate("/all");
  };
    return(
        <section className="subed">
        <div className="fp">
          <h1>Thanks for Subscribing!🫶</h1>
          <h1>See you soon friend!</h1>
          <h2 className="imp animate__heartBeat">imposter!</h2>
            <button onClick={handleClickk}>Click me to go back</button>
        </div>
      </section>
    )
}

export default Subed