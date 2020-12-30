"# photoVerifyApp" 
npm install express --save
npm install axios --save
npm install cors --save

to start server api:
node app.js

Gcloud Deployment: 
https://cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service
https://photoverifyapp-dot-prachigcloud.df.r.appspot.com/


AWS Elasticbeanstalk deployment
http://node-express-env.eba-rdaqcccp.us-east-2.elasticbeanstalk.com/
Sample: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs_express.html
Step1: eb init --platform node.js --region us-east-2
Step2: eb create --sample node-express-env
Step3: create .ebextensions/nodecommand.config 
Step4: for static files .ebextensions/staticfiles.config
Step5: git add. and git commit 
Step6: eb deploy 
Step7: eb open
Step8: eb logs

Note*: Elasticbeanstalk uses nginx as reverse proxy server. Always look for eb logs, in this scenario nginx is passing
request to port 8081 and hence i needed to change my node server to port 8081.

Also I was getting Http 413 error due to the size of the request body. The deafutl nginx size was small 
and hence i have to configure that by setting client_max_body_size 20M; in 01_files.config file  under .ebextentions.



