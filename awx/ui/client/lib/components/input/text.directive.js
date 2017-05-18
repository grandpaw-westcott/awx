function atInputTextLink (scope, el, attrs, controllers) {
    let formController = controllers[0];
    let inputController = controllers[1];

    if (scope.tab === '1') {
        el.find('input')[0].focus();
    }

    inputController.init(scope, formController);
}

function AtInputTextController (baseInputController) {
    let vm = this || {};

    vm.init = (scope, form) => {
        baseInputController.call(vm, 'input', scope, form);

        vm.check();
    };
}

AtInputTextController.$inject = ['BaseInputController'];

function atInputText (pathService) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        require: ['^^atForm', 'atInputText'],
        templateUrl: pathService.getPartialPath('components/input/text'),
        controller: AtInputTextController,
        controllerAs: 'vm',
        link: atInputTextLink,
        scope: {
            state: '=',
            col: '@',
            tab: '@'
        }
    };
}

atInputText.$inject = ['PathService'];

export default atInputText;
