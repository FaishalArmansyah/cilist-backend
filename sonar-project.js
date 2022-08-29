//const sonarqubeScanner = require('sonarqube-scanner');
import sonarqubeScanner from 'sonarqube-scanner';
sonarqubeScanner({
  serverUrl: 'http://sonar.smallproject.my.id:9000',
  options : {
    'sonar.projectDescription': 'cilist-backend',
    'sonar.projectName': 'cilist-backend',
    'sonar.projectKey': 'cilist-backend',
    'sonar.login': '5b4e49ea33cff15ab60b97ab9d757dd6408c2dff',
    //'sonar.password': '.',
    'sonar.projectVersion': '1.0',
    'sonar.language': 'js',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.sources': '.',
    //'sonar.tests': 'specs',
    //'sonar.inclusions': 'src/**',
  }
}, () => {});
