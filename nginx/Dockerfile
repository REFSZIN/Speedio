# Define the base image
FROM nginx:latest

# Remove the default configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/

# Expose port 80 for incoming traffic
EXPOSE 80