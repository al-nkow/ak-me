export default class ScreensModalController {

    constructor($window, $scope, screens, $mdDialog, currentIndex) {
        this.$scope    = $scope;
        this.screens   = screens;
        this.current   = currentIndex;
        this.$mdDialog = $mdDialog;

        $window.addEventListener('keydown', (event) => {
            if (event.key == 'ArrowRight') {
                this.moveFront(true);
            } else if (event.key == 'ArrowLeft') {
                this.moveBack(true);
            }
        });

    }

    moveFront(key) {
        this.current = this.current == this.screens.length - 1 ? 0 : this.current + 1;
        if (key) this.$scope.$apply();
    }

    moveBack(key) {
        this.current = this.current == 0 ? this.screens.length - 1 : this.current - 1;
        if (key) this.$scope.$apply();
    }

    hide() {
        this.$mdDialog.hide();
    };

    cancel() {
        this.$mdDialog.cancel();
    };

    answer(answer) {
        this.$mdDialog.hide(answer);
    };

}
