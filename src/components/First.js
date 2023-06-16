import { useNavigate } from "react-router-dom";

function First() {
  const navigate = useNavigate();

  const handleClick = () => {
    const passwordInput = document.querySelector(".password");
    const imposter = document.querySelector(".imp");
    const nameInput = document.querySelector(".name");


    if(nameInput.value =  "bomi"  &&  passwordInput.value == "mecubra"){
        navigate("/all");
    }   else if(nameInput.value =  "lani" && passwordInput.value == "shoks"  ){
        navigate("/all");
    }   else if( nameInput.value  = "ife" && passwordInput.value == "oye"){
        navigate("/all");
    }   else if(nameInput.value = "kuye" && passwordInput.value ==  "clinton" ){
        navigate("/all");
    }   else{
        imposter.style.display = "block";
    }
  };


  return (
    <section className="first-page">
      <div className="fp">
        <h1>Who're you? 🧐</h1>
        <input placeholder="Name" className="name" required />
        <input placeholder="Password" className="password" required />
        <h2 className="imp animate__heartBeat">imposter!</h2>
        <button onClick={handleClick} className="animate__animated animate__rubberBand">Access Family</button>
      </div>
    </section>
  );
}

export default First;
