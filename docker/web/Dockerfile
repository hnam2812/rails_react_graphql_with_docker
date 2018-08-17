FROM ruby:2.5.1

RUN apt-get update && \
    apt-get install -y curl apt-transport-https wget && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    yarn \
    graphviz \
    supervisor \
    nginx \
    ca-certificates \
    cron \
    libmagic-dev \
    less \
    libpq-dev

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    apt-get install nodejs && \
    rm -rf /var/lib/apt/lists/*

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list \
    && apt-get update && apt-get -y install \
    x11vnc \
    xvfb \
    fluxbox \
    wmctrl \
    google-chrome-stable

RUN mkdir /app
COPY . /app

ENV GEM_HOME /app/vendor/bundle
ENV BUNDLE_PATH /app/vendor/bundle
ENV BUNDLE_BIN /app/vendor/bundle/bin
ENV PATH $BUNDLE_BIN:$BUNDLE_PATH/gems/bin:$PATH

COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

WORKDIR /app
