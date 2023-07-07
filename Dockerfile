FROM postgres:14.3

ENV POSTGRES_PASSWORD=123456
ENV POSTGRES_DB=postgres
COPY . /var/lib/postgresql