(function(angular) {
    'use strict';

    angular
        .module('dedojr')
        .filter('CpfCnpj', CpfCnpj);

    CpfCnpj.$inject = [];

    function CpfCnpj() {

        function filtro(input) {
            var value = input || '' + '';

            if (CPF.isValid(value))
                return CPF.format(value, true);

            if (CNPJ.isValid(value))
                return CNPJ.format(value, true);

            return value;
        };

        return filtro;
    };
})(window.angular);
