# Demo code on AWS

## Version 1.0.00

## Deployed Sites

- [AWS deploy](http://cloudserver-env.eba-amy6gtpa.us-east-2.elasticbeanstalk.com/)

- [eb deploy](http://cloudserver2-env.eba-z5rk9zmi.us-east-2.elasticbeanstalk.com/)

- [github](https://github.com/vbchomp/cloud-server)

## Author

Heather Bisgaard, Software Engineer

## Collaborators

- Alex White, Instructor

## References

- AWS Docs

## Set Up Notes

1. Chose Basic Express Server and followed directions for upload. I never got a proof of life for my sites, but turnedin anyway to try and keep full points at a later date.

2. Ended up running up about $6 in charges due to load balancing because of having competing regions. Alex recommended blowing away all applications and environments and starting over using the class demo code.

3. Started with creating an application using sample code, then uploaded the zip file of class demo code. Was able to get proof of life with demo code.

4. Then tried creating an application using the file upload version.

5. Now I will create the application using the correctly named repo and get the correct links applied in this README.

6. Make sure to not include the node modules, .git, .env and package-lock.json in the zip files to upload.

7. Choose Node.js for the environment platform, and upload your code.

8. Tried to do the eb deploy and found that I am getting crazy charges on AWS. Talked with Alex and he recommended to terminate that application/environment.
