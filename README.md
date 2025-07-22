# 🐀 rat-catcher

A lightweight motion detection and recording for your laptop powered by [Bun](https://bun.sh). 

---

## 🚀 Getting Started

### Install Dependencies

```bash
bun install
```

### Run in Development

```bash
bun run index.ts
```

Then, open `index.html` in your favorite browser.

---

## 📦 Run in Production (Using PM2)

PM2 helps manage your backend in production by auto-starting on system boot and restarting if it crashes.

1. Install PM2 globally:

```bash
bun install pm2 -g
```

2. Start the backend with PM2:

```bash
pm2 start index.ts --name rat-catcher-backend --interpreter bun
pm2 save
```

3. Open `index.html` in your browser.

---

## ⚙️ Configuration

To adjust motion sensitivity, update the following line in your code:

```ts
const threshold = 200000; // Adjust threshold for motion detection as needed
```

---

## 📋 PM2 Command Reference

| Task | Command |
|------|---------|
| View process list | `pm2 list` |
| Save current process list | `pm2 save` |
| Stop the backend | `pm2 stop rat-catcher-backend` |
| Restart the backend | `pm2 restart rat-catcher-backend` |
| Delete the backend process | `pm2 delete rat-catcher-backend` |
| View logs | `pm2 logs rat-catcher-backend` |
| Stream logs live | `pm2 logs rat-catcher-backend --raw` |
| View last 100 lines of logs | `pm2 logs rat-catcher-backend --lines 100` |
