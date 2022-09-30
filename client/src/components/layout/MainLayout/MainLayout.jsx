import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default MainLayout;
