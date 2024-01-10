function OverviewCard(props) {
	return (
    <article 
      className="card-status bg-light-grayish-blue p-6 rounded-lg max-w-sm w-full mx-auto dark:bg-dark-desaturated-blue">
      <h3 
        className="text-dark-grayish-blue text-lg dark:text-desaturated-blue">
        {props.title}
      </h3>
      <img 
        src={props.logo} 
        alt={'Icon' + props.title}
        className="justify-self-end" />

      <p
        className="text-3xl font-bold">
        {props.total}
      </p>

      {
      	props.percentage > 0 ?
	      <p
	        className="text-lime-green flex items-center justify-center font-bold gap-2">
	        <img src="./images/icon-up.svg" alt="Icon Up" />
	        {props.percentage}%
	      </p>
	      :
	      <p
	        className="text-bright-red flex items-center justify-center font-bold gap-2">
	        <img src="./images/icon-down.svg" alt="Icon Down" />
	        {props.percentage * -1}%
	      </p>
      }
    </article>		
	)
}

export default OverviewCard
