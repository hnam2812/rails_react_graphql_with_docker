
# sekeleton_app

The skeleton app

# Setup local development environment
- Replace 'skeleton_app' and 'SKELETON_APP' by 'your app name'

- Install docker
- Install docker-compose
- Build images

  ```bash
  docker-compose build
  ```

- Bundle install

  ```bash
  docker-compose run --rm web bundle install --jobs=4
  ```

- Yarn install

  ```bash
  docker-compose run --rm web yarn install
  ```

- Create database

  ```bash
  docker-compose run --rm web bundle exec rake db:create
  ```

- Migrate database

  ```bash
  docker-compose run --rm web bundle exec rake db:migrate
  ```

- Start services

  ```bash
  docker-compose up
  ```

- Access `http://localhost/` on browser to check result

# Other commands

- Use `docker-compose run --rm web <command>` to run any commands in web service

  Ex

  ```bash
  docker-compose run --rm web bundle exec rubocop
  ```

- Access bash in web service

  ```bash
  docker-compose run --rm web sh
  ```

- Rebuild and run services in one command

  ```bash
  docker-compose up --force-recreate --build
  ```

  or

  ```bash
  docker-compose up --build
  ```

  Note: only rebuild if there is any change in `Dockerfile` or `docker-compose.yml`

# Docker deploy

- Install the `heroku-manifest` plugin from `beta` update channel

  ```bash
  heroku update beta
  heroku plugins:install @heroku-cli/plugin-manifest
  ```

- Create or add app

  ```bash
  heroku create your-app-name --manifest
  ```

- Set the `stack` to `container` (this part is important)

  ```bash
  heroku stack:set container
  ```
