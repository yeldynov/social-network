import './profile.scss';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/Posts';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='images'>
        <img
          src='https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'
          alt=''
          className='cover'
        />
        <img
          src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
          alt=''
          className='profilePic'
        />
      </div>
      <div className='profileContainer'>
        <div className='uInfo'>
          <div className='left'>
            <a href='http://facebook.com'>
              <FacebookTwoToneIcon fontSize='large' />
            </a>
            <a href='http://facebook.com'>
              <InstagramIcon fontSize='large' />
            </a>
            <a href='http://facebook.com'>
              <TwitterIcon fontSize='large' />
            </a>
            <a href='http://facebook.com'>
              <LinkedInIcon fontSize='large' />
            </a>
            <a href='http://facebook.com'>
              <PinterestIcon fontSize='large' />
            </a>
          </div>
          <div className='center'>
            <span>Nico Crabb</span>
            <div className='info'>
              <div className='item'>
                <PlaceIcon />
                <span>Kharkiv, Ukraine</span>
              </div>
              <div className='item'>
                <LanguageIcon />
                <span>yeldynov-dev.netlify.app/</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className='right'>
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
