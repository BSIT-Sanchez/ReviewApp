import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    return(
        <div className='w-full h-screen '>
          <Header/>
          {children}
          <Footer/>
         

        </div>

       
    )
}
export default Layout;