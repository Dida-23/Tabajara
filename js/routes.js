angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.cart', {
    url: '/cart',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

  .state('menu.cloudAzure', {
    url: '/cloudazure',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloudAzure.html',
        controller: 'cloudAzureCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/assinar',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu.produto', {
    url: '/produto',
    views: {
      'side-menu21': {
        templateUrl: 'templates/produto.html',
        controller: 'produtoCtrl'
      }
    }
  })

  .state('menu.serviO', {
    url: '/servico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/serviO.html',
        controller: 'serviOCtrl'
      }
    }
  })

  .state('menu.empresa', {
    url: '/empresa',
    views: {
      'side-menu21': {
        templateUrl: 'templates/empresa.html',
        controller: 'empresaCtrl'
      }
    }
  })

  .state('contato', {
    url: '/Contato',
    templateUrl: 'templates/contato.html',
    controller: 'contatoCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/servico')

  

});