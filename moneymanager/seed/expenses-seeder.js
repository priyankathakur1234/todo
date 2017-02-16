var Expenses=require('../models/expenses');
var mongoose=require('mongoose');
mongoose.connect('localhost:27017/MoneyManager')
	
//mongoose.connect('mongodb://Expenses:Expenses@ds147979.mlab.com:47979/moneymanager');

var expenses = [
new Expenses({
	Date:'15/2/2017',
	Account:'21u2848764',
	Category:'sdhfbhs',
	Amount:'76767675',
	Contents:'hvhgvhgc'
    }),

new Expenses({
	Date:'15/7/2017',
	Account:'lkkh78787',
	Category:'cash',
	Amount:'999999999',
	Contents:'hvhgvhgckbhbhbnn'
})
];
var done = 0;
for(var i=0;i<expenses.length;i++){
  expenses[i].save(function(err,result){
  	done++;
if(done === expenses.length){
	exit();
}
  });
}
function exit(){
	mongoose.disconnect();
}


