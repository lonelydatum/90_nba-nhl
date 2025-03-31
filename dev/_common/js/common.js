import {olg} from "./proline"
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
	ease: "power3.out"
});

const {w, h} = size

const nhl = {
	t1: 2.2,
	t2: 1.2,
	t3: 1,
}

const  nba = {
	t1: 3,
	t2: 1.2,
	t3: 1,
}


let READ = {
nhl,nba
}


READ = READ[universalBanner.name]
console.log(READ);



function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	return tl
}



function stag(vh){
	return { duration:.3, opacity:0, stagger: .1, ...vh }
}



function start_landscape(vh={x:-size.w}){
	const tl = init()	
	tl.add("start")

	 
	tl.from('.t1', stag(vh), "start+=.3");	
	tl.from('.logo', {opacity:0, duration:.3});	
	tl.to([".t1", ".bars", ".logo"], {duration:.3, opacity:0}, `+=${READ.t1}`)
	
	// const barTL2 =barOptions2.verHor==="h" ? animate_bars_vertical(barOptions2) : animate_bars_horizontal(barOptions2)
	// tl.add(barTL2, "end")	
	
	

	tl.from(".end_txt1", {duration:.2, opacity:0})

	
 

	tl.from([".end_cta", ".legalBtn",  ".end_logo", ".end_smart"], {duration:.3, opacity:0})
	
	tl.add(olg())
}

function start(boo=true, vh={x:-size.w}){
	const tl = init()		
	
	if(boo){
		TweenLite.to(".hero img", {duration:2.5, x:0, y:0, scale:.5, delay:.2, ease:"power2.in"})	
	}
	
	tl.from('.t1', stag(vh), "start");		
	tl.to('.t1', {duration:.3, opacity:0}, `+=${READ.t1}`);		

	tl.from('.t2', stag(vh));	
	

	tl.to('.frame2', {opacity:1, duration:.3}, `+=${READ.t2}` );		


	tl.from('.end_logo', {duration:.3, opacity:0});	

	tl.from('.end_txt1', {duration:.3, opacity:0});	
	tl.from('.end_txt2', {duration:.3, opacity:0}, "+=.3");	

	tl.from([".end_cta", ".end_smart"], {duration:.3, opacity:0});	


	
 
	
	
	tl.add(olg())
}




export {size, init, start, start_landscape}



