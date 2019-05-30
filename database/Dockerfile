FROM mongo
COPY seed.json /seed.json
CMD mongoimport --host database --db airbnb-booking --collection listings --type json --file /seed.json --jsonArray