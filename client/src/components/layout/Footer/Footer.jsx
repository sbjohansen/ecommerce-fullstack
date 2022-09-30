import {
  Facebook,
  Instagram,
  LocationOnOutlined,
  Pinterest,
  Twitter,
  LocalPhoneOutlined,
  EmailOutlined,
} from '@material-ui/icons';
import News from '../../features/News/News';
const Footer = () => {
  const socialIcons = 'm-3 rounded-full cursor-pointer p-2 text-white ';

  return (
    <div>
      <News />

      <div className="flex items-center justify-around p-2 mobile:flex-col text-white">
        <div className="flex-1 flex flex-col flex-wrap p-2 mobile:text-center">
          <h1 className="text-[25px] mobile:self-center"> Vano Spice Shop</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <div className="flex items-center justify-center mt-3 self-start mobile:self-center">
            <div className={socialIcons + `bg-blue-600`}>
              <Facebook />
            </div>
            <div className={socialIcons + `bg-orange-500`}>
              <Instagram />
            </div>
            <div className={socialIcons + `bg-sky-400`}>
              <Twitter />
            </div>
            <div className={socialIcons + `bg-red-700`}>
              <Pinterest />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-2">
          <div className="flex m-3">
            <LocationOnOutlined />
            <p className="pl-3">Bergen</p>
          </div>
          <div className="flex m-3">
            <LocalPhoneOutlined />
            <p className="pl-3">+47 123456789</p>
          </div>
          <div className="flex m-3">
            <EmailOutlined />
            <p className="pl-3">some@somewhere.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
