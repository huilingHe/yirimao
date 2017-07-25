window.onload = function () {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open('POST', 'https://api.yirimao.com/activity/get-newest-activity', true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var json = JSON.parse(xmlhttp.responseText);
            // console.log(222);
            console.log(xmlhttp)
            console.log(xmlhttp.responseText);
            // console.log(json);
            if (json.status = '2000') {
                render(json.data)
            }


        }
    }
}





function render(data) {
    new Vue({
        el: '#main',
        data: {
            carddata: data,
            activeIndex: 0,
            timer: undefined
        },
        methods: {
            changeCard: function () {
                var self = this;
                this.timer = setTimeout(function () {
                    self.timer && clearTimeout(self.timer);
                    if (self.activeIndex == self.carddata.cards.length - 1) {
                        self.activeIndex = 0
                    } else {
                        self.activeIndex++;
                    }
                    self.changeCard();
                }, 5000);
            },
            clearChange: function () {
                clearTimeout(this.timer);
            },
            modifyCard: function (index) {
                this.clearChange();
                this.activeIndex = index;
                this.changeCard();
            }
        },
        created: function () {
            this.changeCard();
            console.log(data)


        }

    })



}