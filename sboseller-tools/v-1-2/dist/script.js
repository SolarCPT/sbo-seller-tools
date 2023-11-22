$(document).ready(function () {
	$("#calculate-btn").on("click", function () {
		$("#expense").remove("");
		document.getElementById("display-result").style.visibility = "visible";
		let e = parseFloat($("#product_fund").val()),
			t = parseFloat($("#sale_price").val()),
		  exps = parseFloat($("#any_expense").val()),
			a = $("#freeshipping"),
			l = $("#dailycashback"),
			o = parseFloat($("#voucher").val()),
			s = parseFloat($("#flexicombo").val()),
			i = parseFloat($("#coins").val());
		s = s > 0 ? (t * s) / 100 : 0;
		i = i > 0 ? (t * i) / 100 : 0;
		let c = parseFloat($("#shipping_fee_by_customer").val());
		c = c > 0 ? c : 0;
		let r = t > 0 ? (4.28 * (t - o - s - i)) / 100 : 0;
		r = parseFloat(r.toFixed(2));
		let p,
			F,
			n = t > 0 ? (3.21 * (t - o - s - i + c)) / 100 : 0;
		(n = parseFloat(n.toFixed(2))),
			a.is(":checked")
				? ((p = t > 0 ? (5.35 * (t - o - s - i)) / 100 : 0),
				  (p = parseFloat(p.toFixed(2))))
				: (p = 0),
			l.is(":checked")
				? ((F = t > 0 ? (3.21 * (t - o - s - i)) / 100 : 0),
				  (F = parseFloat(F.toFixed(2))))
				: (F = 0);
		let d = r + n + p + F;
		(d = parseFloat(d.toFixed(2)));
		let f = d > 0 ? t - o - s - i - d - e - (exps=exps>0?exps:0) : 0;
		(f = parseFloat(f.toFixed(2)));
		let TotalPayment = t - o - s - i + c ;
		(TotalPayment = parseFloat(TotalPayment.toFixed(2)));
		let createDisplayResult = $(
			"<div id='expense'><div id='totalpayment'>ยอดที่ลูกค้าต้องชำระ = "+TotalPayment+"</div><div id='commission-fees'><span class='dot_center'>ค่าธรรมเนียมการขาย: </span><span id='seller_com_fee'>" +
				r +
				"</span></div><div id='transaction-fees'><span class='dot_center'>ค่าธรรมเนียมการชำระเงิน: </span><span id='transaction_fee'>" +
				n +
				"</span></div><div id='freeshipping-fees'><span class='dot_center'>ค่าธรรมเนียมโปรแกรมส่งฟรี: </span><span id='freeshipping_fee'>" +
				p +
				"</span></div><div id='dailycashback-fees'><span class='dot_center'>ค่าธรรมเนียมเงินคืน: </span><span id='dailycashback_fee'>" +
				F +
				"</span></div><br><div id='total-fees'>ค่าธรรมเนียมทั้งหมด : <span id='total_fees'>" +
				d +
				"</span></div><!--Display the Profit if available--><div id='profit'><p><span>กำไร : </span><span id='net_profit'>" +
				f +
				"</span></p></div></div>"
		);
		$("#display-result").append(createDisplayResult);
	});
});
//reset btn
$(document).ready(function () {
	$("#btn_reset").on("click", function () {
		$("#calculate-price")[0].reset("");
		$("#expense").val("");
		$("#expense").remove("");
		// document.getElementById("display-result").style.visibility = "hidden";
	});
});
window.CSS.registerProperty({
	name: "--rotate",
	syntax: "<angle>",
	inherits: false,
	initialValue: "132deg"
});