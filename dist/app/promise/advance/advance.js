"use strict";

var users = [{
    name: "Rodrigo",
    id: 1
}, {
    name: "Paul",
    repositories: []
}];

var repositories = [{
    name: "ES6 examples",
    commits: 12,
    user_id: 1,
    id: 1
}, {
    name: "Ember examples",
    commits: 22,
    user_id: 1,
    id: 2
}, {
    name: "Angular 2 examples",
    commits: 2,
    user_id: 1,
    id: 3
}, {
    name: "ASP.NET Vnext examples",
    commits: 9,
    user_id: 1,
    id: 4
}, {
    name: "React examples",
    commits: 32,
    user_id: 2,
    id: 5
}, {
    name: "D3 examples",
    commits: 12,
    user_id: 2,
    id: 6
}, {
    name: "Ruby examples",
    commits: 2,
    user_id: 2,
    id: 7
}];

var getUser = function (name) {
    var user = users.filter(function (user) {
        return user.name === name;
    });

    return user.length > 0 ? Promise.resolve(user[0]) : Promise.reject(Error("Not found!"));
};

var getRepositories = function (user_id) {
    var repos = repositories.filter(function (repo) {
        return repo.user_id === user_id;
    });

    return repos.length > 0 ? Promise.resolve(repos) : Promise.reject(Error("Not found!"));
};

var getRepository = function (id) {
    var repos = repositories.filter(function (repo) {
        return repo.id === id;
    });

    return repos.length > 0 ? Promise.resolve(repos[0]) : Promise.reject(Error("Not found!"));
};

getUser("Rodrigo").then(function (user) {
    console.log("User");
    console.log(user.id + " - " + user.name);
    return getRepositories(user.id);
}).then(function (repos) {
    console.log("Repos");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = repos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var repo = _step.value;

            console.log(repo.id + " - " + repo.name + " - " + repo.commits);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
                _iterator["return"]();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return getRepository(repos[0].id);
}).then(function (repo) {
    console.log("Repo");
    console.log(repo.id + " - " + repo.name + " - " + repo.commits);
})["catch"](function (error) {
    console.log(error.message);
});

getUser("Carlos").then(function (user) {
    console.log(user.id + " - " + user.name);
    return getRepositories(user.id);
}).then(function (repos) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = repos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var repo = _step.value;

            console.log(repo.id + " - " + repo.name + " - " + repo.commits);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
                _iterator["return"]();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return getRepository(repos[0].id);
}).then(function (repo) {
    console.log(repo.id + " - " + repo.name + " - " + repo.commits);
})["catch"](function (error) {
    console.log("Error");
    console.log(error.message);
});

var repos = [1, 2, 3, 4, 5, 6, 7];
var promises = [];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = repos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;

        promises.push(getRepository(id));
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

Promise.all(promises).then(function (_repos) {
    console.log("Repos All");
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = _repos[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _repo = _step2.value;

            console.log(_repo.id + " - " + _repo.name + " - " + _repo.commits);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                _iterator2["return"]();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
});

Promise.race(promises).then(function (_repo) {
    console.log("Repo Race");
    console.log(_repo.id + " - " + _repo.name + " - " + _repo.commits);
});