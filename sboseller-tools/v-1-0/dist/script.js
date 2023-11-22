$(document).ready(function () {
	$("#calculate-btn").on("click", function () {
		let e = parseFloat($("#product_fund").val()),
			t = parseFloat($("#sale_price").val()),
			a = $("#freeshipping"),
			l = $("#dailycashback"),
			o = parseFloat($("#voucher").val()),
			s = parseFloat($("#flexicombo").val()),
			i = parseFloat($("#coins").val());
		s = s > 0 ? (t * s) / 100 : 0;
		i = i > 0 ? (t * i) / 100 : 0;
		let c = parseFloat($("#shipping_fee_by_customer").val());
		c = c > 0 ? c : 0;
		let r = (4.28 * (t - o - s - i)) / 100;
		r = parseFloat(r.toFixed(2));
		let p,
			F,
			n = (3.21 * (t - o - s - i + c)) / 100;
		(n = parseFloat(n.toFixed(2))),
			a.is(":checked")
				? ((p = (5.35 * (t - o - s - i + c)) / 100), (p = parseFloat(p.toFixed(2))))
				: (p = 0),
			l.is(":checked")
				? ((F = (3.21 * (t - o - s - i)) / 100), (F = parseFloat(F.toFixed(2))))
				: (F = 0),
			$("#seller_com_fee").text(r),
			$("#transaction_fee").text(n),
			$("#freeshipping_fee").text(p),
			$("#dailycashback_fee").text(F);
		let d = r + n + p + F;
		(d = parseFloat(d.toFixed(2))), $("#total_fees").text(d);
		let f = t - o - s - i - d - e;
		(f = parseFloat(f.toFixed(2))), $("#net_profit").text(f);
	});
});
//reset btn
$(document).ready(function () {
	$("#btn_reset").on("click", function () {
		$("#calculate-price")[0].reset("");
		$("#seller_com_fee").text("");
		$("#transaction_fee").text("");
		$("#freeshipping_fee").text("");
		$("#dailycashback_fee").text("");
		$("#total_fees").text("");
		$("#net_profit").text("");
		//document.getElementById("cpyjquery").style.visibility = "hidden";
		//$("#convertshopeeurl").get(0).reset('');
	});
});