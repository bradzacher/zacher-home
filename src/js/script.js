(function() {
    'use strict';

    var projects = [
        {
            name: 'DotA2 Stats',
            demoLink: 'http://dota.zacher.com.au/',
            description: 'A match stats site built using angularjs.',
            img: 'dota2-stats.png'
        },
        {
            name: 'Eaglesong',
            sourceLink: 'https://github.com/bradzacher/Eaglesong',
            description: 'A DotA2 replay parser, written in .NET.',
            img: 'Eaglesong.png'
        },
        {
            name: 'From Pictures to Programs with Genetic Programming',
            sourceLink: 'https://github.com/bradzacher/HonsRecursiveSolverGE',
            description: 'My honours thesis - evolves recursive solutions using GP.',
            img: 'HonsRecursiveSolverGE.png'
        },
        {
            name: 'cell-game',
            demoLink: 'http://zacher.com.au/git/cell-game/',
            sourceLink: 'http://github.com/bradzacher/cell-game',
            description: 'The framework of a 2D top-down game (aka Pokemon) built using pure javascript and CSS.',
            img: 'cell-game.png'
        },
        {
            name: 'SpacePhysics',
            demoLink: 'http://zacher.com.au/git/SpacePhysics/',
            sourceLink: 'http://github.com/bradzacher/SpacePhysics',
            description: 'A playground for some physics simulations.',
            img: 'SpacePhysics.png'
        }
    ];
    document.getElementById('projects-list').data = projects;
})();
