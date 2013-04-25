RunningStats = function( ){

  var _stats = {
    push: push,
    clear: clear,
    nvals: nvals,
    mean: mean,
    variance: variance,
    std_dev: std_dev,
    n: n
  };

  var n = 0, 
    prevMean = 0.0, 
    newMean = 0, 
    prevDev = 0, 
    newDev = 0;

  function push( x ){
    n++;
    if ( n == 1 ){
      prevMean = newMean = x;
      prevDev = 0.0;
    } else {
      newMean = prevMean + ( x - prevMean ) / n;
      newDev = prevDev + ( x - prevMean ) * ( x - newMean );
    
      prevMean = newMean; 
      prevDev = newDev;
    }
  }

  function clear(){
    n = 0;
  }

  function nvals(){
    return n;
  }

  function mean(){
    return (n > 0) ? newMean : 0.0;
  }

  function variance(){
    return ( ( n > 1 ) ? newDev/(n - 1) : 0.0 );
  }

  function std_dev(){
    return Math.sqrt( variance() );
  }

  return _stats;
};
