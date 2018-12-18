dependencies:
selenium-standalone package. (which provides the selenium server for different browsers) 
please refer (https://www.npmjs.com/package/selenium-standalone) 

- Run yarn run test for running the bdd scripts:
    yarn run wdio -- --spec .src/features/opencart.feature
    or yarn run wdio to run all specs
    
- Run yarn run allure-generate to generate the allure (html) report
- Open the index.html inside the allure-reports to check the generated reports
