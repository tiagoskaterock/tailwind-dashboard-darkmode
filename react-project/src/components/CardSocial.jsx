import '../App.css'

function CardSocial(props) {
	return (
		<article 
      className={`${props.class} rounded-lg py-8 px-4 space-y-6 w-full max-w-md relative before:absolute before:inset-x-0 before:top-0 before:h-2 before:rounded-t-lg text-dark-grayish-blue dark:bg-dark-desaturated-blue bg-light-grayish-blue dark:text-desaturated-blue`}>
      <p className="flex items-center justify-center gap-2 font-bold">
        <img src={props.logo} alt="Facebook" />
        {props.title}
      </p>

      <div className="text-center">
        <h3
          className="text-4-xl text-very-dark-blue mb-2 dark:text-white">
          {props.total}
        </h3>
        <p className="text-xl uppercase">
          Followers
        </p>      
      </div>

      {
      	props.deltaToday > 0 ?
	      <p 
	        className="text-lime-green flex items-center justify-center font-bold gap-2">
	        <img src="/images/icon-up.svg" alt="Icon Up" />
	        {props.deltaToday} Today
	      </p> :
	      <p 
	        className="text-bright-red flex items-center justify-center font-bold gap-2">
	        <img src='/images/icon-down.svg' alt="Icon Down" />
	        {props.deltaToday * -1} Today
	      </p>


      }

    </article>
	)
}

export default CardSocial
