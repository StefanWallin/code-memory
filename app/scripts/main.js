if(ko === undefined) {
    throw "KnockoutJS not properly loaded!";
}

function cardViewModel() {
	'use strict';
	var self = this;

    self.flipped = ko.observable(false);
    self.front = ko.observable('front');
    self.back = ko.observable('back');
    self.className = ko.computed(function() {
        if(self.flipped()){
            return 'card flipped';
        } else {
            return 'card';
        }
    });
    self.flip = function() {
        console.log('flipping', self.flipped());
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
	self.addCard = function (front, back) {
        var card = new cardViewModel();
        card.front(front);
        card.back(back);
		self.cards.push(card);
	};
}
var app = new AppViewModel();
ko.applyBindings( app );
app.addCard('test1front', 'test2back');
