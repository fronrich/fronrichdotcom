# buld the project
yarn run build

# build the image
sudo docker build -t gcr.io/fronrichdotcom/fdc .

# push the image to container registry
sudo docker push gcr.io/fronrichdotcom/fdc