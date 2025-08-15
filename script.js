function mincost(arr)
{ 
    let a=[...arr].sort((a,b)=>a-b);
	let n=a.length;
	let cost=0;
	while(n>1){
		let first=a.shift;
		let second=b.shift;
		let newrope=first+second;
		let cost+=newrope;
		a.push(newrope);
		a.sort((a,b)=>a-b);
	}
	return cost;
}
module.exports=mincost;
