import '../App.css';

const date = new Date()


function Header(props) {
  return (
  
      <div className="head_text">
           {props.children}
         <p>{date.toString()}</p>
      </div>
  
  );
}

export default Header;

