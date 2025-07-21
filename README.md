# rat-catcher

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.15. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

pm2 start index.ts --name rat-catcher-backend --interpreter bun

pm2 list

pm2 save

pm2 stop rat-catcher-backend

pm2 restart rat-catcher-backend

pm2 reload rat-catcher-backend // for zero downtime

pm2 delete rat-catcher-backend

logs 
    pm2 logs rat-catcher-backend
    # or to stream logs live:
    pm2 logs rat-catcher-backend --raw
    # view last 100 lines of logs:
    pm2 logs rat-catcher-backend --lines 100


# Thresh
 
 20:00 -> 200000