import '../App.css';
import SocialCards from './SocialCards'
import SocialCardsHeader from './SocialCardsHeader'
import OverviewCards from './OverviewCards'

function Main() {
	return (
		<main className="w-[90%] max-w-screen-xl mx-auto overflow-hidden py-16">
	    
	    <SocialCardsHeader />

	    <SocialCards />
	    
	    <OverviewCards />
	    
	  </main>
	)
}

export default Main
