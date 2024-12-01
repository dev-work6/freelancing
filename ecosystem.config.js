module.exports = {
  apps: [
    {
      name: "freelance-work-showcase",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: "max", // or a number like 4
      exec_mode: "cluster",
      watch: false,
      env: {
        PORT: 3000,
        NODE_ENV: "production",
        MONGODB_URI: "mongodb+srv://freelance-work:xpScjxf7HRsyAvkJ@cluster0.lerhb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        JWT_SECRET: "WMDK2o84mzyjjVxw62XQhhcUoQpAoE8liaxQYx7j9k8=",
        NEXT_PUBLIC_URL: "http://localhost:3000",
        STRIPE_SECRET_KEY: "sk_test_51OD2eSSJmebnkMf3aTDjpc1JEJFNFUHYqDdhyhDkgnxvi4iDBsPOk5pF5TVXKnIRQsq8uDQFjlkXELdNAUBxPtn600SsNcJNPj",
        STRIPE_PUBLISHABLE_KEY: "pk_test_51OD2eSSJmebnkMf3X8UzFLEDbqUCTJwH9L73xdviSzgFh0p0Ftb0l2jZZnic3kR3ZC86Gi1aadGU2OIra5Uu4Bdj00cawn5T0S",
        SMTP_HOST: "smtp.gmail.com",
        SMTP_PORT: "465",
        SMTP_USER: "daimdev6@gmail.com",
        SMTP_PASSWORD: "ecxuykkebmobzclv",
        SMTP_FROM_EMAIL: "daimdev6@gmail.com"
      },
      env_production: {
        NODE_ENV: "production"
      },
      error_file: "logs/err.log",
      out_file: "logs/out.log",
      log_file: "logs/combined.log",
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: "5s",
      max_memory_restart: "1G"
    }
  ]
};
