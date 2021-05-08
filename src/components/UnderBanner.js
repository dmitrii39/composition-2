import '../App.css';




function UnderBanner(props) {
  return (
  
      
        <div>
          <h3>{props.title}</h3>
            {props.children}
        </div>
   
       
      
      
 
  );
}

export default UnderBanner;

