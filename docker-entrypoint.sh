#!/bin/bash

# Exit on fail
set -e

# Bundle install
bundle install --jobs=4

# Yarn install
yarn install

# Remove puma pid if existed
rm -f tmp/pids/server.pid

# Start services
bundle exec foreman start -f Procfile.dev
# bundle exec rails server --port=3000 -b 0.0.0.0 --no-daemon --environment=development
# bin/webpack-dev-server

# Finally call command issued to the docker service
exec "$@"
