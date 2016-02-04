(function (ng) {
    var mod = ng.module('contractorModule', ['ngCrud']);

    mod.constant('contractorContext', 'contractors');

    mod.constant('contractorModel', {
        fields: [{
                name: 'name',
                displayName: 'Name',
                type: 'String',
                required: true
            }, {
                name: 'lastName',
                displayName: 'Last Name',
                type: 'String',
                required: true
            }, {
                name: 'document',
                displayName: 'Document',
                type: 'String',
                required: true
            }],
        childs: [{
                name: 'workExperiences',
                displayName: 'Work Experiences',
                //template: '', //override generic template
                ctrl: 'ContractorworkExperiencesCtrl',
                owned: true
            }, {
                name: 'skills',
                displayName: 'Skills',
                //template: '', //override generic template
                ctrl: 'ContractorsskillsCtrl',
                owned: false
            }]});
})(window.angular);