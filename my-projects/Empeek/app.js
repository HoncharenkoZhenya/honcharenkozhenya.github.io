var newsApp = angular.module('newsApp', []);

newsApp.controller('NewsAppController', function NewsAppController($scope) {
  // localStorage.clear()
  // Begin data for news
  var news = [
    {
      name: 'First item with custom name',
      isActive: false,
      comments: [
        {
          authorName: 'Lorem',
          comment: 'Lorem ipsum dolor sit amet ' +
          'consectetur adipisicing elit. Sint ducimus, ' +
          'expedita quaerat maxime hic. Aliquam sit perspiciatis ' +
          'debitis eveniet ipsum harum cum a nulla ullam, nam ' +
          'repudiandae sequi adipisci architecto.'
        },
        {
          authorName: 'Lorem2',
          comment: 'Lorem2 ipsum dolor sit amet ' +
          'consectetur adipisicing elit. Sint ducimus, ' +
          'expedita quaerat maxime hic. Aliquam sit perspiciatis ' +
          'debitis eveniet ipsum harum cum a nulla ullam, nam ' +
          'repudiandae sequi adipisci architecto.'
        },
        {
          authorName: 'Lorem3',
          comment: 'Lorem3 ipsum dolor sit amet ' +
          'consectetur adipisicing elit. Sint ducimus, ' +
          'expedita quaerat maxime hic. Aliquam sit perspiciatis ' +
          'debitis eveniet ipsum harum cum a nulla ullam, nam ' +
          'repudiandae sequi adipisci architecto.'
        }
      ]
    },
    {
      name: 'Second  item is active',
      isActive: true,
      comments: [
        {
          authorName: 'LoremE',
          comment: 'LoremE ipsum dolor sit amet ' +
          'consectetur adipisicing elit. Sint ducimus, ' +
          'expedita quaerat maxime hic. Aliquam sit perspiciatis ' +
          'debitis eveniet ipsum harum cum a nulla ullam, nam ' +
          'repudiandae sequi adipisci architecto.'
        }
      ]
    }
  ];

  // set localStorage
  if (!localStorage.getItem('news')) _safeToLocalStorege();;


  $scope.news = JSON.parse(localStorage.getItem('news'));

  $scope.addNews = function () {

    $scope.news.push({
      name: $scope.newNews,
      isActive: false,
      comments: []
    });

    _safeToLocalStorege();

    $scope.newNews = null;
  }

  $scope.addComment = function (item, newComment) {
    item.comments.push({
      authorName: 'UserName',
      comment: newComment
    });

    _safeToLocalStorege();
  }

  $scope.setActive = function (item) {
    _clearActiveNews();
    item.isActive = true;
    _safeToLocalStorege();
  }

  $scope.deleteItem = function (index) {
    console.log(index);
    $scope.news.splice(index, 1);
    _safeToLocalStorege();
  }

  function _clearActiveNews() {
    $scope.news = $scope.news.map(function (el) {
      el.isActive = false;
      return el;
    })
  }

  function _safeToLocalStorege() {
    localStorage.setItem('news', JSON.stringify($scope.news));
  }


});