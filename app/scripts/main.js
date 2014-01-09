if(ko === undefined) {
    throw "KnockoutJS not properly loaded!";
}
function plusOne(num) {
    return num+1;
}
function cardViewModel() {
	'use strict';
	var self = this;

    self.flipped = ko.observable(false);
    self.content = ko.observable('content');
    self.identifier = ko.observable('identifier');
    self.className = ko.computed(function() {
        if(self.flipped()){
            return 'pair' + self.identifier() + ' card flipped';
        } else {
            return 'pair' + self.identifier() + ' card';
        }
    });
    self.flip = function() {
        if(self.flipped()){
            self.flipped(false);
        } else {
            self.flipped(true);
        }
    };

}

function AppViewModel() {
	'use strict';
	var self = this;
	self.result = 0;
	self.cards = ko.observableArray([]);
	self.addCards = function (code, visual) {
        var identifier = Date.now();
        self.addCard(identifier, code);
        self.addCard(identifier, visual);
	};
    self.addCard = function(identifier, content) {
        var card = new cardViewModel();
        card.content(content);
        card.identifier(identifier);
        self.cards.push(card);
        card = null;
    };
}
var app = new AppViewModel();
ko.applyBindings( app );
app.addCards('code1', 'visual1');
app.addCards('code2', 'visual2');
app.addCards('code3', 'visual3');
app.addCards('code4', 'visual4');
app.addCards('code5', 'visual5');
app.addCards('code6', 'visual6');
app.addCards('code7', 'visual7');
app.addCards('code8', 'visual8');
