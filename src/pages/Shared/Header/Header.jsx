import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mt-8' src={logo} alt="" />
            <p className='text-xl italic mt-4 mb-2'>Journalism Without Fear or Favour</p>
            <p className='text-gray-400'>{moment().format("dddd, MMMM Do, YYYY")}</p>
        </div>
    );
};

export default Header;