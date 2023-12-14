docker build --no-cache -f SQL\Dockerfile.PostgreSql -t vua-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t vua-java/app ../../..
