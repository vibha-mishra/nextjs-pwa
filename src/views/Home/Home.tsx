import Link from "next/link";
import './Home.css';


const HomePage: React.FC = () => {
 return (
   <div className="mainContainer">
     <Link href="/products">
     <button
       className="welcomeButton"
     >
       Welcome - Go to Products
     </button>
     </Link>
   </div>
 );
}

export default HomePage;
