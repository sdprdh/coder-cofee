import {Navbar} from "./components/Navbar.jsx";
import {Hero} from './components/Hero.jsx'
import {FreshAndTastyCofee} from "./components/FreshAndTastyCofee.jsx";
import {OrderContact} from "./components/OrderContact.jsx";
import {DownloadApp} from "./components/DownloadApp.jsx";
import {Footer} from "./components/Footer.jsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <main className='overflow-x-hidden'>
                <Hero/>
                <FreshAndTastyCofee/>
                <OrderContact/>
                <DownloadApp/>
                <Footer/>
            </main>
        </>
    )
}


export default App;