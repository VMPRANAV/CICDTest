pipeline {
    agent any
    
    environment {
        
        DOCKER_CREDS = credentials('docker-hub-credentials')

        IMAGE_NAME = "vmpranav15/hello-docker" 
    }
    
    tools {
       
        nodejs 'node' 
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                
                checkout scm
            }
        }
        
        stage('Install & Test') {
            steps {
                
                sh 'npm install'
               
            }
        }
        
        stage('Build Docker Image') {
            steps {
             
                sh "docker build -t ${IMAGE_NAME}:latest ."
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                
                sh 'echo $DOCKER_CREDS_PSW | docker login -u $DOCKER_CREDS_USR --password-stdin'
                
                sh "docker push ${IMAGE_NAME}:latest"
            }
        }
    }
    
    post {
        success {
            echo "🎉 CI Pipeline Complete! Your tested image is now on Docker Hub."
        }
        failure {
            echo "❌ Pipeline failed. Check the Jenkins console output to see what broke."
        }
    }
}