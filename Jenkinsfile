pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
      
       stage('Checkoutldp_RWA') {
        steps {
            sh 'mkdir -p ldp_RWA'
            dir("ldp_RWA")
            {
                git branch: "master",
                credentialsId: 'Gul224',
                url: 'https://github.com/Gul224/Gul-ldp-RWA'
            }
        }
    }
        }
   
}
