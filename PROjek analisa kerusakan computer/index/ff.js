var ff = /** @class */ (function () {
    function ff() {
    }
    ff.prototype.getSelectedCheckboxValues = function (name) {
        var checkboxes = document.querySelectorAll("input[name=\"" + name + "\"]:checked");
        var values = [];
        checkboxes.forEach(function (checkbox) {
            values.push(checkbox.value);
        });
alert('masuk');
        return values;
    };
    return ff;
}());

function op(){
new ff();
} 