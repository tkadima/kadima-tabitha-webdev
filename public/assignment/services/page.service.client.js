(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);
    function PageService() {
        var pages =
            [
                { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
                { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
                { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
            ];
        var api = {
            "createPage" : createPage,
            "findpagesByUser" : findPageByWebsiteId,
            "findPageById" : findPageById,
            "updatePage" : updatePage,
            "deletePage" : deletePage
        };
        return api;
        function createPage(websiteId, page){
            var newPage = {
                _id :  page._id,
                name:  page.name,
                websiteId: websiteId,
                description: page.description

            };
            pages.push(newPage);
        }

        function findPageByWebsiteId(websiteId) {
            for (var i in pages) {
                page = pages[i];
                if (page.websiteId === websiteId) {
                    return page;
                }
            }
            return null;
        }

        function findPageById(pageId) {
            for (var i in pages) {
                page = pages[i];
                if (page._id === pageId) {
                    return page;
                }
            }
            return null;
        }

        function updatePage(pageId, page) {
            var indexPage = pages[pageId];
            indexPage._id = page._id;
            indexPage.name = page.name;
            indexPage.websiteId = page.websiteId;
            indexPage.description = page.description;
        }

        function deletePage(pageId)  {
            var indexPage = pages[pageId];
            pages.splice(indexPage, 1);
        }
    }
})();