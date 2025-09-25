# Sử dụng Node.js official image (nhẹ hơn và ổn định hơn)
FROM node:18-alpine

# Tạo thư mục làm việc
WORKDIR /app

# Copy package files trước (để tận dụng Docker cache)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .

# Tạo user non-root để bảo mật
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Chuyển ownership cho user nodejs
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expose port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node healthcheck.js || exit 1

# Start application
CMD ["node", "index.js"]