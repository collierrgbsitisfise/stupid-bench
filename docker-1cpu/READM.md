## Build docker image

```
docker build -t <imageName> .
```

## Run docker container (none cluster mode)

```
docker run -it --rm -e -p 3000:3000 <imageName>
```

### Test Results for CPU heavy endpoint

#### command

```
artillery quick --count 2 -n 10 http://localhost:3000/cpu
```

#### results 

```
All virtual users finished
Summary report @ 13:42:27(+0300) 2020-08-01
  Scenarios launched:  2
  Scenarios completed: 2
  Requests completed:  20
  Mean response/sec: 0.43
  Response time (msec):
    min: 2379.4
    max: 4667.7
    median: 4621.8
    p95: 4663.9
    p99: 4667.7
  Scenario counts:
    0: 2 (100%)
  Codes:
    200: 20
```

### Test Results for CPU heavy endpoint

#### command

```
artillery quick --count 10 -n 20 http://localhost:3000/noneblocking
```

#### results


```
Summary report @ 13:46:49(+0300) 2020-08-01
  Scenarios launched:  10
  Scenarios completed: 10
  Requests completed:  200
  Mean response/sec: 12.96
  Response time (msec):
    min: 105.5
    max: 1203.9
    median: 606.2
    p95: 1132.4
    p99: 1186
  Scenario counts:
    0: 10 (100%)
  Codes:
    200: 200
```

<hr/>

## Run docker container (cluster mode)

```
docker run -it --rm -e MODE="cluster" -p 3000:3000 <imageName>
```


### Test Results for CPU heavy endpoint

#### command

```
artillery quick --count 2 -n 10 http://localhost:3000/cpu
```

### results

```
All virtual users finished
Summary report @ 13:35:46(+0300) 2020-08-01
  Scenarios launched:  2
  Scenarios completed: 2
  Requests completed:  20
  Mean response/sec: 0.43
  Response time (msec):
    min: 2304.1
    max: 4607.1
    median: 4591.8
    p95: 4605.8
    p99: 4607.1
  Scenario counts:
    0: 2 (100%)
  Codes:
    200: 20
```

### Test Results for none blocking endpoint

### command

```
artillery quick --count 10 -n 20 http://localhost:3000/noneblocking
```


### results

```
All virtual users finished
Summary report @ 13:37:48(+0300) 2020-08-01
  Scenarios launched:  10
  Scenarios completed: 10
  Requests completed:  200
  Mean response/sec: 12.55
  Response time (msec):
    min: 111.7
    max: 1625.1
    median: 678.3
    p95: 1187.9
    p99: 1480
  Scenario counts:
    0: 10 (100%)
  Codes:
    200: 200
```


### Conclusion

There is no significat impact of clustering on one CPU core env. It is not recommended to use cluster mode in case of only one CPU core available !

***best solution when using Docker is to keep as fewer processes per container as possible since containers are lightweight; you don't want processes trying to use more than one CPU. So, running a cluster in the container won't add any value and might worsen latency.***

https://stackoverflow.com/questions/28547993/docker-containers-and-node-js-clusters

https://medium.com/@CodeAndBiscuits/understanding-nodejs-clustering-in-docker-land-64ce2306afef#.9x6j3b8vw

https://devops.stackexchange.com/questions/447/why-it-is-recommended-to-run-only-one-process-in-a-container

https://stackoverflow.com/questions/28108504/maximum-number-of-node-js-processes-in-cluster-mode

https://amagiacademy.com/blog/posts/2020-02-26/node-container-cpu
