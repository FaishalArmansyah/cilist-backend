pipeline {
  agent any
  environment {
        REGISTRY = '128532453810.dkr.ecr.ap-southeast-1.amazonaws.com'
        APPS = 'cilist-backend'
  }
    stages{
      stage('Build with Docker') {
        steps {
          sh "docker build -f Dockerfile -t ${REGISTRY}/${APPS}:${GIT_BRANCH}-${BUILD_NUMBER} -t ${REGISTRY}/${APPS}:${GIT_BRANCH}-latest ."
        }
      }
      stage('Publish Docker Image') {
        steps {
          sh "docker push ${REGISTRY}/${APPS}:${GIT_BRANCH}-${BUILD_NUMBER}"
          sh "docker push ${REGISTRY}/${APPS}:${GIT_BRANCH}-latest"
        }
      }
      
    }
    post {
        always {
            echo 'One way or another, I have finished'
            deleteDir()
        }
        success {
            echo 'I succeeded!'
        }
        failure {
            echo 'I failed :('
        }
    }
}
