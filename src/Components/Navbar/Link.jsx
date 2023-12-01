import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div className=' flex pb-2  justify-center '>
           <ul className='w-32     md:transparent flex justify-center rounded'>
           <li className="list-none mx-6 text-lg  font-bold" key={route.id}><a className='text-white text-yellow-300' href={`route.path`}>{route.name}</a></li>
           </ul>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object
}
export default Link;