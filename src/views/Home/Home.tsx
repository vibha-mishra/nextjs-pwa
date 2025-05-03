import Link from "next/link";
import './Home.css';
// import { usePWAInstallPrompt } from "../../hooks/usePWAInstallPrompt";
import InstallAppButton from "../../components/InstallAppButton/InstallAppButton";


const HomePage: React.FC = () => {
  // usePWAInstallPrompt()
 return (
  <div className="mainContainer">
  
    <InstallAppButton />
   <div className="welcomeMainContainer">
     <Link href="/products">
     <button
       className="welcomeButton"
     >
       Welcome - Go to Products
     </button>
     </Link>
   </div>
   </div >
 );
}

export default HomePage;
