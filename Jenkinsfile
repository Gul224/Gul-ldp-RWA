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
        node('ATLAS && Linux') {
    dir('CalibrationResults') {
        git url: 'https://github.com/AtlasBID/CalibrationResults.git'
    }
    dir('Combination') {
        git url: 'https://github.com/AtlasBID/Combination.git'
    }
    dir('CombinationBuilder') {
        git url: 'https://github.com/AtlasBID/CombinationBuilder.git'
    }

    sh('ls')
    sh('. CombinationBuilder/build.sh')
}

        }
    }
}
