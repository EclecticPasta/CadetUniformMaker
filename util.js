function isBetween(cmp,a,b){
  if(a>b){
    [a,b] = [b,a];
  }
  return (cmp>a && cmp<b);
}

function toColour(r,g,b){
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}
