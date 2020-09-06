### Limit node process memory with
```node --max-old-space-size=<val> app.js```

### Build docker image 
```docker build -t memory-limits2 .```

### Run docker with memory limits
```docker run -p 3000:3000 -m <val>m -it memory-limits```

### Monitor docker
```docker stats```
