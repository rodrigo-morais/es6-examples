'use strict';

let users = [
    {
        name: 'Rodrigo',
        id: 1
    },
    {
        name: 'Paul',
        repositories: [
            
        ]
    }
];

let repositories = [
    {
        name: 'ES6 examples',
        commits: 12,
        user_id: 1,
        id: 1
    },
    {
        name: 'Ember examples',
        commits: 22,
        user_id: 1,
        id: 2
    },
    {
        name: 'Angular 2 examples',
        commits: 2,
        user_id: 1,
        id: 3
    },
    {
        name: 'ASP.NET Vnext examples',
        commits: 9,
        user_id: 1,
        id: 4
    },
    {
        name: 'React examples',
        commits: 32,
        user_id: 2,
        id: 5
    },
    {
        name: 'D3 examples',
        commits: 12,
        user_id: 2,
        id: 6
    },
    {
        name: 'Ruby examples',
        commits: 2,
        user_id: 2,
        id: 7
    }
];

let getUser = (name) => {
    let user = users.filter((user) => {
        return user.name === name;
    });

    return user.length > 0 ? Promise.resolve(user[0]) : Promise.reject(Error('Not found!'));
};

let getRepositories = (user_id) => {
    let repos = repositories.filter((repo) => {
        return repo.user_id === user_id;
    });

    return repos.length > 0 ? Promise.resolve(repos) : Promise.reject(Error('Not found!'));
};

let getRepository = (id) => {
    let repos = repositories.filter((repo) => {
        return repo.id === id;
    });

    return repos.length > 0 ? Promise.resolve(repos[0]) : Promise.reject(Error('Not found!'));
};

getUser('Rodrigo').then((user) => {
    console.log('User');
    console.log(user.id + ' - ' + user.name);
    return getRepositories(user.id);
}).then((repos) => {
    console.log('Repos');
    for(let repo of repos){
        console.log(repo.id + ' - ' + repo.name + ' - ' + repo.commits);
    }
    return getRepository(repos[0].id);
}).then((repo) => {
    console.log('Repo');
    console.log(repo.id + ' - ' + repo.name + ' - ' + repo.commits);
}).catch((error) => {
    console.log(error.message);
});

getUser('Carlos').then((user) => {
    console.log(user.id + ' - ' + user.name);
    return getRepositories(user.id);
}).then((repos) => {
    for(let repo of repos){
        console.log(repo.id + ' - ' + repo.name + ' - ' + repo.commits);
    }
    return getRepository(repos[0].id);
}).then((repo) => {
    console.log(repo.id + ' - ' + repo.name + ' - ' + repo.commits);
}).catch((error) => {
    console.log('Error');
    console.log(error.message);
});


let repos = [1,2,3,4,5,6,7];
let promises = [];

for(let id of repos){
    promises.push(getRepository(id));
}

Promise.all(promises).then((_repos) => {
    console.log('Repos All');
    for(let _repo of _repos){
        console.log(_repo.id + ' - ' + _repo.name + ' - ' + _repo.commits);
    }
});

Promise.race(promises).then((_repo) => {
    console.log('Repo Race');
    console.log(_repo.id + ' - ' + _repo.name + ' - ' + _repo.commits);
});