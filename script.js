// DECLARATIONS
const co = document.querySelector('.co');
const claim = document.querySelector('.claim');
const header = document.querySelector('header');
//HOME
const casinoHome = document.querySelector('.casinoHome');
const hiddenHome = document.querySelector('.hiddenHome');
//OFFERS
const offer = document.querySelector('.offer');
const offer1 = document.querySelector('.offer1');
const offer2 = document.querySelector('.offer2');
const offer3 = document.querySelector('.offer3');
//SUBOFFERS
const subOffer1 = document.querySelector('.subOffer1');
const subOffer2 = document.querySelector('.subOffer2');
const subOffer3 = document.querySelector('.subOffer3');
//REVEAL BUTTON
const revealBtn1 = document.querySelector('.revealBtn1');
const revealBtn2 = document.querySelector('.revealBtn2');
const revealBtn3 = document.querySelector('.revealBtn3');
//DOLLAR IMAGES
const dollarIMG = document.querySelector('.dollarIMG');
const dollarIMG2 = document.querySelector('.dollarIMG2');
const dollarIMG3 = document.querySelector('.dollarIMG3');
//PICK H3
const pickH3 = document.querySelector('.pickH3');
//OFFER IMAGES
const offerIMG = document.querySelector('.offerIMG');
const offerIMG2 = document.querySelector('.offerIMG2');
const offerIMG3 = document.querySelector('.offerIMG3');

//FUNCTIONS
claim.addEventListener('click', function(){
	header.style.animation = 'fadeOut 1s';
	casinoHome.style.animation = 'cog3 1s';
    setTimeout(showHidden, 200);
});

function showHidden(){
	header.style.display = 'none';
	casinoHome.style.display = 'none';
	hiddenHome.style.animation = 'fadeIn 0.7s';
    hiddenHome.style.display = 'block';
    offer.style.animation = 'float 1s infinite';
	offer.style.animationTimingFunction = 'linear';
}


//SUBOFFER1 FUNCTION

subOffer1.addEventListener('click', clickOffer1);

function clickOffer1(){
	dollarIMG.style.display = 'none';
	pickH3.style.display = 'none';
	subOffer1.style.transform = 'rotate(30deg) scale(1.2)';
	subOffer1.style.background = 'white';
	subOffer1.style.border = '6px solid #B1B100';
	offerIMG.style.display = 'block';
	revealBtn1.style.display = 'block';
	revealBtn1.addEventListener('click', function (){
		dollarIMG2.style.display = 'none';
		pickH3.style.display = 'none';
		subOffer2.style.animation = 'cog2 1s';
		subOffer2.style.transform = 'scale(1.2)';
		subOffer2.style.background = 'white';
		subOffer2.style.border = '6px solid #B1B100';
		offerIMG2.style.display = 'block';
		revealBtn2.style.display = 'block';
	});
	revealBtn2.addEventListener('click', function (){
		dollarIMG3.style.display = 'none';
		pickH3.style.display = 'none';
		subOffer3.style.animation = 'cog2 1s';
		subOffer3.style.transform = 'rotate(-30deg) scale(1.2)';
		subOffer3.style.background = 'white';
		subOffer3.style.border = '6px solid #B1B100';
		offerIMG3.style.display = 'block';
		revealBtn3.style.display = 'block';
		revealBtn3.innerHTML = 'Reveal All';
	});
	revealBtn3.addEventListener('click', function (){
		revealBtn1.remove();
		revealBtn2.remove();
		revealBtn3.remove();

		offer.style.animation = 'fadeOut 1s';
		setTimeout(fadingOut, 500);
		function fadingOut(){
			co.innerHTML = 'CONGRATULATIONS!';
			co.style.borderTop = 'none';
			co.style.fontSize = '3em';
			co.style.animation = 'slideInFromTop 1s, float 1s infinite';
			hiddenHome.style.background = 'rgba(177, 177, 0, 0.19)';
			offer1.style.animation = 'slideInFromBottom 1s';
			offer2.style.animation = 'slideInFromBottom 1.5s';
			offer3.style.animation = 'slideInFromBottom 1.8s';
			offer1.style.marginTop = '40px';
			offer2.style.margin = '50px';
			offer3.style.marginTop = '40px';
			offer.style.transform = 'scale(0.7)';
		}
	});
}


//SUBOFFER2 FUNCTION

subOffer2.addEventListener('click', clickOffer2);

function clickOffer2(){
	dollarIMG2.style.display = 'none';
	subOffer2.style.transform = 'scale(1.2)';
	subOffer2.style.background = 'white';
	subOffer2.style.border = '6px solid #B1B100';
	offerIMG2.style.display = 'block';
	revealBtn2.style.display = 'block';
	revealBtn2.addEventListener('click', function (){
		dollarIMG3.style.display = 'none';
		subOffer3.style.animation = 'cog2 1s';
		subOffer3.style.transform = 'rotate(-30deg) scale(1.2)';
		subOffer3.style.background = 'white';
		subOffer3.style.border = '6px solid #B1B100';
		offerIMG3.style.display = 'block';
		revealBtn3.style.display = 'block';
	});
	revealBtn3.addEventListener('click', function (){
		dollarIMG.style.display = 'none';
		pickH3.style.display = 'none';
		subOffer1.style.transition = 'all 0.5s';
		subOffer1.style.transform = 'rotate(30deg) scale(1.2)';
		subOffer1.style.background = 'white';
		subOffer1.style.border = '6px solid #B1B100';
		offerIMG.style.display = 'block';
		revealBtn1.style.display = 'block';
		revealBtn1.innerHTML = 'Reveal All';
	});
	revealBtn1.addEventListener('click', function (){
		revealBtn1.remove();
		revealBtn2.remove();
		revealBtn3.remove();

		offer.style.animation = 'fadeOut 1s';
		setTimeout(fadingOut2, 500);
		function fadingOut2(){
			co.innerHTML = 'CONGRATULATIONS!';
			co.style.borderTop = 'none';
			co.style.fontSize = '3em';
			co.style.animation = 'slideInFromTop 1s, float 1s infinite';
			hiddenHome.style.background = 'rgba(177, 177, 0, 0.19)';
			offer1.style.animation = 'slideInFromBottom 1s';
			offer2.style.animation = 'slideInFromBottom 1.5s';
			offer3.style.animation = 'slideInFromBottom 1.8s';
			offer1.style.marginTop = '40px';
			offer2.style.margin = '50px';
			offer3.style.marginTop = '40px';
			offer.style.transform = 'scale(0.7)';
		}
	});
}

//SUBOFFER3 FUNCTION

subOffer3.addEventListener('click', clickOffer3);

function clickOffer3(){
	dollarIMG3.style.display = 'none';
	subOffer3.style.transform = 'rotate(-30deg) scale(1.2)';
	subOffer3.style.background = 'white';
	subOffer3.style.border = '6px solid #B1B100';
	offerIMG3.style.display = 'block';
	revealBtn3.style.display = 'block';
	revealBtn3.addEventListener('click', function (){
		dollarIMG2.style.display = 'none';
		subOffer2.style.animation = 'cog2 1s';
		subOffer2.style.transform = 'scale(1.2)';
		subOffer2.style.background = 'white';
		subOffer2.style.border = '6px solid #B1B100';
		offerIMG2.style.display = 'block';
		revealBtn2.style.display = 'block';
	});
	revealBtn2.addEventListener('click', function (){
		dollarIMG.style.display = 'none';
		pickH3.style.display = 'none';
		subOffer1.style.transition = 'all 0.5s';
		subOffer1.style.transform = 'rotate(30deg) scale(1.2)';
		subOffer1.style.background = 'white';
		subOffer1.style.border = '6px solid #B1B100';
		offerIMG.style.display = 'block';
		revealBtn1.style.display = 'block';
		revealBtn1.innerHTML = 'Reveal All';
	});
	revealBtn1.addEventListener('click', function (){
		revealBtn1.remove();
		revealBtn2.remove();
		revealBtn3.remove();

		offer.style.animation = 'fadeOut 1s';
		setTimeout(fadingOut2, 500);
		function fadingOut2(){
			co.innerHTML = 'CONGRATULATIONS!';
			co.style.borderTop = 'none';
			co.style.fontSize = '3em';
			co.style.animation = 'slideInFromTop 1s, float 1s infinite';
			hiddenHome.style.background = 'rgba(177, 177, 0, 0.19)';
			offer1.style.animation = 'slideInFromBottom 1s';
			offer2.style.animation = 'slideInFromBottom 1.5s';
			offer3.style.animation = 'slideInFromBottom 1.8s';
			offer1.style.marginTop = '40px';
			offer2.style.margin = '50px';
			offer3.style.marginTop = '40px';
			offer.style.transform = 'scale(0.7)';
		}
	});
}