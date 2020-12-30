"# photoVerifyApp" 
npm install express --save
npm install axios --save
npm install cors --save

to start server api:
node app.js

Gcloud Deployment: 
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


