import CardSocial from './CardSocial'
import { socialCards } from '../data/socialCards'

function SocialCards() {
	return (
		<section 
	    className="py-16 grid justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-4">
			{
				socialCards.map((props, index) => (
		      <CardSocial
		        key={index}
		        title={props.title}
		        total={props.total}
		        deltaToday={props.deltaToday}
		        className={props.className}
		        logo={props.logo}
		    	/>
		  	)
		  )
		}
		</section>
	)
}

export default SocialCards
