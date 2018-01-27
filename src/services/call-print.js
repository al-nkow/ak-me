import angular from 'angular';

class CallPrint {

    constructor($timeout, $state) {
        this.header = '<div class="head"><img class="logo" src="/images/bktzr.png"></div>';
        this.$state = $state;
        this.$timeout = $timeout;
        this.styles = '<style>* {font-family: Helvetica, Arial, Sans-serif;}' +
            '.wrap {background: url("/images/bg_bktzr.png") top right no-repeat;' +
            'background-size: 18%;}' +
            '.head {padding: 10px;}' +
            'a {text-decoration: none; color: #333333;}' +
            '.logo {width: 150px;}' +
            '.f-buttons-wrap {display: none!important;}' +
            '.resume-attach {display: none;}' +
            '.resume-edit {display: none;}' +
            '.user-photo-upload-but {display: none;}' +
            '.resume-create-link {display: none;}' +
            '.contact-block {display: inline-block;position: relative;padding: 5px 10px 5px 35px;}' +
            '.contact-block__icon {position: absolute;top: 50%;-webkit-transform: translate(0,-50%);' +
            'transform: translate(0,-50%);left: 5px;width: 20px;height: 20px;fill: #333;}' +
            '.resume-details {box-sizing: content-box;width: 100%;border-collapse: collapse;border-spacing: 0;' +
            'margin: 0;padding: 0;border: 0;font: inherit;background-color: transparent;}' +
            '.resume-details td {vertical-align: top;padding: 10px 20px;border: 1px solid #e9e7e9;font-size: 16px;line-height: 20px;}' +
            '.rd-title {font-weight: 700;}' +
            '.resume-details tr.title {background: #eff8f9;}' +
            '.rd-skill {font-size: 15px;border: 1px solid #333;border-radius: 4px;display: inline-block;margin: 4px;padding: 2px 5px;}' +
            '.flex-none {display: inline-block;margin-right: 5px;}' +
            '.bkr-name {font-size: 22px;color: #333;margin-bottom: 5px;font-weight: 700;}' +
            '.bkr-details {font-size: 14px;font-weight: 300;margin-bottom: 10px;color: #d0021b;}' +
            '.bkr-position {margin-bottom: 10px;font-size: 18px;}' +
            '.bkr-salary {font-size: 14px;}' +
            '.bkr-salary__title {margin-right: 10px;}' +
            '.bkr-salary__amount {margin-right: 5px;}' +
            '.resume-main-info {padding: 20px 10px;position: relative;}' +
            '.bkr-contacts {margin-bottom: 20px;}' +
            '.resume-image-wrap {padding: 20px 40px;}' +
            '.resume-image {width: 120px;height: 120px;background-size: cover;border-radius: 50%;}' +
            '.layout-row {-webkit-box-orient: horizontal;-webkit-box-direction: normal;-webkit-flex-direction: row;' +
            'flex-direction: row;box-sizing: border-box;display: -webkit-box;display: -webkit-flex;display: flex;}' +
            '.flex-none {-webkit-box-flex: 0;-webkit-flex: 0 0 auto;flex: 0 0 auto;box-sizing: border-box;}' +
            '.flex {-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;box-sizing: border-box;}</style>';
    }

    print(str) {
        let WinPrint = window.open('','','left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
        WinPrint.document.write(this.styles);
        WinPrint.document.write('<div class="wrap">');
        WinPrint.document.write(this.header);
        WinPrint.document.write(str);
        WinPrint.document.write('</div>');
        this.$timeout(() => {
            WinPrint.document.close();
            WinPrint.focus();
            WinPrint.print();
            WinPrint.close();
            this.$state.reload(); // ?????????? why???
        }, 500)
    }

}

export default angular.module('services.call-print-service', [])
    .service('CallPrint', CallPrint)
    .name;