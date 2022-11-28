import { useContext } from 'react';
import './stories.scss';
import { AuthContext } from '../../context/authContext';

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: 'John Doe',
      img: 'https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80',
    },
    {
      id: 2,
      name: 'John Doe',
      img: 'https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80',
    },
    {
      id: 3,
      name: 'John Doe',
      img: 'https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80',
    },
    {
      id: 4,
      name: 'John Doe',
      img: 'https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80',
    },
  ];

  return (
    <div className='stories'>
      <div className='story'>
        <img src={currentUser.profilePic} alt={currentUser.name} />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => {
        return (
          <div className='story' key={story.id}>
            <img src={story.img} alt={story.name} />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
