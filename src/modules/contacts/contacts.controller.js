export default class ContactsController {

    constructor(amToast) {

        this.amToast = amToast;
        this.letter = {};
        this.emailPattern = /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i;
    }

    sendMail(form) {

        if (form.$invalid) return false;

        let req = {
            method: 'POST',
            url: '/ak-me.ru/mail/mail.php', // изменить на /mail/mail.php
            data: self.letter
        };

        $http(req).then((res) => {
            if (res.status == 200 && res.data == 'Message sent!') {
                this.amToast.show('success', 2000, 'Your message was successfully sent');
                this.letter = {};
                form.$setPristine();
                form.$setUntouched();
            }
        }, (err) => {
            this.amToast.show('alert', 2000, 'Error. Message not sent.');
            console.log(err);
        });

    }

}

