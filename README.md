Running Stats 
----------

A simple lib for calculating mean, variance, and standard deviation from a stream of values. 

all code taken from: [http://www.johndcook.com/standard_deviation.html](http://www.johndcook.com/standard_deviation.html)

## Usage 

```javascript 
    var stats = RunningStats();

    stats.push(1); 
    stats.push(2); 
    stats.push(10); 
    stats.push(100); 

    stats.mean();

    stats.variance();
    
    stats.std_dev();
```

## Installing & Testing 

```
  npm install
  grunt    
```
