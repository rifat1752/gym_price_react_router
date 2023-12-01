import PropTypes from 'prop-types';

const PriceOption = ({priceOption}) => {
    const {name,img,price,gymFeatures} = priceOption;
   console.log(gymFeatures)
  return (
    <div className='flex justify-center'>
      <div className="card w-72 bg-stone-300 my-5 shadow-xl">
        <figure>
          <img className='w-full'
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="w-16 badge badge-secondary">{price}$</div>
          </h2>
          <div className="card-actions justify-end">
            {/* <div className="badge badge-outline">Fashion</div> */}
            {gymFeatures.map(feature=><div key={feature} className="badge badge-outline flex-grow">{feature}</div>)}
          </div>
          <button className="w-24 btn mt-5 justify-items-end   btn-info">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

PriceOption.propTypes ={
  priceOption: PropTypes.object.isRequired
}
export default PriceOption;
